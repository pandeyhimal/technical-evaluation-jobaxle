import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const limit = 8;

  const fetchProducts = async (pageNumber) => {
    try {
      setLoading(true);

      const skip = (pageNumber - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 mt-5 mb-15 pt-24 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Products
        </h1>

        {/* LOADING STATE */}
        {loading ? (
          <div className="text-center text-gray-500">
            Loading products...
          </div>
        ) : (
          <>
            {/* PRODUCT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  <h2 className="font-semibold mt-3 text-sm">
                    {product.title}
                  </h2>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between mt-3 text-sm font-medium">
                    <span className="text-blue-600">
                      ${product.price}
                    </span>

                    <span className="text-green-600">
                      ⭐ {product.rating}
                    </span>
                  </div>
                </div>
              ))}

            </div>

            <div className="flex justify-center items-center gap-4 mt-10">

              <button
                onClick={prevPage}
                disabled={page === 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              <span className="text-gray-700 font-medium">
                Page {page}
              </span>

              <button
                onClick={nextPage}
                className="px-4 py-2 border rounded"
              >
                Next
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Products;
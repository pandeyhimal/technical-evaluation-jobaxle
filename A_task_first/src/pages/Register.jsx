import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      alert(data.message || "Registered successfully");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Create Account</h2>
          <p className="text-sm text-black mt-1">
            Join us and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-black">Full Name</label>
            <input
              name="name"
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 text-black placeholder-gray/50 border border-white/20 outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          <div>
            <label className="text-sm text-black">Email</label>
            <input
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 text-black placeholder-gray/50 border border-white/20 outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          <div>
            <label className="text-sm text-black">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl bg-gray-100 text-black placeholder-gray/50 border border-white/20 outline-none focus:ring-2 focus:ring-white/50 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-100 transition duration-300 active:scale-95"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-black">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

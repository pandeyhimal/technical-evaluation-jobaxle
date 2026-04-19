import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 px-4">
        <section className="max-w-6xl mx-auto py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Find Your Dream Job or Hire Top Talent with{" "}
            <span className="text-blue-600">JobAxle</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A modern job ecosystem where companies meet talent instantly. Apply,
            hire, and grow your career faster than ever.
          </p>

          <div className="mt-8 flex flex-col-1 sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:text-black hover:bg-white hover:shadow-xl hover:scale-105 transition">
              Explore Jobs
            </button>

            {/* Task second */}
            <Link to="/apply">
              <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition">
                Apply Now
              </button>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "10K+", label: "Jobs Posted" },
              { num: "5K+", label: "Companies" },
              { num: "20K+", label: "Job Seekers" },
              { num: "95%", label: "Success Rate" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-md transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                  {item.num}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="bg-linear-to-b from-gray-50 to-white px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why JobAxle Feels Different
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Built with modern technology to make hiring and job searching
            faster, smarter, and simpler.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Matching",
                desc: "AI-based job recommendations tailored to your skills.",
              },
              {
                title: "Instant Hiring",
                desc: "Reduce hiring time with direct employer connections.",
              },
              {
                title: "Verified Profiles",
                desc: "Trust only verified companies and candidates.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">About JobAxle</h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            JobAxle is not just a job portal — it’s a career ecosystem. We
            connect students, professionals, and companies in one platform where
            opportunities meet talent instantly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

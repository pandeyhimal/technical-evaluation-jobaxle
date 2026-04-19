import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1Personal from "./Step1Personal";
import Step2Address from "./Step2Address";
import Step3Education from "./Step3Education";

const ParentForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    profession: "",
    email: "",

    country: "",
    province: "",
    municipality: "",
    wardNo: "",

    educationStatus: "",
    schoolName: "",
    university: "",
    faculty: "",
    degreeLevel: "",
    year: "",
    gpa: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateStep = () => {
    let err = {};

    if (step === 1) {
      if (!formData.fullName.trim()) err.fullName = "Full name is required";
      if (!formData.email.includes("@")) err.email = "Valid email required";
    }

    if (step === 2) {
      if (!formData.country.trim()) err.country = "Country is required";
      if (!formData.province.trim()) err.province = "Province is required";
    }

    if (step === 3) {
      if (!formData.university.trim())
        err.university = "University is required";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const next = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const back = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const submit = (e) => {
    e.preventDefault();

    if (validateStep()) {
      console.log("FINAL DATA:", formData);
      alert("Submitted Successfully!");
      navigate("/");
    }
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen mt-12 flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6"
      >
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {step === 1 && (
          <Step1Personal
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 2 && (
          <Step2Address
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 3 && (
          <Step3Education
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {/* =====================
            NAVIGATION
        ===================== */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="px-4 py-2 border rounded hover:bg-gray-100 transition"
            >
              Back
            </button>
          )}

          {step < totalSteps && (
            <button
              type="button"
              onClick={next}
              className="ml-auto px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Next
            </button>
          )}

          {step === totalSteps && (
            <button
              type="submit"
              className="ml-auto px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ParentForm;

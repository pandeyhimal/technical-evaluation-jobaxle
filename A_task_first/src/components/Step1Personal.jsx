import React from "react";

const Step1Personal = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Personal Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <input
          name="gender"
          placeholder="Male / Female / Other"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          name="age"
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profession
        </label>
        <input
          name="profession"
          placeholder="e.g. Developer, Student"
          value={formData.profession}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
    </div>
  );
};

export default Step1Personal;

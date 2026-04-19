import React from "react";

const Step3Education = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Education Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Current Education Status
        </label>
        <select
          name="educationStatus"
          value={formData.educationStatus}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select status</option>
          <option value="studying">Currently Studying</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          School / College Name
        </label>
        <input
          name="schoolName"
          placeholder="e.g. XYZ Secondary School"
          value={formData.schoolName}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          University / College
        </label>
        <input
          name="university"
          placeholder="e.g. Tribhuvan University"
          value={formData.university}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.university && (
          <p className="text-red-500 text-sm mt-1">{errors.university}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Faculty / Stream
        </label>
        <input
          name="faculty"
          placeholder="e.g. Science, Management, IT, Arts"
          value={formData.faculty}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Degree Level
        </label>
        <input
          name="degreeLevel"
          placeholder="e.g. +2, Bachelor, Master"
          value={formData.degreeLevel}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          GPA / Percentage
        </label>
        <input
          name="gpa"
          placeholder="e.g. 3.5 / 85%"
          value={formData.gpa}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </div>
  );
};

export default Step3Education;

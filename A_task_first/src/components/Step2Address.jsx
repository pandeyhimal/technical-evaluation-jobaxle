import React from "react";

const Step2Address = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-5">

      <h2 className="text-xl font-semibold">Address Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <input
          name="country"
          placeholder="e.g. Nepal"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Province / State
        </label>
        <input
          name="province"
          placeholder="e.g. Bagmati Province"
          value={formData.province}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Municipality
        </label>
        <input
          name="municipality"
          placeholder="e.g. Kathmandu Metropolitan City"
          value={formData.municipality}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ward Number
        </label>
        <input
          name="wardNo"
          type="number"
          placeholder="e.g. 10"
          value={formData.wardNo}
          onChange={handleChange}
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

    </div>
  );
};

export default Step2Address;
import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="border border-black p-4 rounded bg-white">
        <h4 className="mb-5 font-bold">Oil Change Locations</h4>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            {['All Locations', 'Service Center', 'Mobil 1 Lube Express', 'Car Dealer'].map((label, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                <input type="radio" name="filter" className="form-radio" />
                <span>{label}</span>
                </label>
            ))}
        </div>
    </div>
  );
};

export default Filters;
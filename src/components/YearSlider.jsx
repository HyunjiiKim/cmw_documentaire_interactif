import React, { useState } from "react";

const YearSlider = ({ selectedYear, onChange }) => {
  const years = [1950, 1951, 1952, 2019];
  const selectedIndex = years.indexOf(selectedYear ?? years[0]);

  return (
    <div className="w-[400px] pt-6 text-white text-center">
      <div className="flex justify-between mb-2">
        {years.map((year) => (
          <span
            key={year}
            className={`text-sm tracking-wide ${
              selectedYear === year ? "text-primary-1" : "text-white"
            }`}
          >
            {year}
          </span>
        ))}
      </div>

      <input
        type="range"
        min={0}
        max={years.length - 1}
        step={1}
        value={selectedIndex}
        onChange={(e) => onChange(years[parseInt(e.target.value, 10)])}
        className="w-full accent-white"
      />
    </div>
  );
};

export default YearSlider;

import React, { useState } from 'react';

const FilterSidebar = () => {
  const [keywordInput, setKeywordInput] = useState('');
  const [keywords, setKeywords] = useState(['Spicy', 'Tacos', 'Nachos']);
  const [priceRange, setPriceRange] = useState(58);


  const [cuisines, setCuisines] = useState({
    Indian: true,
    Mexican: true,
    Lebanese: true,
  });

  const [types, setTypes] = useState({
    Cafe: true,
    'Fine Dining': true,
    'Food Truck': true,
  });

  const handleAddKeyword = (e) => {
    e.preventDefault();
    const trimmed = keywordInput.trim();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
      setKeywordInput('');
    }
  };

  const removeKeyword = (word) => {
    setKeywords((prev) => prev.filter((k) => k !== word));
  };

  const toggleCheckbox = (group, setGroup, key) => {
    setGroup((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="border rounded-xl p-8 w-full h-full shadow-lg space-y-6 bg-white max-w-xs">
      {/* Keyword Input */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Keywords</h2>
        <form onSubmit={handleAddKeyword} className="mb-3">
          <input
            type="text"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            placeholder="Enter your preference"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-gray-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddKeyword(e);
              }
            }}
          />
        </form>
        <div className="flex flex-wrap gap-2">
          {keywords.map((word, i) => (
            <span
              key={i}
              className="bg-gray-200 text-sm px-4 py-2 rounded-full flex items-center"
            >
              {word}
              <button
                onClick={() => removeKeyword(word)}
                className="ml-2 text-black hover:text-red-600 font-bold text-lg"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>


    {/* Price Range */}
        <div>
            <h2 className="text-lg font-semibold mb-3">Price Range</h2>
            <div className="flex items-center justify-between text-sm mb-1">
                <span>$0</span>
                <span>${priceRange}</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                background: `linear-gradient(to right, #000000 0%, #000000 ${priceRange}%, #e5e7eb ${priceRange}%, #e5e7eb 100%)`,
                }}
            />
        </div>


      {/* Cuisine Checkboxes */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Cuisine</h2>
        <div className="space-y-2">
          {Object.entries(cuisines).map(([key, value]) => (
            <label key={key} className="flex items-center gap-3 text-base">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleCheckbox(cuisines, setCuisines, key)}
                className="w-5 h-5 accent-black"
              />
              {key}
            </label>
          ))}
        </div>
      </div>

      {/* Type Checkboxes */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Type</h2>
        <div className="space-y-2">
          {Object.entries(types).map(([key, value]) => (
            <label key={key} className="flex items-center gap-3 text-base">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleCheckbox(types, setTypes, key)}
                className="w-5 h-5 accent-black"
              />
              {key}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

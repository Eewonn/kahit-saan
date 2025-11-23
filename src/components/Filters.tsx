'use client';

import { useState } from 'react';

const filterOptions = ['Eat', 'Chill', 'Date', 'Gala'];

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-4">
      {filterOptions.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';

export default function SearchForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [searchQuery, setSearchQuery] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sample suggestions data
  const allSuggestions = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Miami',
    'Houston',
    'San Francisco',
    'Seattle',
    'Boston',
    'Austin',
    'Denver',
  ];

  // Define the countries array
  const countries = [
    { 
      name: 'USA', 
      flag: (
        <svg className="h-3.5 w-3.5 me-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* USA flag SVG paths */}
        </svg>
      )
    },
    {
      name: 'Germany',
      flag: (
        <svg className="h-3.5 w-3.5 me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* Germany flag SVG paths */}
        </svg>
      )
    },
    {
      name: 'Italy',
      flag: (
        <svg className="h-3.5 w-3.5 me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* Italy flag SVG paths */}
        </svg>
      )
    },
    {
      name: 'China',
      flag: (
        <svg className="h-3.5 w-3.5 me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* China flag SVG paths */}
        </svg>
      )
    }
  ];

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filteredSuggestions = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && !tags.includes(searchQuery.trim())) {
      setTags([...tags, searchQuery.trim()]);
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  // Handle tag deletion
  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    if (!tags.includes(suggestion)) {
      setTags([...tags, suggestion]);
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
      {/* Search Bar */}
      <form className="w-full md:max-w-md relative" onSubmit={handleSearch}>
        {/* Parent container for search elements */}
        <div className="flex items-center rounded-l-full rounded-r-full focus-within:border-customGreen focus-within:ring-1 focus-within:ring-customGreen">
          {/* Country dropdown container */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-l border-[#cccccc] rounded-l-full hover:bg-gray-200 focus:outline-none"
            >
              <svg className="h-3 me-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* USA flag SVG paths */}
              </svg>
              {selectedCountry}
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
            //   <div className="z-20 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-1">
            //     <ul className="py-2 text-sm text-gray-700">
            //       {countries.map((country) => (
            //         <li key={country.name}>
            //           <button
            //             type="button"
            //             onClick={() => {
            //               setSelectedCountry(country.name);
            //               setIsDropdownOpen(false);
            //             }}
            //             className="inline-flex w-full px-4 py-2 hover:bg-gray-100 items-center"
            //           >
            //             {country.flag}
            //             {country.name}
            //           </button>
            //         </li>
            //       ))}
            //     </ul>
            //   </div>
            <div className="z-20 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 mt-1">
  <ul className="py-2 text-sm text-gray-700">
    {countries.map((country) => (
      <li key={country.name}>
        <button
          type="button"
          onClick={() => {
            setSelectedCountry(country.name);
            setIsDropdownOpen(false);
          }}
          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 items-center"
        >
          {country.flag}
          {country.name}
        </button>
      </li>
    ))}
  </ul>
</div>
            )}
          </div>

          {/* Search input container */}
          <div className="flex-1 border-t border-b  border-[#cccccc]  bg-white  transition-colors">
            <input
              type="search"
              id="location-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-white border-0  placeholder-gray-500 focus:outline-none"
              placeholder="Search"
              required
            />
          </div>

          {/* Submit button (separate from input container) */}
          <button
            type="submit"
            className="shrink-0  py-3 px-3 text-sm font-medium bg-gray-100 hover:bg-gray-200 border-t border-b border-r  border-[#cccccc] rounded-r-full focus:outline-none"
          >
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute  z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto custom-scrollbar">
            <ul className="py-2 text-sm text-gray-700">
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>

      {/* Tags Section */}
      <div className="flex-1 w-full md:w-auto overflow-x-auto whitespace-nowrap custom-scrollbar">
        <div className="inline-flex gap-2 p-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 text-sm bg-[#20BEAD] text-white rounded-full"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleDeleteTag(tag)}
                className="ml-2 p-0.5 rounded-full hover:bg-[#1AA797] focus:outline-none"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


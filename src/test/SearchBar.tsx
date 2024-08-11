import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div
      className="w-[40%] p-[2px] rounded-lg"
      style={{
        background: 'linear-gradient(to bottom right, #22c55e, #06b6d4, #3b82f6)',
      }}
    >
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full py-2 px-5 bg-emerald-50 rounded-lg focus:outline-none focus:ring-0 border-none"
        style={{
          backgroundClip: 'padding-box',
        }}
        autoFocus
      />
    </div>
  );
};

export default SearchBar;

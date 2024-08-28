import React, { useState, createContext, useContext } from 'react';

// Create a context with default values
const FilterContext = createContext<{ filterText: string; setFilterText: React.Dispatch<React.SetStateAction<string>> }>({
  filterText: '',
  setFilterText: () => {},
});

const FilterProvider: React.FC = ({ children }) => {
  const [filterText, setFilterText] = useState<string>("");
  
  return (
    <FilterContext.Provider value={{ filterText, setFilterText }}>
  {children}
  </FilterContext.Provider>
);
};

export default FilterProvider;

// Custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);

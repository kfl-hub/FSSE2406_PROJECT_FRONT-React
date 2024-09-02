import React, {createContext, ReactNode, useContext, useState} from 'react';


interface FilterContextType {
  filterText: string;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
}
interface FilterProviderProps {
  children: ReactNode; // Define the children prop type
}
// Create a context with default values
const FilterContext = createContext<FilterContextType>({
    filterText: '',
    setFilterText: () => {},
});

const FilterProvider: React.FC <FilterProviderProps>= ({children}) => {
    const [filterText, setFilterText] = useState<string>("");

    return (
        <FilterContext.Provider value={{filterText, setFilterText}}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;

// Custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);

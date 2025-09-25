import { createContext, useContext, useEffect, useState } from "react";

const SpaceDetailsContext = createContext({ data: null });

export function SpaceDetailsProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    search: "",
    city: "",
    resType: "",
    minPrice: null,
    maxPrice: null,
  });

  // Fetches the JSON File for the Reservation Data
  useEffect(() => {
    setLoading(true);
    console.log("Fetching spaces.json...");
    fetch("/data/spaces.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json ?? []);
      })
      .catch((err) => {
        console.log("Error fectching!");
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Collects list of cities
  const cityList = [...new Set((data ?? []).map(d => d.city))];

  // Filters data based on parameters from search function
  const filterData = (data ?? []).filter((d) => {
    const searchMatches =
      !filter.search ||
      d.name.toLowerCase().includes(filter.search.toLowerCase());

    const locMatches = !filter.city || d.city === filter.city;

    const resTypeMatches = !filter.resType || d.reservation_type === filter.resType;

    const priceMatches =
      (filter.minPrice == null || d.price >= filter.minPrice) &&
      (filter.maxPrice == null || d.price <= filter.maxPrice);

    return searchMatches && locMatches && resTypeMatches && priceMatches;
  });

  return (
    <SpaceDetailsContext.Provider
      value={{
        data,
        loading,
        filter,
        cityList,
        filterData,
        setFilter,
      }}
    >
      {children}
    </SpaceDetailsContext.Provider>
  );
}

export const useSpaceDetails = () => useContext(SpaceDetailsContext);

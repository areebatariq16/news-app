import React, { createContext, useState} from 'react';
import debounce from 'lodash.debounce';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const API_KEY = "045d5809566c4522a742e60fdbe01cb8";

  const getData = debounce(async (searchTerm) => {
    if (!searchTerm.trim()) {
      console.log("Search query is empty");
      return;
    }
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 500); // Adjust the debounce delay as needed


  return (
    <NewsContext.Provider
      value={{
        search,
        setSearch,
        newsData,
        showForm,
        setShowForm,
        getData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

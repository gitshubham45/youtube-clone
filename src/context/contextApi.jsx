import { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
import { optionalSearchResult } from "../constants/searchArray";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [singleVideo , setSingleVideo] = useState({});

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setSearchResults(optionalSearchResult);
        setLoading(true);
        try {
            const {contents} = await fetchDataFromApi(`search/?q=${query}`); 
            // console.log(contents)
            setSearchResults(contents);
            setLoading(false);
        }catch (e) {
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <Context.Provider 
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                singleVideo,
                setSingleVideo,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )

}
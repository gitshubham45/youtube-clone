import { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        try {
            const {contents} = await fetchDataFromApi(`search/?q=${query}`) 
            console.log(contents)
            setSearchResults(contents);
            setLoading(false);
        }catch (e) {
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
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )

}
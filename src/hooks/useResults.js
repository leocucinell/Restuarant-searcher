import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        handleTermSearch("italian");
    }, [])

    const handleTermSearch = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                term: searchTerm,
                limit: 50,
                location: 'san jose'
            }
        });
        const restuarants = response.data.businesses;
        setResults(restuarants);
        } catch (err) {
            setErrorMsg("Something went wrong")
        }
    }

    //Return the necessary items from this hook
    return [handleTermSearch, errorMsg, results]

}
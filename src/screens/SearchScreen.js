import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import useResults from "../hooks/useResults";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const [handleTermSearch, errorMsg, results] = useResults();

    const filterResults = (price) => {
        //price === '$', '$$', '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return(
        <>
            <SearchBar 
                term={term} 
                setTerm={setTerm} 
                onTermSubmit={() => handleTermSearch(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResults('$')} title="Cost Effective" />
                <ResultsList results={filterResults('$$')} title="Bit Pricier" />
                <ResultsList results={filterResults('$$$')} title="Big Spender" />
                <ResultsList results={filterResults('$$$$')} title="You're Rich!" />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
})

export default SearchScreen;
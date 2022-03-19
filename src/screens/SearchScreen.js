import React, { useState } from "react";
import {StyleSheet, Text, View} from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState("");

    const handleTermSubmit = () => {
        console.log(term);
    }

    return(
        <View>
            <SearchBar 
                term={term} 
                setTerm={setTerm} 
                onTermSubmit={handleTermSubmit}
            />
            <Text>Hello Search Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default SearchScreen;
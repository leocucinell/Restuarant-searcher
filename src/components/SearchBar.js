import React from "react";
import {StyleSheet, View, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({setTerm, term, onTermSubmit}) => {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setTerm} 
                value={term} 
                style={styles.inputStyle} 
                placeholder="Search..." 
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }, 
    iconStyle: {
        fontSize: 40,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar;
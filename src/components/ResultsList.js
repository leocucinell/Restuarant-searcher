import React from "react";
import { withNavigation } from "react-navigation";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";

import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {

    const renderRestuarant = ({item}) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate('Show', {
                id: item.id
            })}>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
    }

    if(!results.length){
        return null
    }
    return(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                renderItem={renderRestuarant} 
                data={results} 
                horizontal={true}
                keyExtractor={(result) => result.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default withNavigation(ResultsList);
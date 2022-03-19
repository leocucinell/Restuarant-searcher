import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Image, FlatList} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {

    const [ result, setResult ] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
         try{
            const response = await yelp.get(`${id}`);
            setResult(response.data);
         } catch(err) {
            console.log("Something went wrong")
         }
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result){
        return null;
    }
    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos} 
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});

export default ResultsShowScreen;
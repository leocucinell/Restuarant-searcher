import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Image} from "react-native";
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

    return(
        <Text>ResultsShowScreen for {id}</Text>
    )
}

const styles = StyleSheet.create({});

export default ResultsShowScreen;
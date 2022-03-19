import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ResultDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} ></Image>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"
    },
    container: {
        marginLeft: 15
    }
});

export default ResultDetail;
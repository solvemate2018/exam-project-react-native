import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function (props) {

    return (
        <View style={styles.container}>

            <EntypoIcon name={props.type} size={30} color={props.focused ? "#32305D" : "grey"} />
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})
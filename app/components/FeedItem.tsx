import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function FeedItem(props) {
    const event = props.event;

    const getImage = url => {
        switch (url) {
            case "":
                return require("../assets/logo.png")
            default:
                return { uri: url }

        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <ImageBackground blurRadius={1} imageStyle={styles.backgroundImage} style={styles.background} source={getImage(props.event.pictureUrl)}>
                    <LinearGradient
                        colors={['#00000000', '#000000']}
                        style={styles.gradient}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{event.name}</Text>
                        <Text style={styles.category}>{event.category}</Text>
                        <Text style={styles.time}>
                            <EntypoIcon name={"clock"} size={20} color={"white"} /> {event.dateTime.toString()}
                        </Text>
                        <Text style={styles.location}>
                            <EntypoIcon name={"location-pin"} size={20} color={"white"} />{event.location}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        height: "100%",
        width: "90%",
        justifyContent: "flex-end",
        alignItems: "flex-start"
    },
    background: {
        height: 200,
        width: "100%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        borderRadius: 15,
    },
    touchable: {
        height: 150,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        bottom: 10,
        borderRadius: 15,
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: 25,
        color: "white"
    },
    category: {
        color: "white",
        fontSize: 14
    },
    location: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    time: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    }
});
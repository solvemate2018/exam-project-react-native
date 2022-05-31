import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function DiscoveryCategory(props) {
    const categoryName = props.name;
    const imageUrl = props.imageUrl;

    const tint: any = {
        height: "100%",
        width: "100%",
        backgroundColor: props.color,
        opacity: 0.85,
        position: "absolute",
        borderRadius: 10
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable}>
                <ImageBackground blurRadius={1} imageStyle={styles.backgroundImage} style={styles.background} source={{ uri: imageUrl }}>
                    <View style={tint}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            {"ALL " + categoryName.toUpperCase()}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        height: 125,
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        borderRadius: 10,
    },
    touchable: {
        height: 135,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});
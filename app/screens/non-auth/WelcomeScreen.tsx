import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../typings/navigations';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Welcome">;

export function WelcomeScreen() {
    const navigation = useNavigation<ScreenNavigationType>();

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate("Signup") }}>
            <View style={styles.top} />
            <View style={styles.headline} >
                <Text style={styles.headlineText}>Student Life</Text>
                <Text style={styles.headlineText}>at</Text>
                <Text style={styles.headlineText}>Copenhagen Business School</Text>
            </View>
            <View style={styles.by}>
                <Text style={styles.greyText}>BY</Text>
            </View>

            <View style={styles.logo}>
                <Image source={require("../../assets/logo.png")}></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    headline: {
        height: "20%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    by: {
        height: "15%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: "20%",
        width: "100%"
    },
    top: {
        height: "40%",
        width: "100%"
    },
    headlineText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#32305D"
    },
    greyText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "grey"
    }
})

export default WelcomeScreen
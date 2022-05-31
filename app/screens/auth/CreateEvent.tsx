import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { MenuNavigationList } from '../../typings/navigations';

type ScreenNavigationType = NativeStackNavigationProp<MenuNavigationList, "CreateEvent">;

export default function CreateEvent() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [location, setLocation] = useState('');

    const dispatch = useDispatch();


    const navigation = useNavigation<ScreenNavigationType>();
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.header}>Create Event</Text>
            </View>
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={name} placeholder="Name" onChangeText={setName} />
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={category} placeholder="Category" onChangeText={setCategory} />
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={dateTime} placeholder="Date and Time" onChangeText={setDateTime} />
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={location} placeholder="Location" onChangeText={setLocation} />
            <View style={styles.button}>
                <Button title="Log in" color="#32305D" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.loginLink}>Don't have an account? Sign up!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        fontWeight: 'bold',
        color: "#32305D",
        fontSize: 25,
        alignSelf: "flex-start",
    },
    textField: {
        height: "13%",
        width: "90%",
    },
    logo: {
        height: 180,
        width: 180
    },
    headerView: {
        alignSelf: "center",
        width: "85%"
    },
    button: {
        height: 80,
        width: "80%"
    },
    loginLink: {
        fontSize: 17
    },
    emptyHeader: {
        height: 100
    }
})
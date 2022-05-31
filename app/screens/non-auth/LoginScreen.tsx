import { Text, StyleSheet, View, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../stores/actions/user.actions';
import { StackParamList } from '../../typings/navigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Login">;

export function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigation = useNavigation<ScreenNavigationType>();

    return (
        <View style={styles.container}>
            <View style={styles.emptyHeader} />
            <Image style={styles.logo} source={require("../../assets/smallLogo.png")}></Image>
            <View style={styles.headerView}>
                <Text style={styles.header}>Log in</Text>
            </View>
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={email} placeholder="E-MAIL" onChangeText={setEmail} />
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={password} placeholder="PASSWORD" onChangeText={setPassword} />
            <View style={styles.button}>
                <Button title="Log in" color="#32305D" onPress={() => dispatch(login(email, password))} />
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
export default LoginScreen;
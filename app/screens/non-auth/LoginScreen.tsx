import { Text, StyleSheet, View, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../stores/actions/user.actions';
import { StackParamList } from '../../typings/navigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import PasswordValidator from 'password-validator';
import { validate } from 'email-validator';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Login">;

export function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigation = useNavigation<ScreenNavigationType>();

    let passwordSchema = new PasswordValidator();
    passwordSchema
        .is().min(6)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(1)
        .has().not().spaces()

    return (
        <View style={styles.container}>
            <View style={styles.emptyHeader} />
            <Image style={styles.logo} source={require("../../assets/smallLogo.png")}></Image>
            <View style={styles.headerView}>
                <Text style={styles.header}>Log in</Text>
            </View>
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={email} placeholder="E-MAIL" onChangeText={setEmail} />
            {!validate(email) && email != "" && <Text style={styles.errorText}>This is not a proper Email</Text>}
            <TextInput secureTextEntry={true} placeholderTextColor="#32305D" style={styles.textField} value={password} placeholder="PASSWORD" onChangeText={setPassword} />
            {!passwordSchema.validate(password) && password != "" && <Text style={styles.errorText}>Should include: 1 Uppercase letter, 1 Lowercase letter and 1 Number</Text>}
            <View style={styles.button}>
                <Button title="Log in" color="#32305D" onPress={() => dispatch(login(email, password))} />
            </View>
            <TouchableOpacity onPress={() => { if (validate(email) && passwordSchema.validate(password)) dispatch(login(email, password)); else alert("Cannot login with invalid data") }}>
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
    },
    errorText: {
        fontSize: 10,
        color: "red"
    }
})
export default LoginScreen;
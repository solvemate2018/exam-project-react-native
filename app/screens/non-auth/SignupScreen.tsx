import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, signup } from '../../stores/actions/user.actions';
import { StackParamList } from '../../typings/navigations';
import { validate } from 'email-validator';
import PasswordValidator from 'password-validator';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, "Signup">;

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
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
                <Text style={styles.header}>Sign up to get access</Text>
            </View>
            <TextInput placeholderTextColor="#32305D" style={styles.textField} value={email} placeholder="E-MAIL" onChangeText={setEmail} />
            {!validate(email) && email != "" && <Text style={styles.errorText}>This is not a proper Email</Text>}
            <TextInput secureTextEntry={true} placeholderTextColor="#32305D" style={styles.textField} value={password} placeholder="PASSWORD" onChangeText={setPassword} />
            {!passwordSchema.validate(password) && password != "" && <Text style={styles.errorText}>Should include: 1 Uppercase letter, 1 Lowercase letter and 1 Number</Text>}
            <TextInput secureTextEntry={true} placeholderTextColor="#32305D" style={styles.textField} value={repeatPassword} placeholder="REPEAT PASSWORD" onChangeText={setRepeatPassword} />
            {password != repeatPassword && repeatPassword != "" && <Text style={styles.errorText}>Password is not matching</Text>}
            <View style={styles.button}>
                <Button title="Get access" color="#32305D" onPress={() => { if (validate(email) && passwordSchema.validate(password) && password != repeatPassword && repeatPassword) dispatch(signup(email, password, repeatPassword)); else alert("Cannot register with invalid data") }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginLink}>Already have a user? Log in!</Text>
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
        color: "red",
    }
})
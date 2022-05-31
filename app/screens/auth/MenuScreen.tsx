import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App';
import SettingsOption from '../../components/SettingsOption';
import { logout } from '../../stores/actions/user.actions';
import { MenuNavigationList } from '../../typings/navigations';

type ScreenNavigationType = NativeStackNavigationProp<MenuNavigationList, "Menu">;

export default function MenuScreen() {
    const user = useSelector((state: RootState) => state.user.loggedInUser)
    const dispatch = useDispatch();

    const navigation = useNavigation<ScreenNavigationType>();

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.profilePictureView}>
                    <Image source={{ uri: "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg" }} style={styles.profilePicture} ></Image>
                </View>
                <View style={styles.profileInfoView}>
                    <Text style={styles.username}>{"user.fullName"}</Text>
                    <Text style={styles.userEmail}>{"user.email"}</Text>
                    <Text style={styles.userCourse}>{"user.specialty"}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
                <Text style={styles.editProfileText}>Edit profile</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <View style={styles.optionCategory}>
                <Text style={styles.username}>Notifications</Text>
            </View>
            <View style={styles.options}>
                <SettingsOption name="Chat" description="When you receive a new message" />
                <SettingsOption name="Event reminder" description="An hour before events you are 'going to'" />
            </View>
            <View style={styles.line} />
            <View style={styles.logout} >
                <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(logout())}>
                    <Text style={styles.logoutButtonText}>LOG OUT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('CreateEvent')}>
                    <Text style={styles.logoutButtonText}>CREATE EVENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    editProfileButton: {
        height: 40,
        width: "90%",
        borderRadius: 8,
        backgroundColor: "#32305D",
        alignItems: 'center',
        justifyContent: 'center',
    },
    editProfileText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    userInfo: {
        height: 120,
        width: "95%",
        flexDirection: 'row'
    },
    profilePictureView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2
    },
    profileInfoView: {
        flex: 5,
        justifyContent: "center"
    },
    username: {
        color: "#32305D",
        fontSize: 25,
        fontWeight: 'bold'
    },
    userEmail: {
        fontSize: 13,
    },
    userCourse: {
        fontSize: 13,
    },
    optionCategory: {
        height: 60,
        width: "90%",
        justifyContent: "center",
        alignSelf: "center"
    },
    line: {
        borderBottomColor: '#dce0dd',
        borderBottomWidth: 1,
        height: 30,
        width: "85%"
    },
    options: {
        width: "90%",
        height: 220,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    logoutButton: {
        height: 60,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    logoutButtonText: {
        fontSize: 20,
        color: "#32305D",
        fontWeight: "bold",
    },
    logout: {
        width: "90%",
        flex: 1,
        justifyContent: "space-evenly"
    }
})
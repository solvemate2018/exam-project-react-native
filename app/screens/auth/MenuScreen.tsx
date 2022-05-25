import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App';

export default function MenuScreen() {
    const user = useSelector((state: RootState) => state.user.loggedInUser)
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
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
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
    }
})
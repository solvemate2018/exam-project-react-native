import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SettingsOption(props) {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.switch}>
                <Switch style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} trackColor={{ false: "#d4d4d4", true: "#dcdcee" }} thumbColor={isSwitchOn ? "#32305D" : "#808080"} value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 80,
        width: "100%",
        borderRadius: 5,
        justifyContent: "center",
        flexDirection: "row"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#32305D"
    },
    description: {
        fontSize: 14,
        color: "grey"
    },
    text: {
        width: "75%",
        height: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
    switch: {
        width: "20%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})
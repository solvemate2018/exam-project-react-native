import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { MenuNavigationList } from "../../typings/navigations";
import CreateEvent from "../auth/CreateEvent";
import MenuScreen from "../auth/MenuScreen";


const Stack = createNativeStackNavigator<MenuNavigationList>();

export default function MenuNavigation() {

    return (
        <Stack.Navigator screenOptions={({ route, navigation }) => ({
            headerShown: false,
        })}>
            <Stack.Screen name='Menu' component={MenuScreen}></Stack.Screen>
            <Stack.Screen name='CreateEvent' component={CreateEvent}></Stack.Screen>
        </Stack.Navigator>
    )
}
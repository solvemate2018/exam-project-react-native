import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";
import LoginScreen from "./screens/non-auth/LoginScreen";
import SignupScreen from "./screens/non-auth/SignupScreen";
import WelcomeScreen from "./screens/non-auth/WelcomeScreen";
import { StackParamList } from "./typings/navigations";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/auth/HomeScreen";
import DiscoveryScreen from "./screens/auth/DiscoveryScreen";
import ChatScreen from "./screens/auth/ChatScreen";
import MenuScreen from "./screens/auth/MenuScreen";
import TabBarIcon from "./components/TabBarIcon";
import { StyleSheet } from "react-native";
import { fetchAll } from "./stores/actions/event.actions";



const Stack = createNativeStackNavigator<StackParamList>();

export default function Main() {
    const user = useSelector((state: RootState) => state.user.loggedInUser)
    const Tab = createBottomTabNavigator();

    return (
        user !== null ? (
            <NavigationContainer>
                <Stack.Navigator screenOptions={({ route, navigation }) => ({
                    headerShown: false,
                })}>
                    <Stack.Screen name='Welcome' component={WelcomeScreen}></Stack.Screen>
                    <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        ) : (
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerTintColor: '#32305D',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: "center"
                }}>
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        tabBarIcon: ({ focused, size, color }) => <TabBarIcon type="home" text="Home" focused={focused} />,
                        tabBarShowLabel: false,
                        title: "FEED"
                    }} />
                    <Tab.Screen name="Discovery" component={DiscoveryScreen} options={{
                        tabBarIcon: ({ focused, size, color }) => <TabBarIcon type="magnifying-glass" text="Discovery" focused={focused} />,
                        tabBarShowLabel: false,
                        title: "DISCOVERY"
                    }} />
                    <Tab.Screen name="Chat" component={ChatScreen} options={{
                        tabBarIcon: ({ focused, size, color }) => <TabBarIcon type="chat" text="Chat" focused={focused} />,
                        tabBarShowLabel: false,
                        title: "CHAT"
                    }} />
                    <Tab.Screen name="Menu" component={MenuScreen} options={{
                        tabBarIcon: ({ focused, size, color }) => <TabBarIcon type="menu" text="Menu" focused={focused} />,
                        tabBarShowLabel: false,
                        title: "MENU"
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    )
}
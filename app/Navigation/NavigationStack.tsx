import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Feather'
import React from "react"
import { View, TouchableOpacity, Image } from "react-native"

//importing all component
import HomeScreen from "../Screens/Home";
import ReadingListScreen from "../Screens/ReadingList";
import Profile from "../Screens/Profile";
import CreateScreen from "../Screens/Create";
import LoginModal from "../Screens/Login";

//*****  for sidebar *****
const Drawer = createDrawerNavigator()
function SideBar() {
    return (

        <Drawer.Navigator
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}
const HomeStack = createBottomTabNavigator()
function TabNavigator() {
    return (
        <HomeStack.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "SideBar") {
                        iconName = "home"
                        color = focused ? "#fff" : "#a9a9a9"
                    }
                    else if (route.name === "Create") {
                        iconName = "file-plus"
                        color = focused ? "#fff" : "#a9a9a9"
                    }
                    else if (route.name === "Profile") {
                        iconName = "user"
                        color = focused ? "#fff" : "#a9a9a9"
                    }
                    else if (route.name === "ReadingList") {
                        iconName = "archive"
                        color = focused ? "#fff" : "#a9a9a9"
                    }
                    return <Icon name={iconName} size={20} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: "black"
                }

            })}
        >
            <HomeStack.Screen name="SideBar" component={SideBar} options={{
                tabBarShowLabel: false, headerShown: false
            }} />
            <HomeStack.Screen name="ReadingList" component={ReadingListScreen} options={{
                tabBarShowLabel: false, headerShown: true
            }} />
            <HomeStack.Screen name="Create" component={CreateScreen} options={{
                tabBarShowLabel: false, headerShown: true
            }} />
            <HomeStack.Screen name="Profile" component={Profile} options={{
                tabBarShowLabel: false, headerShown: true
            }} />

        </HomeStack.Navigator>
    )
}

const StackNavigation = createStackNavigator()
const StackScreens = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
                <StackNavigation.Screen name="Login" component={LoginModal} options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}







const Navigator = () => {
    return (

        <StackScreens />

    )
}

export default Navigator
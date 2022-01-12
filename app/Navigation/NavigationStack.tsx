import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/Feather'
import React from "react"

//importing all component
import HomeScreen from "../Screens/Home";
import ReadingListScreen from "../Screens/ReadingList";
import Profile from "../Screens/Profile";
import CreateScreen from "../Screens/Create";


const HomeStack = createBottomTabNavigator()
const Screens = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={({ route }) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
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
                <HomeStack.Screen name="Home" component={HomeScreen} options={{
                    tabBarShowLabel: false, headerShown: false
                }} />
                <HomeStack.Screen name="ReadingList" component={ReadingListScreen} options={{
                    tabBarShowLabel: false, headerShown: false
                }} />
                <HomeStack.Screen name="Create" component={CreateScreen} options={{
                    tabBarShowLabel: false, headerShown: false
                }} />
                <HomeStack.Screen name="Profile" component={Profile} options={{
                    tabBarShowLabel: false, headerShown: false
                }} />

            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

const Navigator = () => {
    return (
        <Screens />
    )
}

export default Navigator
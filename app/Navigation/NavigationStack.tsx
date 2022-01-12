import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Feather'
import React from "react"
import { View, TouchableOpacity, Image } from "react-native"

//importing all component
import HomeScreen from "../Screens/Home";
import ReadingListScreen from "../Screens/ReadingList";
import Profile from "../Screens/Profile";
import CreateScreen from "../Screens/Create";

const SideBar = () => {
    return (

        <Drawer.Navigator
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}
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
                <HomeStack.Screen name="Home" component={SideBar} options={{
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

const Drawer = createDrawerNavigator()
const DrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer()
    }
    return (


        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                    }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    )
}


const Navigator = () => {
    return (

        <Screens />

    )
}

export default Navigator
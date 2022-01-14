import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import Modal from "react-native-modal"
import TextField from "../../Components/TextField"
const { height, width } = Dimensions.get("window")
// import Icon from 'react-native-vector-icons/AntDesign'
// import SquareIcon from "react-native-vector-icons/FontAwesome"
import { SocialIcon } from 'react-native-elements';


interface IProps { }
const Layout = (props: IProps) => {
    const { isVisible, setVisible } = props
    const [selected, setSelected] = useState("login")
    return (
        <View >
            <Modal isVisible={isVisible} propagateSwipe={true}>
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <Pressable onPress={() => { setVisible(false) }} style={{ marginTop: 20, marginLeft: 20 }}>
                            <Text style={{ color: "black", fontSize: 20 }}>X</Text>
                        </Pressable>
                        <View style={styles.header}>
                            <Pressable onPress={() => { setSelected("login") }} style={[styles.option, { backgroundColor: selected == "login" ? "black" : "#fff" }]}><Text style={[styles.optionText, { color: selected == "login" ? "white" : "black" }]}>Login</Text></Pressable>
                            <Pressable onPress={() => { setSelected("signup") }} style={[styles.option, { backgroundColor: selected == "signup" ? "black" : "#fff" }]}><Text style={[styles.optionText, { color: selected == "signup" ? "white" : "black" }]}>SignUp</Text></Pressable>
                        </View>
                        {selected == "login" &&
                            <View style={styles.form}>
                                <TextField placeholder={"Your email id"} text={"Email"} />
                                <TextField placeholder={"Password"} text={"Password"} />
                            </View>
                        }
                        {
                            selected == "signup" &&
                            <View style={styles.form}>
                                <TextField placeholder={"Enter yout name"} text={"Name"} />
                                <TextField placeholder={"Your email id"} text={"Email"} />
                                <TextField placeholder={"Password"} text={"Password"} />
                            </View>
                        }
                        <View style={styles.footer}>
                            <Pressable style={styles.btn}>
                                <Text style={styles.btnText}>{selected == "login" ? "LogIn" : "SignUp"}</Text>
                            </Pressable>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.loginWith}></View>
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Text>Or login with</Text></View>
                                <View style={styles.loginWith}></View>
                            </View>
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}><SocialIcon type="facebook" iconSize={20} onPress={() => { console.log('foursquare'); }} /></View>
                                <View style={styles.icon}><SocialIcon type="google" onPress={() => { console.log('foursquare'); }} /></View>
                                <View style={styles.icon}><SocialIcon type="linkedin" onPress={() => { console.log('foursquare'); }} /></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#fff",
        flex: 1,
        height: height * 0.95
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01,
    },
    form: {
        flex: 0.67,
    },
    option: {

        borderRadius: 20,
        width: width * 0.35,
        height: height * 0.06,
        justifyContent: "center",
        alignItems: "center"
    },
    optionText: {
        color: "black",
        fontWeight: "bold"
    },
    footer: {
        flex: 0.29,
        alignItems: "center",
        height: height * 0.4,

    },
    btn: {
        width: width * 0.5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 20,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    loginWith: {
        borderTopWidth: 2,
        margin: 20,
        width: 70
    },
    iconContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20
    },
    icon: {
        marginHorizontal: 20,
        justifyContent: "center"
    }
})

export default Layout
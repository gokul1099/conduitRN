import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import Modal from "react-native-modal"
import TextField from "../../Components/TextField"
const { height, width } = Dimensions.get("window")

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
                            <Pressable onPress={() => { setSelected("login") }} style={[styles.option, { backgroundColor: selected == "login" ? "purple" : "#fff" }]}><Text style={styles.optionText}>Login</Text></Pressable>
                            <Pressable onPress={() => { setSelected("signup") }} style={[styles.option, { backgroundColor: selected == "signup" ? "purple" : "#fff" }]}><Text style={styles.optionText}>SignUp</Text></Pressable>
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
        height: height * 0.9
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.05,
    },
    form: {
        flex: 0.7,
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
        flex: 0.2,
        alignItems: "center"
    },
    btn: {
        width: width * 0.5,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 20,
    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    loginWith: {
        borderTopWidth: 2,
        margin: 20,
        width: 70
    }
})

export default Layout
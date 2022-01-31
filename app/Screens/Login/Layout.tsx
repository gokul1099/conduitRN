import React, { useState, createRef, useEffect } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import Modal from "react-native-modal"
import TextField from "../../Components/TextField"
const { height, width } = Dimensions.get("window")
import { SocialIcon } from 'react-native-elements';
import LinkedIn from "../../Components/SocialLogins/LinkedIn"
import LinkedInModal from 'react-native-linkedin'
import { signin, signup, isLoggedin, errors, loader } from "../../Store/actions/onboarding"
import { connect } from "react-redux"
import actionTypes from "../../Store/actions/type"
import { useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface IProps {
    signin: any,
    signup: any,
    errors: any,
    setVisible: Function,
    isVisible: boolean

}
const Layout = (props: IProps) => {
    const [showLinkedin, setShowLinkedin] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [selected, setSelected] = useState("login")
    const data = useSelector(state => state.onboardingReducer.userData)
    const error = useSelector(state => state.onboardingReducer.error)
    const loginStatus = useSelector(state => state.onboardingReducer.loginStatus)
    const linkedin = createRef()

    const onSubmit = () => {
        if (selected == "signup") {
            props.signup(actionTypes.SIGNUP,
                {
                    module: "users",
                    action: "",
                    formData: {
                        user: {
                            username: userName,
                            email: email,
                            password: password
                        }
                    }
                })
        }
        else {
            props.signup(actionTypes.LOGIN,
                {
                    module: "users",
                    action: "login",
                    formData: {
                        user: {
                            email: email,
                            password: password
                        }
                    }
                })
        }

    }
    useEffect(() => {
        props.errors(actionTypes.ERROR, {})
    }, [userName, email, password, selected])
    if (loginStatus === true) {
        props.navigation.navigate("Profile")
    }

    return (
        <View >
            {/* <Modal isVisible={isVisible} propagateSwipe={true}> */}
            <ScrollView>
                <View style={styles.modalContainer}>

                    <View style={styles.header}>
                        <Pressable onPress={() => { setSelected("login") }} style={[styles.option, { backgroundColor: selected == "login" ? "black" : "#fff" }]}><Text style={[styles.optionText, { color: selected == "login" ? "white" : "black" }]}>Login</Text></Pressable>
                        <Pressable onPress={() => { setSelected("signup") }} style={[styles.option, { backgroundColor: selected == "signup" ? "black" : "#fff" }]}><Text style={[styles.optionText, { color: selected == "signup" ? "white" : "black" }]}>SignUp</Text></Pressable>
                    </View>
                    {selected == "login" &&
                        <View style={styles.form}>
                            <TextField placeholder={"Your email id"} text={"Email"} setText={setEmail} secureTextEntry={false} />

                            <TextField placeholder={"Password"} text={"Password"} setText={setPassword} secureTextEntry={true} />
                        </View>
                    }
                    {
                        selected == "signup" &&
                        <View style={styles.form}>
                            <TextField placeholder={"Enter yout name"} text={"Name"} setText={setUserName} secureTextEntry={false} />
                            {/* {error.username && <Text style={{ color: "red" }}>username {error.username}</Text>} */}
                            <TextField placeholder={"Your email id"} text={"Email"} setText={setEmail} secureTextEntry={false} />
                            {/* {error.email && <Text style={{ color: "red" }}>email {error.email}</Text>} */}
                            <TextField placeholder={"Password"} text={"Password"} setText={setPassword} secureTextEntry={true} />
                        </View>
                    }
                    {
                        error &&
                        <View style={{ marginLeft: "25%" }}>
                            {Object.keys(error).map(function (key) {
                                var text = key + " " + error[key]
                                return (
                                    <Text style={{ color: "red" }}>
                                        {text}
                                    </Text>
                                )
                            })
                            }
                        </View>
                    }
                    <View style={styles.footer}>
                        <Pressable style={styles.btn} onPress={() => { onSubmit() }}>
                            <Text style={styles.btnText}>{selected == "login" ? "LogIn" : "SignUp"}</Text>
                        </Pressable>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.loginWith}></View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Text>Or login with</Text></View>
                            <View style={styles.loginWith}></View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}><SocialIcon type="facebook" onPress={() => { console.log("facebook") }} /></View>
                            <View style={styles.icon}><SocialIcon type="google" onPress={() => { console.log('foursquare'); }} /></View>
                            <View style={styles.icon}>
                                <LinkedInModal
                                    ref={linkedin}
                                    renderButton={() => <SocialIcon type="linkedin" />}
                                    linkText={""}
                                    clientID={"86ceoya3yiyxzh"}
                                    clientSecret={"IxCXmXIVwpppElOC"}
                                    redirectUri={"http://localhost:19006/"}
                                    onSuccess={(token) => {
                                        console.log(token)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* </Modal> */}
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
        marginTop: height * 0.001,
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
const mapStatesToProps = () => {

}
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (type: any, req: Object) => dispatch(signin(type, req)),
        signup: (type: any, req: Object) => dispatch(signup(type, req)),
        errors: (type: any, text: Object) => dispatch(errors(type, "error", text))
    }
}
export default connect(null, mapDispatchToProps)(Layout)
import React, { useEffect } from "react"
import { Button, StyleSheet, Text, View } from 'react-native'
import LoginModal from "../Login"
import { useIsFocused } from "@react-navigation/core"
const Layout = (props) => {
    const isFocussed = useIsFocused()
    useEffect(() => {
        if (isFocussed) {
            setShowLogin(true)
        }
    }, [isFocussed])
    const [showLogin, setShowLogin] = React.useState(false)
    return (
        <View>
            <Text>Profile</Text>
            {/* <LoginModal isVisible={showLogin} setVisible={setShowLogin} /> */}
            <Button title="login" onPress={() => { props.navigation.navigate("Login") }} />
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({})

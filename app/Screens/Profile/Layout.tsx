import React, { useEffect } from "react"
import { StyleSheet, Text, View } from 'react-native'
import LoginModal from "../Login"
import { useIsFocused } from "@react-navigation/core"
const Layout = () => {
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
            <LoginModal isVisible={showLogin} setVisible={setShowLogin} />
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({})

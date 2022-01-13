import React from "react"
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import LoginModal from "../Login"
const Layout = () => {
    const [showLogin, setShowLogin] = React.useState(true)
    return (
        <View>
            <Text>Home </Text>
            <Icon name={"home"} size={20} color={"black"} />
            <LoginModal isVisible={showLogin} setVisible={setShowLogin} />

        </View>
    )
}

export default Layout

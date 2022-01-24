import React, { useEffect } from "react"
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { useIsFocused } from "@react-navigation/core"
import { useSelector } from "react-redux"



interface IProps {
    navigation: any;
}

const Layout = (props: IProps) => {
    const data = useSelector(state => state.onboardingReducer.userData)
    const error = useSelector(state => state.onboardingReducer.error)
    const loginStatus = useSelector(state => state.onboardingReducer.loginStatus)
    const isFocussed = useIsFocused()
    return (
        <View>
            {
                loginStatus &&
                <View>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: data?.user?.image }} style={styles.profileImage} />
                        <View style={styles.detailContainer}>
                            <Text style={{ color: "black", fontWeight: "bold" }}>{data.user.username}</Text>
                            <Text style={{ color: "black" }}>{data.user.email}</Text>
                        </View>
                    </View>
                    <View>
                        {data.user.bio && <Text>{data.user.bio}</Text>}
                    </View>
                </View>
            }
            {
                !loginStatus &&
                <Button title="login" onPress={() => props.navigation.navigate("Login")} />
            }

        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 20

    },
    detailContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
})

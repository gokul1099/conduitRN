import React from "react"
import { StyleSheet, Dimensions } from "react-native"
const { height, width } = Dimensions.get("screen")
const Styles = StyleSheet.create({
    storyContainer: {
        flex: 1
    },
    storyHeader: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 10
    },
    headerImage: {
        height: height * 0.25,
        width: "90%",
        backgroundColor: "#C4C4C4"
    }
})

export default Styles
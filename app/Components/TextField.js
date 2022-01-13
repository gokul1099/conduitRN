import React from "react"
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextField = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <TextInput placeholder={props.placeholder}
                placeholderTextColor="black"
                style={styles.textField} />
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: "black",
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 20
    },
    textField: {
        borderBottomWidth: 1,
        marginHorizontal: 20
    }
})

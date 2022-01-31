import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import moment from "moment"
const ArticleCard = (props) => {
    const { data } = props
    return (
        <Pressable style={styles.articleContainer} onPress={() => props.navigation.navigate("ReadStory", { data: { slug: data.slug } })}>
            <View style={styles.content}>
                <View style={styles.articleHeader}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text>{moment(data.updatedAt).format("MMMM Do YYYY")}</Text>
                </View>
            </View>
            <View style={styles.image}></View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 10
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    },
    articleContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        backgroundColor: "#fff",
        marginVertical: 10,
        borderRadius: 5,
        padding: 15,

    },
    content: {
        width: "75%",
        flexWrap: "wrap",

    },
    articleHeader: {

    },
    image: {
        backgroundColor: "#C4C4C4",
        height: 90,
        width: 90,
    }
})
export default ArticleCard
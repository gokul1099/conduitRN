import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
const { height, width } = Dimensions.get("window")
import moment from 'moment';


const ArticleHeader = (props) => {
    const { data } = props

    return (
        <View style={Styles.storyContainer}>
            <View style={Styles.storyHeader}>
                <Text style={Styles.title}>
                    {data.title}
                </Text>
                <View style={Styles.headerImage}></View>
                <View style={Styles.stats}>
                    <View style={Styles.authorImg}>
                        <Image source={{ uri: data.author.image }} style={Styles.img} />
                    </View>
                    <Text style={Styles.statsText}>{data.author.username}</Text>
                    <Text style={Styles.statsText}>{moment(data.createdAt).fromNow()}</Text>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    // storyContainer: {
    //     flex: 1
    // },
    storyHeader: {
        justifyContent: "center",
        alignItems: "center",

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
        backgroundColor: "#C4C4C4",
        borderRadius: 10
    },
    stats: {
        flexDirection: "row",
        width: "90%",
        marginVertical: 10
    },
    statsText: {
        textAlignVertical: "center",
        marginHorizontal: 10
    },
    authorImg: {},
    img: {
        height: height * 0.05,
        width: height * 0.05,
        borderRadius: height * 0.05 / 2
    }
})


export default ArticleHeader;

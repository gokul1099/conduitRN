import React, { useEffect } from "react"
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import { connect } from "react-redux"
import { newFeeds, globalFeed, getArticle, favArticle, unFavArticle, getTags } from "../../Store/actions/articles"
import actionTypes from "../../Store/actions/type"
import { useIsFocused } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler"
import Styles from "./Style"
import ArticleCard from "../../Components/articleCard"

interface IProps {
    tags: Object,
    globalfeeds: Object,
    newFeed: any;
    globalFeed: any;
    getArticle: any;
    favArticle: any;
    unFavArticle: any;
    getTags: any;
    navigation: any;
}
const Layout = (props: IProps) => {
    const isFocused = useIsFocused();
    const tagData = props.tags?.tags

    var globalfeeds = props.globalfeeds?.articles
    var feedsFromFllowee = props.feedsFromFllowee?.articles
    globalfeeds = globalfeeds.concat(feedsFromFllowee)




    useEffect(() => {
        if (isFocused) {
            //for tags
            props.getTags(actionTypes.GET_TAGS, {
                module: "tags",
                action: "",
                formData: {}
            })
            //for new feeds 
            props.globalFeed(actionTypes.GLOBAL_ARTICLES, {
                module: "articles?limit=20&offset=0",
                action: "",
                formData: {}
            })
            props.globalFeed(actionTypes.ARTICLES_FROM_FOLLOWEES, {
                module: "articles",
                action: "feed?limit=20&offset=0",
                formData: {}
            })
        }

    }, [])



    return (
        <View style={Styles.container}>
            <View style={Styles.tagContainer}>
                <FlatList data={tagData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={Styles.tag}>
                                <Text>{item}</Text>
                            </View>
                        )
                    }} />
            </View>
            <View style={Styles.globalArticle}>
                <FlatList data={globalfeeds}
                    renderItem={({ item, index }) => { return <ArticleCard data={item} index={index} navigation={props.navigation} /> }}
                    keyExtractor={(item, index) => {
                        return index.toString()
                    }}
                />
            </View>


        </View>
    )
}



const mapStatesToProps = (state) => {
    return {
        tags: state.articlesReducer.tags,
        feedsFromFllowee: state.articlesReducer.newfeeds,
        globalfeeds: state.articlesReducer.globalfeeds,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newFeeds: (type: any, req: Object) => dispatch(newFeeds(type, req)),
        globalFeed: (type: any, req: Object) => dispatch(globalFeed(type, req)),
        getArticle: (type: any, req: Object) => dispatch(getArticle(type, req)),
        favArticle: (type: any, req: Object) => dispatch(favArticle(type, req)),
        unFavArticle: (type: any, req: Object) => dispatch(unFavArticle(type, req)),
        getTags: (type: any, req: Object) => dispatch(getTags(type, req)),


    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Layout)

import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { getArticle, favArticle, unFavArticle } from "../../Store/actions/articles"
import actionTypes from "../../Store/actions/type"
import { useIsFocused } from "@react-navigation/native";
import Styles from "./Style"
import ArticleHeader from "../../Components/articleHeader"
import ArticleFooter from "../../Components/articleFooter"



interface IProps {
    route: Object;
    getArticle: any;
}
const Layout = (props: IProps) => {
    const { slug } = props?.route?.params?.data
    const { article } = props

    useEffect(() => {
        props.getArticle(actionTypes.GET_ARTICLES, {
            module: "articles",
            action: slug,
            formData: {}
        })
    }, [])
    return (
        <View style={Styles.storyContainer}>
            <View style={{ flex: 0.90, borderWidth: 1, borderColor: "red" }}>
                <ArticleHeader data={article} />
                <View >
                    <Text>Content</Text>
                </View>
            </View>
            <View style={{ flex: 0.1, borderWidth: 1, borderColor: "red" }}>
                <ArticleFooter />
            </View>
        </View>
    )
}

const mapStatesToProps = (state) => {
    return {
        article: state.articlesReducer.singleArticle?.article
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        getArticle: (type: any, req: Object) => dispatch(getArticle(type, req)),
        favArticle: (type: any, req: Object) => dispatch(favArticle(type, req)),
        unFavArticle: (type: any, req: Object) => dispatch(unFavArticle(type, req)),

    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Layout)

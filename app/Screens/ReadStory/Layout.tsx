import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { getArticle, favArticle, unFavArticle } from "../../Store/actions/articles"
import actionTypes from "../../Store/actions/type"


interface IProps {
    route: Object;
    getArticle: any;
}
const Layout = (props: IProps) => {
    const { slug } = props?.route?.params?.data
    const { article } = props
    console.log(article, "article")
    useEffect(() => {
        props.getArticle(actionTypes.GET_ARTICLES, {
            module: "articles",
            action: slug,
            formData: {}
        })
    })
    return (
        <Text>{props.route?.params?.data?.slug}</Text>
    )
}

const mapStatesToProps = (state) => {
    return {
        article: state.articlesReducer.singleArticle
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

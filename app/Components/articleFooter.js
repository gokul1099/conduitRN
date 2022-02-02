import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Lottie from "../Components/lottieFile";

const ArticleFooter = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <Lottie name="bookmark" icon="bookmark" />
            <Lottie name="favourite" icon="heart" />
        </View>
    );
};

export default ArticleFooter;

const styles = StyleSheet.create({});

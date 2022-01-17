import React, { createRef } from "react"
import LinkedInModal from 'react-native-linkedin'
import { StyleSheet, Text, View } from 'react-native'
import { SocialIcon } from 'react-native-elements';
const LinkedIn = (props) => {
    const { showLinked } = props

    const linkedin = createRef()
    return (
        <View style={{ flex: 1 }}>
            <LinkedInModal
                ref={linkedin}
                renderButton={() => <SocialIcon type="linkedin" />}
                linkText={""}
                clientID={"86ceoya3yiyxzh"}
                clientSecret={"IxCXmXIVwpppElOC"}
                redirectUri={"http://localhost:19006/"}
                onSuccess={(token) => {
                    console.log(token)
                }}
            />
        </View>
    )
}

export default LinkedIn

const styles = StyleSheet.create({})

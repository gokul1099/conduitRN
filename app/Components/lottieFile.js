import React, { useRef, useState, useEffect } from "react"
import { Pressable } from "react-native"
import LottieView from 'lottie-react-native';
import Icon from "react-native-vector-icons/Feather"

const files = {
    bookmark: require("../assets/LottiesFiles/bookmark.json"),
    favourite: require("../assets/LottiesFiles/favourite.json"),
}



const Lottie = (props) => {
    const [active, setActive] = useState(false)
    const [progress, setProgress] = useState(0)
    const animation = useRef();
    useEffect(() => {
        if (!active) {
            animation.current.play(2, 30)
        }
    }, [active])
    return (
        <Pressable onPress={() => {
            if (active) {
                setActive(false)
                setProgress(0)
                animation.current.reset()
            }
            else {
                setActive(true)

            }

        }}>
            {
                !active ? (<Icon name={props.icon} size={30} color="black" />) : (
                    <LottieView
                        ref={animation}
                        progress={progress}
                        source={files[props.name]}
                        style={{ height: 50, width: 50 }}
                        loop={false}
                        onAnimationFinish={() => {
                            animation.current.pause()
                        }}
                    />
                )}
        </Pressable>

    )
}

export default Lottie;

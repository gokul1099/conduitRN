import React from "react"
import Layout from "./Layout"

interface IProps { }
export default function HomeScreen(props: IProps) {
    return (<Layout {...props} />)
}
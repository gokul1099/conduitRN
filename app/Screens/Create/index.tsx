import React from "react"
import Layout from "./Layout"

interface IProps { }
export default function CreateScreen(props: IProps) {
    return (<Layout {...props} />)
}
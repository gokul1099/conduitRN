import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"


const handleError = (error: Object) => {
    console.log(error.data)
    return error
}

const request = async (options: any) => {

    var req = new Promise((resolve, reject) => {
        callService(options).then((response) => {
            resolve(response)
        })
    })
    return req
}

const callService = async (options: Object) => {

    var tempOptions = JSON.stringify(options.data?.formData)
    var token = await AsyncStorage.getItem("token")
    let url = "https://api.realworld.io/api/" + options.data.module + "/" + options.data.action
    var client: any = {
        method: options.method,
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    }
    if (options.method == "get") {
        client.params = options.data?.formData
    }
    else {
        client.data = tempOptions
    }
    console.log(client, "client")
    return axios(client).then(function (response) {
        console.log(response.data, "response from client")

        return response
    }).catch(function (error) {

        return handleError(error.response)
    })
}
export default request
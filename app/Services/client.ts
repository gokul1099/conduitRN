import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"




const request = async (options: any) => {

    var req = new Promise((resolve, reject) => {
        callService(options).then((response) => {
            resolve(response)
        })
    })
    return req
}

const callService = (options: Object) => {

    var tempOptions = JSON.stringify(options.data.formData)
    var headers: any
    var token = AsyncStorage.getItem("token")
    let url = "https://api.realworld.io/api/" + options.data.module + "/" + options.data.action
    console.log(url, "url")
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
        client.params = options.data.formData
    }
    else {
        client.data = tempOptions
    }
    console.log(client, "client")
    return axios(client).then(function (response) {
        console.log(response.data, "response from client")
        return response
    }).catch(function (error) {
        console.log(error, "error from client")
        return error
    })
}
export default request
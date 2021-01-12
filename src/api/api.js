const axios = require("axios")

exports.getQuestionList = endpoint => {
    const url = endpoint.url
    const port = endpoint.port

    return axios.request({
        method: "GET",
        baseURL: `${url}:${port}`,
        url: "api/so/question",
        headers: {Accept: "application/json"},
    })
}

exports.getQuestionItem = endpoint => {
    const url = endpoint.url
    const port = endpoint.port
    const id = endpoint.id

    return axios.request({
        method: "GET",
        baseURL: `${url}:${port}`,
        url: `api/so/question/${id}`,
        headers: {Accept: "application/json"},
    })
}

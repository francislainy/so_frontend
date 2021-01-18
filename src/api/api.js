const axios = require("axios")

exports.getQuestionList = endpoint => {
    const url = endpoint.url
    const port = endpoint.port

    return axios.request({
        method: "GET",
        baseURL: `${url}:${port}`,
        url: "api/so/questions",
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
        url: `api/so/questions/${id}`,
        headers: {Accept: "application/json"},
    })
}

exports.createQuestion = endpoint => {
    const url = endpoint.url
    const port = endpoint.port
    const payload = endpoint.payload

    return axios.request({
        method: "POST",
        baseURL: `${url}:${port}`,
        data: payload,
        url: `api/so/questions`,
        headers: {Accept: "application/json"},
    })
}

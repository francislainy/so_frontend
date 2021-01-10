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

const checkMyHeaders = require('check-my-headers')


var self = module.exports = {
    checkHeaders: (url) => {
        return checkMyHeaders(url)
            .then(({ messages, headers, status }) => {
                // console.log(`Status code: ${status}`)
                // console.log(`Messages:`)
                // console.log(messages)
                // console.log("Current headers:")
                // console.log(headers)
                return {
                    status, headers, messages
                }
            })
        // .catch(err => {
        //     console.log(err)
        //     rethrow
        // })
    },

    scan: (url, format = "") => {
        self.checkHeaders(url).then(res => {
            if (format == "md") {
                const formattedOutput = res.messages.reduce((total, item) => total + `- error: ${item.msg} (${item.type})\n`, "");
                console.log(formattedOutput)
            }
            else {
                console.log(res.messages)
            }

        });
    }
}
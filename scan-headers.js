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

    scan: (url) => {
        self.checkHeaders(url).then(res => {
            console.log(JSON.stringify({ "results": res.messages }));
            if (res.messages.some(msg => msg.type === "error"))
                process.exit(1)
        });
    }
}
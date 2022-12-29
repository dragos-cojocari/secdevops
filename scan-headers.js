const checkMyHeaders = require('check-my-headers')

// this is a dummy password to test secrets detection
const password="dummy_password"

var self = module.exports = {
    checkHeaders: (url) => {
        return checkMyHeaders(url)
            .then(({ messages, headers, status }) => {
                return {
                    status, headers, messages
                }
            })
    },

    scan: (url, format = "") => {
        self.checkHeaders(url)
            .then(res => {
                if (res.status != 200) {
                    process.exit(1)
                } else if (format == "md") {
                    const formattedOutput = res.messages.reduce((total, item) => total + `- error: ${item.msg} (${item.type})\n`, "");
                    console.log(formattedOutput);
                }
                else {
                    console.log(res.messages);
                }
            })
            .catch(err => {
                console.log(err.message);
                process.exit(1);
            });
    }
}
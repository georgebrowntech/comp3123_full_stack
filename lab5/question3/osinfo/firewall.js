const os = require('os')

const getStatuses = () => {
    return ["OK", "ALLOW", "DENY", "BLOCK"]
}


module.exports = {
    getStatuses
}
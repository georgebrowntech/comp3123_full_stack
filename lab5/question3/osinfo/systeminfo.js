const os = require('os')

const getSysteminfo = () => {
    return {
        cpu: os.arch(),
        hostName: os.hostname(),
        osName: os.platform(),
        formatted: `Operating System Info: CPU architecture: ${os.arch()}, Host name: ${os.hostname()}, OS name: ${os.platform()}`
    }
}

const getUserInfo = () => {
    return {
        userInfo: os.userInfo(),
        username: os.userInfo().username,
        homeDirectory: os.homedir(),
        formatted: `User info: User name: ${os.userInfo().username}, Home dir: ${os.homedir()}`

    }
}

module.exports = {
    getSysteminfo,
    getUserInfo
}
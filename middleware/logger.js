const { options } = require("../posts/postRouter")

module.exports = (options) => {
    return (req, res, next) => {
        switch(options.format) {
            case "short":
                console.log(`${req.method} ${req.url}`)
                break
            case "long":
                console.log(`${new Date().toISOString()} ${req.ip} ${req.method} ${req.url}`)
                break
        } 
        next();
    }
}
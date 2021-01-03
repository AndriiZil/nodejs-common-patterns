module.exports = function (app) {
    return function (options, callback) {
        app.listen(app.get('port'), options, callback)
    }
}
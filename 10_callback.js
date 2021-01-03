callOne({...}, (err, data1) => {
    if (err) return callback(err, null)

    callTwo(data1, (err, data2) => {
        if (err) return callback(err, null)

        callTree(data2, (err, data3) => {
            if (err) return callback(err, null)

            callback(null, data3)
        })
    })
})

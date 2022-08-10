const path = require("path")

module.exports = {
    webpack: {
        alias: {
            tools : path.resolve(__dirname , 'src/tools'),
            actions :path.resolve(__dirname , 'src/redux/actions'),
            reducers :path.resolve(__dirname , 'src/redux/reducers'),
            store :path.resolve(__dirname , 'src/redux/store'),
            components : path.resolve(__dirname , 'src/components')
        },
}}
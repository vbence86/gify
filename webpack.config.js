module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|common)/,
            loaders: ['babel-loader']
        }]
    },
    entry: {
        main: './src/js/main.entry'
    },
    output: {
        filename: '[name].js'
    }
};
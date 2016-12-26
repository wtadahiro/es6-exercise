module.exports = {
    entry: './src/index.js',
    output: {
        path: './output',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /(\.js$)|(\.jsx$)/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['es2015', 'react']}
            }
        ]
    }
}

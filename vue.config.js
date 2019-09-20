const webpack = require('webpack')
module.exports = {
    publicPath: '/miaomiao/',
    devServer: {
        proxy: {
            '/api': {
                target: "http://39.97.33.178",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })

        ]

    }
}
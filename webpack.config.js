var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server', //改变文件立刻刷新，而且保存了现有的state
        './src/app.jsx' //入口配置文件
    ],
    devServer: {
        hot: true,
        inline: true,
        proxy: {
            '/api/*': {
                target: 'http://192.168.15.171:8080',
                secure: false
            }
        }
    },
    output: {
        path: './build',
        filename: "bundle.js" //输出文件，即index.html需要引入的文件
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }, {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ["react", "es2015"],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

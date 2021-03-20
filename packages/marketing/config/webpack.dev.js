const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const package = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new FederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingContainer' : './src/Bootstrap.js'
            },
            shared: package.dependencies
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
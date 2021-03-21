const {merge} = require('webpack-merge');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const package = require('../package.json');
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'marketing/latest'
    },
    plugins: [
        new FederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingContainer': './src/Bootstrap'
            },
            shared: package.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
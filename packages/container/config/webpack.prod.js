const { merge } = require('webpack-merge')
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const domain = process.env.NODE_PRODUCTION;
const package = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new FederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: package.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);
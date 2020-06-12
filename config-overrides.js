const {override, addWebpackModuleRule} = require('customize-cra');

module.exports = {
    webpack: override(
        addWebpackModuleRule({
            test: /\.theme\.(sa|sc)ss$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {attributes: {id: 'theme-sheet'}, injectType: 'lazySingletonStyleTag'}
                },
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
            ]
        })
    )
}
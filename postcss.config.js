module.exports = {
    plugins: [
        require('precss'),
        require('postcss-nested'),
        require('autoprefixer'),
        require("postcss-color-rgba-fallback")
    ]
}
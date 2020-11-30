const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        API_UR: process.env.API_URL
    },

    images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/bizoudwest",
        domains: [
            "localhost",
            "res.cloudinary.com"
        ]
    },

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        config.resolve.alias['styles'] = path.join(__dirname, 'styles')

        return config
    }
}
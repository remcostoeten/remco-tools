const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.builder.io'],

    }
}

module.exports = withContentlayer(nextConfig)
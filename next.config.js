const withBuilderDevTools = require("@builder.io/dev-tools/next")();
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.builder.io"],
        domains: ['lh3.googleusercontent.com'],
    },
};

module.exports = withBuilderDevTools(withContentlayer(nextConfig));

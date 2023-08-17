/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.urbanflow256.com',
          },
        ],
    }
}

module.exports = nextConfig

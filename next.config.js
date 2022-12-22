/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: '/'
  },
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    domains: ['cdn.akamai.steamstatic.com', "localhost"]
  }
}

module.exports = nextConfig

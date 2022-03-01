/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: '/'
  },
  reactStrictMode: true,
  future: { webpack5: true },
}

module.exports = nextConfig

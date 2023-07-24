/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
   disable: process.env.NODE_ENV === 'development',
   register: true,
   scope: '/app',
   sw: 'service-worker.js'
  
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
}
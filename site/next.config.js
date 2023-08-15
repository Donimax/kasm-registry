/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Donimax registry',
    description: 'Donimax registry for Kasm supported workspaces.',
    icon: 'https://raw.githubusercontent.com/Donimax/kasm-registry/1.0/site/public/logo.svg',
    listUrl: 'https://donimax.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Donimax/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

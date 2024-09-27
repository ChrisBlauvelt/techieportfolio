/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true
};

module.exports = {
    async headers() {
      return [
        {
          source: '/resume',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-src 'self'; object-src 'self'",
            },
          ],
        },
      ]
    },
  }


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
    nextConfig,
    async headers() {
      return [
        {
          source: '/resume.pdf',
          headers: [
            {
              key: 'Content-Disposition',
              value: 'inline',
            },
          ],
        },
      ]
    },
  }


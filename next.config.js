const isProd = process.env.NODE_ENV === 'production';

const webpack = (config, _options) => {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          removeViewBox: false
        }
      }
    ],
    exclude: /(\/fonts)/
  });
  return config;
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true
  },
  webpack,
  async rewrites() {
    if (isProd) return [];

    return [
      {
        source: '/api/v:path*',
        destination: process.env.BE_BASE_URL
      }
    ];
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/FERVO1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/FERVO1' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

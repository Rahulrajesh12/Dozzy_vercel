// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd10uth61hedy2t.cloudfront.net',
        hostname: 's3.ap-south-2.amazonaws.com',
      },
    ],
  },
};
export default nextConfig;

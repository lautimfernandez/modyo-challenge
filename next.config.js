/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.modyocdn.com",
      },
    ],
  },
};

module.exports = nextConfig;

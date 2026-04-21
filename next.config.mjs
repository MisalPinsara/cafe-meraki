/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "next-build",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

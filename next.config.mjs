/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export mode
  basePath: "/ChikangaTakudzwa", // Set this to your GitHub repository name if not in the root
  images: {
    unoptimized: true, // Disables server-side image optimization for static export
  },
};

export default nextConfig;

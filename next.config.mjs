/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- This is the magic line for GitHub Pages
  images: {
    unoptimized: true, // <--- Required so images show up in the static build
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",  // <--- This is the magic line for GitHub Pages
//   images: {
//     unoptimized: true, // <--- Required so images show up in the static build
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Required for GitHub Pages static hosting
  output: "export",

  // GH Pages serves your site from: /sophiyapaudel.github.io
  // So Next must prefix all paths during production builds.
  basePath: isProd ? "/sophiyapaudel.github.io" : "",
  assetPrefix: isProd ? "/sophiyapaudel.github.io/" : "",

  // Expose to browser so components can prepend paths
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/sophiyapaudel.github.io" : "",
  },

  // Required because next/image optimization doesn't work with "export"
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

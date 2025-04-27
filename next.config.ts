import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add any custom webpack configuration here

    // This configuration is for handling image assets
    // It allows importing images in various formats (png, jpeg, gif, svg)
    // and optimizes them for better performance in the application.
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/images",
    });

    // This configuration is for handling font assets
    // It allows importing fonts in various formats (woff, woff2, eot, ttf, otf)
    // and optimizes them for better performance in the application.
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

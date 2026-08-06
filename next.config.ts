import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations de performance
  compress: true,
  
  // Optimisation du bundle
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  
  // Configuration webpack pour tree-shaking
  webpack: (config, { isServer }) => {
    // Optimiser Three.js
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
              name: 'three',
              chunks: 'async',
              priority: 30,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;

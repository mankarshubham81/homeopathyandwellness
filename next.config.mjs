// Import @next/mdx and remark-unwrap-images
import nextMDX from "@next/mdx";
import remarkUnwrapImages from "remark-unwrap-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "homeopathyandwellness.com",
      "images.unsplash.com",
      "i.ytimg.com",
      "player.vimeo.com",
      "randomuser.me",
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@react-markdown"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "i.ytimg.com",
    },
    {
      protocol: "https",
      hostname: "player.vimeo.com",
    },
    {
      protocol: "https",
      hostname: "randomuser.me"
    },
  ],
};

// Configure MDX
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkUnwrapImages],
  },
});

// Export the merged config
export default withMDX(nextConfig);

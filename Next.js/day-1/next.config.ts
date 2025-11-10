import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "fakestoreapi.com",
            pathname: "/img/**",
         },
         {
            protocol: "https",
            hostname: "cdn.jsdelivr.net",
            pathname: "/gh/faker-js/**",
         },
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
         },
      ],
   },
};

export default nextConfig;

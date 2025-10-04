import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgx.foriio.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "dyci7co52mbcc.cloudfront.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

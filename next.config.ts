import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/ride-unbound-web" : "",
  assetPrefix: isProd ? "/ride-unbound-web/" : "",
};

export default nextConfig;
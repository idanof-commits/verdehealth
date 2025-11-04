/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.verdehealth.bg" }], destination: "https://verdehealth.bg/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "verdehealth.eu" }], destination: "https://verdehealth.bg/:path*", permanent: true }
    ];
  }
};
module.exports = nextConfig;

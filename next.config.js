/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "www.goindiastocks.com",
            port: "",
            pathname: "/Content/assets/images/logewithname.png",
         },
      ],
   },
};

module.exports = nextConfig;

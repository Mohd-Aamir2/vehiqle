/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache:false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "offpmdlfumtwcrxmbdae.supabase.co"
      }
    ]
  },
  async headers() {
    return [
      {
        source:"/embed",
        headers:[
        {key:"Cotent-Security-Policy",
        value:"frame-src 'self' https://9b22809f-4c05-4481-b2c5-606b1255f792.created.app"}
        ]
      }
    ]
  }
};

export default nextConfig;

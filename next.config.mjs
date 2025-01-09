/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disables ESLint during builds
    // ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aercpcuebwexytenapqq.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;

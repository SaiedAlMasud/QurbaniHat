/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,  // Enables React Compiler for better performance
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all HTTPS hosts (optional)
            },
        ],
    },
};

export default nextConfig;

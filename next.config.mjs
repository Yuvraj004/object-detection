/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'utfs.io'
            }
        ]
    },
    output:'standalone',
    experimental:{
        serverComponentsExternalPackages:['sharp','onnxruntime-node'],
    },
};

export default nextConfig;

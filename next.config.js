/** @type {import('next').NextConfig} */

// const ContentSecurityPolicy = `
//   object-src 'none';
//   script-src 'self' 'unsafe-eval' 'unsafe-inline' https://connect.facebook.net/* https://*.googleapis.com https://*.gstatic.com *.google.com *.googleusercontent.com data: blob:;
//   img-src 'self' https://connect.facebook.net/* https://*.googleapis.com https://*.gstatic.com *.google.com  *.googleusercontent.com data:;
//   frame-src *.google.com;
//   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
//   worker-src blob:;
// `;

// looqzzy1l3okfjeacigwhg

// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
//   },
// ];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*)',
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
  async rewrites () {
    return [
      {
        source: '/:filename',
        destination: '/static/:filename', // Proxy to Backend
      },
    ]
  },
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      pathname: '/*',
      },
      {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
      },
      {
      protocol: 'https',
      hostname: 'img.youtube.com',
      pathname: '/**',
      },
    ]
  },
};

module.exports = nextConfig;

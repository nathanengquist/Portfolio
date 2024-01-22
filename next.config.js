/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options
  images: {
    unoptimized: true, // Disable Next.js's built-in image optimization
  },
  // Removed the `output: 'export'` line
}

module.exports = nextConfig;

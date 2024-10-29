// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://find-now-nextjs.vercel.app/', // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  additionalPaths: async (config) => [
    {
      loc: `${config.siteUrl}`, // Main page
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${config.siteUrl}#features`, // Features section
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${config.siteUrl}#products`, // Products section
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${config.siteUrl}#pricing`, // Pricing section
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${config.siteUrl}#demo`, // Demo section
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${config.siteUrl}#support`, // Support section
      changefreq: 'monthly',
      priority: 0.8,
    },
  ],
};

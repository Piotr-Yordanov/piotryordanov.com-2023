const sitemap = require('nextjs-sitemap-generator');
sitemap({
    baseUrl: '<your_website_base_url>',
    pagesDirectory: __dirname + "/pages",
    targetDirectory: 'static/'
});
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/developper': { page: '/developper' },
            '/scalper': { page: '/scalper' },
            '/meditator': { page: '/meditator' },
        }
    }
};
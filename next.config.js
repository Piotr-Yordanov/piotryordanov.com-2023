const sitemap = require("nextjs-sitemap-generator")
sitemap({
  baseUrl: "piotryordanov.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "public/",
})
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/developper": { page: "/developper" },
      "/scalper": { page: "/scalper" },
      "/meditator": { page: "/meditator" },
    }
  },
}

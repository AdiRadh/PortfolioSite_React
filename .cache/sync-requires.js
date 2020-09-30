const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Projects\\PortfolioSite\\Git_version\\PortfolioSite_React\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Projects\\PortfolioSite\\Git_version\\PortfolioSite_React\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Projects\\PortfolioSite\\Git_version\\PortfolioSite_React\\src\\pages\\index.js"))),
  "component---src-pages-personal-index-js": hot(preferDefault(require("D:\\Projects\\PortfolioSite\\Git_version\\PortfolioSite_React\\src\\pages\\personal\\index.js")))
}


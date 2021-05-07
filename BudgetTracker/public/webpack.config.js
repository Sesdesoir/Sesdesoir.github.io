const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
//for minification
//make sure html src points to the output destination
//  npm install webpack webpack-cli -D
const config = {
    //where the application starts so server.js / app.js
  entry: "./index.js",
  //where if gets compiled to
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      // the name of the generated manifest file
      filename: "manifest.json",

      // we aren't using webpack to generate our html so we
      // set inject to false
      inject: false,

      // set fingerprints to `false` to make the names of the generated
      // files predictable making it easier to refer to them in our code
      fingerprints: false,

      name: "Budget Tracker",
      short_name: "Budget Tracker",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",

      icons: [
        {
          src: path.resolve(
            __dirname,
            "public/icons/icon-512x512.png"
            ),
          // the plugin will generate an image for each size
          // included in the size array
          size: [192, 512]
        }
      ]
    })
  ]
};

module.exports = config;
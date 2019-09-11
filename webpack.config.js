const Webpack = require("webpack");

const configurator = {

  // entries is a function that defines which artifacts will be built. Each artifact will be built
  // and written to public/, as defined by the buildConfig function below. You can hardcode which
  // artifacts will be built, as I've done below, or you can customize logic (e.g., with a glob or
  // regex) to define this.
  entries: function(){
    var entries = {
      application: [
        './src/app.ts',
      ],

      other_application: [
        './src/other-app.ts'
      ]
    }

    return entries
  },

  plugins() {
    // Webpack plugins can be inserted here. These typically help you if you're doing a frontend
    // project and will do things like minifying your CSS or copying static assets like fonts or
    // images into public/ for serving.
    var plugins = [];

    return plugins
  },

  moduleOptions: function() {
    return {
      // rules tell webpack how to handle different filetypes. If this were a frontend project,
      // you could add rules here to tell webpack how to handle CSS/SCSS files, JS/JSX files, etc..
      // For now, there's only one rule, which is how to handle Typescript files.
      rules: [
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      ]
    }
  },

  buildConfig: function(){
    const env = process.env.NODE_ENV || "development";

    var config = {
      mode: env,
      entry: configurator.entries(),
      output: {filename: "[name].[hash].js", path: `${__dirname}/public`},
      plugins: configurator.plugins(),
      module: configurator.moduleOptions(),
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
      }
    }

    config.optimization = {}

    return config
  }
}

module.exports = configurator.buildConfig()

const path = require("path");

module.exports = {
  lintOnSave: false,

  devServer: {
    clientLogLevel: "silent",
  },
  productionSourceMap: true, // NOTE: this is default
  configureWebpack: {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.cjs$/, // Regla para archivos .cjs
          use: "babel-loader", // Cargador a utilizar
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", path.join(__dirname, "src"))
      .set("css", path.join(__dirname, "src/assets/css"));
    // .set('fonts', path.join(__dirname, 'src/assets/fonts'))
    config.plugin("html").tap((args) => {
      args[0].title = "Client Cabinet | Tradeview";
      args[0].description =
        "The Client Cabinet you will be able to: Check your account summary Access your account history Fund your account Transfer funds between accounts Request a withdrawal from your account";
      return args;
    });
    config.module.rule("fonts").uses.clear();
    config.module
      .rule("fonts")
      .test(/\.(woff|woff2|eot|ttf|otf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "fonts/[name].[hash:8].[ext]",
      });
    config.module.rule("svg").uses.clear();
    config.module.rule("images").uses.clear();
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        name: "images/[name].[hash:8].[ext]",
        limit: 4096,
        fallback: {
          loader: "file-loader",
          options: {
            name: "images/[name].[hash:8].[ext]",
          },
        },
      });
    // config.module.rule("i18n")
    //     .resourceQuery(/blockType=i18n/)
    //     .type('javascript/auto')
    //     .use("i18n")
    //     .loader("@kazupon/vue-i18n-loader")
    //     .end()
  },
};

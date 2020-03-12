module.exports = function(ctx) {
   return {
      boot: ["i18n", "axios", "firebase", "router-auth"],
      css: ["app.scss"],
      extras: [
         // 'fontawesome-v5',
         "roboto-font", // optional, you are not bound to it
         "material-icons" // optional, you are not bound to it
      ],

      framework: {
         iconSet: "material-icons", // Quasar icon set
         lang: "en-us", // Quasar language pack
         all: "auto",

         components: [],
         directives: [],

         plugins: ["Dialog", "LocalStorage", "Notify", "SessionStorage"]
      },

      supportIE: false,

      build: {
         vueRouterMode: "hash", // available values: 'hash', 'history'
         extendWebpack(cfg) {
            cfg.module.rules.push({
               enforce: "pre",
               test: /\.(js|vue)$/,
               loader: "eslint-loader",
               exclude: /node_modules/,
               options: {
                  formatter: require("eslint").CLIEngine.getFormatter("stylish")
               }
            })
         }
      },

      devServer: {
         https: false,
         port: 8080,
         open: true // opens browser window automatically
      },

      animations: ["zoomIn", "zoomOut"],

      ssr: {
         pwa: false
      },

      pwa: {
         workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
         workboxOptions: {}, // only for GenerateSW
         manifest: {
            name: "Awesome Todo",
            short_name: "Awesome Todo",
            description: "Udemy Course",
            display: "standalone",
            orientation: "portrait",
            background_color: "#ffffff",
            theme_color: "#027be3",
            icons: [
               {
                  src: "statics/icons/icon-128x128.png",
                  sizes: "128x128",
                  type: "image/png"
               },
               {
                  src: "statics/icons/icon-192x192.png",
                  sizes: "192x192",
                  type: "image/png"
               },
               {
                  src: "statics/icons/icon-256x256.png",
                  sizes: "256x256",
                  type: "image/png"
               },
               {
                  src: "statics/icons/icon-384x384.png",
                  sizes: "384x384",
                  type: "image/png"
               },
               {
                  src: "statics/icons/icon-512x512.png",
                  sizes: "512x512",
                  type: "image/png"
               }
            ]
         }
      },

      cordova: {
         // id: "com.34fame.awesome-todo"
      },

      capacitor: {
         hideSplashscreen: true
      },

      electron: {
         bundler: "packager", // 'packager' or 'builder'

         packager: {
            // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
            // OS X / Mac App Store
            // appBundleId: '',
            // appCategoryType: '',
            // osxSign: '',
            // protocol: 'myapp://path',
            // Windows only
            // win32metadata: { ... }
         },

         builder: {
            appId: "q-awesome-todo"
         },

         nodeIntegration: true,

         extendWebpack(cfg) {
            // do something with Electron main process Webpack cfg
            // chainWebpack also available besides this extendWebpack
         }
      }
   }
}

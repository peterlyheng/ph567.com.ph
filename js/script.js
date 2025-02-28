window.__NUXT__ = {};
window.__NUXT__.config = {
    public: {
      baseUrl: "https://apisystem.tech",
      newBaseURL: "https://backend.leadconnectorhq.com/appengine",
      serverBaseUrl: "https://apisystem.tech",
      NODE_ENV: "production",
      REVIEW_WIDGET_URL: "https://backend.leadconnectorhq.com/appengine/reviews/get_widget/",
      REST_API_URLS: "https://backend.leadconnectorhq.com",
      STATS_API_URL: "https://backend.leadconnectorhq.com",
      OLD_STORAGE_API_URL1_CDN: "https://cdn.msgsndr.com",
      OLD_STORAGE_API_URL2_CDN: "https://assets.cdn.msgsndr.com",
      STORAGE_API_URL1_CDN: "https://cdn.filesafe.space",
      STORAGE_API_URL2_CDN: "https://assets.cdn.filesafe.space",
      paymentsServiceUrl: "https://backend.leadconnectorhq.com",
      HLS_URL: "https://content.apisystem.tech",
      IMAGE_CDN: "https://images.leadconnectorhq.com",
      IMAGE_CDN_WHITELIST: ["assets.cdn.msgsndr.com", "cdn.msgsndr.com", "cdn.filesafe.space",
        "assets.cdn.filesafe.space", "storage.googleapis.com", "firebasestorage.googleapis.com"
      ],
      authorizeAcceptJsUrlTestMode: "https://jstest.authorize.net/v1/Accept.js",
      authorizeAcceptJsUrlLiveMode: "https://js.authorize.net/v1/Accept.js",
      nmiPaymentProviderScriptUrl: "https://secure.safewebservices.com/token/Collect.js",
      FORMS_SERVICE_URL: "https://backend.leadconnectorhq.com",
      SURVEYS_SERVICE_URL: "https://backend.leadconnectorhq.com",
      GOOGLE_API_SERVICE_URL: "https://services.leadconnectorhq.com/common-google",
      ECOMMERCE_SERVICE_URL: "https://backend.leadconnectorhq.com/ecommerce",
      HL_HOMEPAGE_STEPID: "6dcfb06b-9734-44bd-bbcc-8bd4b7fec976",
      STRIPE_BNPL_CONFIGURATION_TEST: "pmc_1OaAR1FpU9DlKp7RH0HHU4xH",
      STRIPE_BNPL_CONFIGURATION_LIVE: "pmc_1OlnyOFpU9DlKp7R4tTHuihw",
      STRIPE_PMC_KEY_TEST: "pmc_1Ps2bTFpU9DlKp7RmgTzmJUL",
      STRIPE_PMC_KEY_LIVE: "pmc_1PzYYpFpU9DlKp7RcgxVmcvS",
      STRIPE_DEFAULT_CONFIGURATION_TEST: "pmc_1M95aRFpU9DlKp7ReIqqY0PP",
      STRIPE_DEFAULT_CONFIGURATION_LIVE: "pmc_1NYilsFpU9DlKp7RkMiUNrKE",
      STRIPE_DEFAULT_CONFIGURATION_TEST_SURVEY: "pmc_1PVvmcFpU9DlKp7RFsjX5G7G",
      STRIPE_DEFAULT_CONFIGURATION_LIVE_SURVEY: "pmc_1PVvogFpU9DlKp7Rj8F0ITLV",
      i18n: {
        baseUrl: "",
        defaultLocale: "en",
        defaultDirection: "ltr",
        strategy: "no_prefix",
        lazy: false,
        rootRedirect: "",
        routesNameSeparator: "___",
        defaultLocaleRouteNameSuffix: "default",
        skipSettingLocaleOnNavigate: false,
        differentDomains: false,
        trailingSlash: false,
        configLocales: [{
          code: "da",
          files: ["locales/da.json"]
        }, {
          code: "de",
          files: ["locales/de.json"]
        }, {
          code: "en",
          files: ["locales/en_US.json"]
        }, {
          code: "es",
          files: ["locales/es.json"]
        }, {
          code: "fi",
          files: ["locales/fi.json"]
        }, {
          code: "fr-ca",
          files: ["locales/fr_CA.json"]
        }, {
          code: "fr",
          files: ["locales/fr.json"]
        }, {
          code: "hu",
          files: ["locales/hu.json"]
        }, {
          code: "it",
          files: ["locales/it.json"]
        }, {
          code: "nl",
          files: ["locales/nl.json"]
        }, {
          code: "no",
          files: ["locales/no.json"]
        }, {
          code: "pl",
          files: ["locales/pl.json"]
        }, {
          code: "pt-br",
          files: ["locales/pt_BR.json"]
        }, {
          code: "pt",
          files: ["locales/pt.json"]
        }, {
          code: "sv",
          files: ["locales/sv.json"]
        }],
        locales: {
          da: {
            domain: ""
          },
          de: {
            domain: ""
          },
          en: {
            domain: ""
          },
          es: {
            domain: ""
          },
          fi: {
            domain: ""
          },
          "fr-ca": {
            domain: ""
          },
          fr: {
            domain: ""
          },
          hu: {
            domain: ""
          },
          it: {
            domain: ""
          },
          nl: {
            domain: ""
          },
          no: {
            domain: ""
          },
          pl: {
            domain: ""
          },
          "pt-br": {
            domain: ""
          },
          pt: {
            domain: ""
          },
          sv: {
            domain: ""
          }
        },
        detectBrowserLanguage: {
          alwaysRedirect: false,
          cookieCrossOrigin: false,
          cookieDomain: "",
          cookieKey: "i18n_redirected",
          cookieSecure: false,
          fallbackLocale: "",
          redirectOn: "root",
          useCookie: false
        },
        experimental: {
          localeDetector: "",
          switchLocalePathLinkSSR: false,
          autoImportTranslationFunctions: false
        }
      }
    },
    app: {
      baseURL: "/",
      buildAssetsDir: "/_preview/",
      cdnURL: "https://stcdn.leadconnectorhq.com/"
    }
  }(
    function () {
    const w = window;
    w._$delayHydration = (function () {
      if (!('requestIdleCallback' in w) || !('requestAnimationFrame' in w)) {
        return new Promise(resolve => resolve('not supported'))
      }

      function eventListeners() {
        const c = new AbortController;
        const p = new Promise(resolve => {
          const hydrateOnEvents = "mousemove,scroll,keydown,click,touchstart,wheel".split(",");

          function handler(e) {
            hydrateOnEvents.forEach(e => w.removeEventListener(e, handler));
            requestAnimationFrame(() => resolve(e))
          }
          hydrateOnEvents.forEach(e => {
            w.addEventListener(e, handler, {
              capture: true,
              once: true,
              passive: true,
              signal: c.signal
            })
          })
        });
        return {
          c: () => c.abort(),
          p: p
        }
      }

      function idleListener() {
        let id;
        const p = new Promise(resolve => {
          const isMobile = w.innerWidth < 640;
          const timeout = isMobile ? Number.parseInt("5000") : Number.parseInt("4500");
          const timeoutDelay = () => setTimeout(() => requestAnimationFrame(() => resolve("timeout")),
            timeout);
          id = w.requestIdleCallback(timeoutDelay, {
            timeout: Number.parseInt("2000")
          })
        });
        return {
          c: () => window.cancelIdleCallback(id),
          p: p
        }
      }
      const triggers = [idleListener(), eventListeners()];
      const hydrationPromise = Promise.race(triggers.map(t => t.p)).finally(() => {
        triggers.forEach(t => t.c())
      });
      return hydrationPromise;
    })();;
    (() => {
      w._$delayHydration.then(e => {
        if (e instanceof PointerEvent || e instanceof MouseEvent && e.type === "click" || window.TouchEvent &&
          e instanceof TouchEvent) {
          setTimeout(() => w.requestIdleCallback(() => setTimeout(() => e.target && e.target.click(), 500)),
            50)
        }
      })
    })();
  })(); 
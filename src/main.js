import { devtoolsPlugin, registerPiniaDevtools } from "pinia";

const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
if (!devtools) {
  throw new Error(
    "[single-spa-vue-force-dev] official vue devtools are not installed. Please find them here: https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",
  );
}
devtools.enabled = true;

function enablePiniaDevtools(app) {
  const pinia = app.config.globalProperties.$pinia;
  if (!pinia) return;
  pinia.use(devtoolsPlugin);
  registerPiniaDevtools(app, pinia);
}

function initApp(app) {
  if (devtools.apps.includes(app)) return;

  devtools.emit("app:init", app, app.version, {
    Fragment: Symbol.for("v-fgt"),
    Text: Symbol.for("v-txt"),
    Comment: Symbol.for("v-cmt"),
    Static: Symbol.for("v-stc"),
  });

  app.onUnmount(() => {
    devtools.emit("app:unmount", app);
  });

  try {
    enablePiniaDevtools(app);
  } catch (e) {
    console.error("[single-spa-vue-force-dev] failed to enable pinia devtools.", e);
  }
}

function startMonitoring() {
  // init vue apps mounted after initial scan
  Object.defineProperty(Element.prototype, "__vue_app__", {
    set(app) {
      Object.defineProperty(this, "__vue_app__", {
        value: app,
        writable: true,
        configurable: true,
        enumerable: true,
      });
      initApp(app);
    },
  });

  // initial scan
  const nodes = document.querySelectorAll("*");
  for (let i = 0; i < nodes.length; i++) {
    const app = nodes[i]["__vue_app__"];
    if (app) initApp(app);
  }
}

startMonitoring();

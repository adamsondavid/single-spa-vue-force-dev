import { devtoolsPlugin, registerPiniaDevtools } from "pinia";

setTimeout(() => {
  const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  if (!devtools) return;

  function enablePiniaDevtools(app) {
    const pinia = app.config.globalProperties.$pinia;
    if (!pinia) return;
    pinia.use(devtoolsPlugin);
    registerPiniaDevtools(vueRootInstance, pinia);
  }

  function initApp(app) {
    if (devtools.apps.includes(app)) return;

    devtools.emit("app:init", app, app.version, {
      Fragment: Symbol.for("v-fgt"),
      Text: Symbol.for("v-txt"),
      Comment: Symbol.for("v-cmt"),
      Static: Symbol.for("v-stc"),
    });

    try {
      enablePiniaDevtools(app);
    } catch (e) {
      console.error("[single-spa-vue-force-dev] failed to enable pinia devtools", e);
    }
  }

  function scan() {
    const nodes = document.querySelectorAll("*");
    for (let i = 0; i < nodes.length; i++) {
      const app = nodes[i]["__vue_app__"];
      if (app) initApp(app);
    }
  }

  devtools.enabled = true;
  setTimeout(scan, 2000);
  window.addEventListener("single-spa:app-change", () => setTimeout(scan, 2000));
}, 1000);

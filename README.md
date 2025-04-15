# single-spa-vue-force-dev

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/lcpbpknakdcmhgkjdfadnfcaiifghhjk)](https://chromewebstore.google.com/detail/single-spa-vue-force-dev/lcpbpknakdcmhgkjdfadnfcaiifghhjk)

A browser plugin that forces production builds of Vue applications into development mode to make them visible in the Vue Devtools. Optimized for use with [single-spa](https://single-spa.js.org/), it handles multiple Vue instances and automatically scans and indexes them on single-spa change events.

## Features ✨

- Forces Vue apps to run in development mode, enabling Vue Devtools.
- Designed to work specifically with [single-spa](https://single-spa.js.org/), managing multiple Vue app instances.
- Automatically updates the list of Vue apps when single-spa change events occur, ensuring Vue Devtools detects the correct app instances.

## Installation 📥

1. Install the plugin from your browser's marketplace: [Google Chrome](https://chromewebstore.google.com/detail/single-spa-vue-force-dev/lcpbpknakdcmhgkjdfadnfcaiifghhjk)
2. Make sure you have the Vue Devtools installed, as our plugin heavily depends on it.

## Usage 🚀

1. After installing both the plugin and Vue Devtools, ensure Vue Devtools is open.
2. As you interact with your single-spa app, the plugin will automatically force Vue instances into development mode and update the app list within your devtools.

## Limitations ⚠️

- This plugin is intended for development environments only and should **not** be used in production.
- Some Vue apps might require additional configuration to be fully compatible with single-spa and this plugin.

## Acknowledgements 🙏

This plugin builds upon code from the [vue-force-dev](https://github.com/hzmming/vue-force-dev) repository and includes modifications for compatibility with single-spa and dynamic/multiple Vue instances. The core idea and forcing mechanism were borrowed from vue-force-dev. Huge shoutout and big thanks to [hzmming](https://github.com/hzmming)!

## License 📄

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

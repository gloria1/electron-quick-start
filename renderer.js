"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const client_1 = require("react-dom/client");
const App_1 = require("./App");
const container = document.getElementById('rendererroot');
if (container !== null) {
    const root = (0, client_1.createRoot)(container);
    root.render((0, jsx_runtime_1.jsx)(App_1.App, {}));
}
//# sourceMappingURL=renderer.js.map
/*
 * importing our custom v-dom function which tends to create element by passing params as node structure which is created by our custom-hyperscript.js
 * @params - (vnode) structure of dom in json format
 * refer our custom-v-dom.js‼
 */
import renderComponent from "./scripts/custom-v-dom.js";

import App from "./app.js";

renderComponent(new App(), document.getElementById("root"));

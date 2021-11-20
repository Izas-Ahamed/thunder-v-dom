/*
 * Using HTML (index.html) as document source for creating HTML elements (see custom-hyperscript.js)
 *
 * refer : https://github.com/hyperhype/hyperscript
 *
 */

//importing our custom hyperscript function which tends to create element by passing params
import h from "./custom-hyperscript.js";

/*
 * function where our element created based on parameters
 * params - (nodename,attribute,child_nodes)
 * refer our custom-hyperscript.js‼
 */
const App = () => {
    return h("h1", null, "Develop Yourself 🌱!");
};

//Open index.html in browser and see the browser console

//logging our component like HTML element
console.log("App()", App());

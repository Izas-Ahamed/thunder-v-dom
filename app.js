//Same with More Control with different layers

/*
 * importing our custom hyperscript function which tends to create object structure of dom like AST by passing params
 * @params - (nodename,attribute,child_nodes)
 * refer our custom-hyperscript.js‼
 */
import h from "./custom-hyperscript.js";

/*
 * importing our custom v-dom function which tends to create element by passing params as node structure which is created by our custom-hyperscript.js
 * @params - (vnode) structure of dom in json format
 * refer our custom-v-dom.js‼
 */
import renderNode from "./custom-v-dom.js";

let currentApp;

const App = (props) => {
    const { list } = props;

    return h(
        "div",
        { class: "app" },
        h("h1", null, "Food Love"),
        h("ul", null, ...list.map((item) => h("li", null, item)))
    );
};

//function to render view which has state data as parameter
const render = (state) => {
    //creating dom elements with passing state as props in App function(like component which uses custom-hyperscript and returns dom structure of objects) into renderNode function
    const newApp = renderNode(App(state));

    // checking and appending or replacing element based on if already the element exists or not
    if (currentApp) {
        document.body.replaceChild(newApp, currentApp);
    } else {
        document.body.appendChild(newApp);
    }

    // storing the reference for future changes
    currentApp = newApp;
};

//our state which contains list of array of values to be render in dom
const state = {
    list: [
        "🍕",
        "🍔",
        "🍟",
        "🌭",
        "🍿",
        "🧀",
        "🌯",
        "🌮",
        "🥪",
        "🍗",
        "🍜",
        "🥧",
        "🍦",
        "🍨",
        "🍰",
        "🥣",
    ],
};

//passing state and rendering the dom
render(state);

//setting interval to every 1 second to add random item from the list to add itself and
// calling render function to render on  thedom
setInterval(() => {
    state.list = [
        ...state.list,
        state.list[Math.floor(Math.random() * state.list.length)],
    ];
    render(state);
}, 1000);

//open index.html to view dom changes

/*
 * NOTE:
 * To see the rendering changes
 * open developer tools
 * go to sources -> press esc to toggle console drawer -> press three dots on console drawer
 * -> click rendering -> check paint flashing
 * this one shows where the dom elements rendering
 */

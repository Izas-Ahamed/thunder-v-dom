//Rendering Component in Dom

/*
 * importing our custom hyperscript function which tends to create object structure of dom like AST by passing params
 * @params - (nodename,attribute,child_nodes)
 * refer our custom-hyperscript.js‼
 */
import h from "./scripts/custom-hyperscript.js";

//component which provides props and state
import Component from "./scripts/component.js";

//importing food component
import FoodList from "./components/food-list-component.js";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(props, { list }) {
        return h(
            "div",
            { class: "app" },
            h("h1", null, "Food Love"),
            h(FoodList)
        );
    }
}

export default App;
//open index.html to view dom changes

/*
 * NOTE:
 * To see the rendering changes
 * open developer tools
 * go to sources -> press esc to toggle console drawer -> press three dots on console drawer
 * -> click rendering -> check paint flashing
 * this one shows where the dom elements rendering
 */

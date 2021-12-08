import Component from "../scripts/component.js";

import h from "../scripts/custom-hyperscript.js";

class FoodList extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

        //setting interval to every 1 second to add random item from the list to add itself and to render dom by renderComponent function
        this.timer = setInterval(() => {
            this.setState({
                list: [
                    ...this.state.list,
                    this.state.list[
                        Math.floor(Math.random() * this.state.list.length)
                    ],
                ],
            });
        }, 1000);
    }

    render(props, { list }) {
        return h("ul", null, ...list.map((item) => h("li", null, item)));
    }
}
export default FoodList;

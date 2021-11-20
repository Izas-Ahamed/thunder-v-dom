const h = (nodeName, attributes, ...children) => {
    const element = document.createElement(nodeName);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    children.forEach((child) => {
        if (typeof child === "string") {
            element.append(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
};

export default h;

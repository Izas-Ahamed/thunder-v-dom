const renderNode = (vNode) => {
    let element;

    const { nodeName, attributes, children } = vNode;

    if (vNode.split) return document.createTextNode(vNode);

    element = document.createElement(nodeName);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    (children || []).forEach((child) => {
        element.appendChild(renderNode(child));
    });

    return element;
};

export default renderNode;

const renderNode = (vNode) => {
    let element;

    const { nodeName, attributes, children } = vNode;

    if (vNode.split) return document.createTextNode(vNode);

    if (typeof nodeName === "string") {
        element = document.createElement(nodeName);

        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    } else if (typeof nodeName === "function") {
        const component = new nodeName(attributes);

        element = renderNode(
            component.render(component.props, component.state)
        );

        component.base = element;
    }

    (children || []).forEach((child) => {
        element.appendChild(renderNode(child));
    });

    return element;
};

const renderComponent = (component, parentNode) => {
    const oldBase = component.base;

    component.base = renderNode(
        component.render(component.props, component.state)
    );
    if (parentNode) {
        parentNode.appendChild(component.base);
    } else {
        oldBase.parentNode.replaceChild(component.base, oldBase);
    }
};

export default renderComponent;

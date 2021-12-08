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
    const rendered = component.render(component.props, component.state);
    if (parentNode) {
        component.base = renderNode(
            component.render(component.props, component.state)
        );
        parentNode.appendChild(component.base);
    } else {
        component.base = diff(component.base, rendered);
    }
};

const diff = (dom, vNode) => {
    const hasNewChilds = dom.childNodes.length !== vNode.children.length;

    if (hasNewChilds) {
        dom.appendChild(renderNode(vNode.children[vNode.children.length - 1]));
        return dom;
    } else {
        const newDom = renderNode(vNode);
        dom.parentNode.replaceChild(newDom, dom);
        return dom;
    }
};

export default renderComponent;

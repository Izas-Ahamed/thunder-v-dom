module.exports = () => {
    return {
        visitor: {
            TemplateElement({ node }) {
                node.value.raw = node.value.raw.replace(
                    /:seedling:/g,
                    "\u{1F331}"
                );
            },
        },
    };
};

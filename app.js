//importing parse function from babylon
//NOTE: Babylon has been moved into the main Babel mono-repo as @babel/parser .
const { parse } = require("babylon");

//importing traverse function
const { default: traverse } = require("@babel/traverse");

//importing generate function
const { default: generate } = require("@babel/generator");

const code = `
const msg = \`Develop Yourself :seedling: !\`;
`;

//parse the code and convert it into Abstract Syntax Tree(AST)
const ast = parse(code);

//traversing ast to customize the values
traverse(ast, {
    enter({ node }) {
        if (node.type == "TemplateElement") {
            node.value.raw = node.value.raw.replace(/:seedling:/g, "\u{1F331}");
        }
    },
});

//generating changed ast to code
console.log(generate(ast).code);

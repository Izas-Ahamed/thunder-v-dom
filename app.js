/* 
  'Using Babel and Custom Plugin in babel'
  
  Code files are compiled and transformed to separate files 
  by babel into dist folder (our custom plugins are used and compiled)
  using  packages:
   - "@babel/core", // core babel package
   - "@babel/cli", // for cli

 .babelrc :
   - this is the file for configuration where our plugins are added to customize code

  we are using these commands in npm scripts to use babel :
   - "build": "babel app.js -d dist",
   - "start": "npm run build && nodemon dist/app.js"

   nodemon will start after compilation of files to dist folder by babel
*/

const code = `
const msg = \`Develop Yourself :seedling: !\`;
`;

console.log(code);

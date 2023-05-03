const path = require("path");

console.log( `\nDirectory Path : ${__dirname}` );    // output >>> Directory Path : c:\Users\tarun\Node.js Practice
console.log( `File Path : ${__filename}` );   // output >>> c:\Users\tarun\Node.js Practice\Path_Module.js

// Returing Basename of your file
console.log(
    `\nThe File name is ${path.basename(__filename)}`   // output >>> The File name is Path_Module.js
);

// Ignoring extensions/suffix (I say) 😅
console.log(
    `After removing extn, File name is : ${path.basename(__filename , ".js")}`   // output >>> After removing extn, File name is : Path_Module
);
// is case sensitive
console.log(
    `After removing extn, File name is : ${path.basename(__filename , ".JS")}`   // output >>> After removing extn, File name is : Path_Module.js
);

// Returing Folder name
console.log(
    `The Folder name is ${path.basename(__dirname)}`   // output >>> The Folder name is Node.js Practice
);

// Returning Directory name from the path
currPath = __filename   // Here I'm taking current file path as currPath
console.log(
    `Directory name is : ${path.dirname(currPath)}`  // output >>> Directory name is : c:\Users\tarun\Node.js Practice
);

// Returning Extension
console.log( `Extn is : ${path.extname("index.html")}` );   // output >>> Extn is : .html
console.log( `Extn is : ${path.extname("style.css")}` );   // output >>> Extn is : .css
console.log( `Extn is : ${path.extname("node.js")}` );   // output >>> Extn is : .js

console.log(
    `The Extn is (using path) : ${path.extname(path.basename(__filename))}`  // output >>> The Extn is (using path) : .js
);

// Retruning Path segment with h/o path segment separator i.e., forward slash (/) and backward slash (\)
console.log(
    `Path segments : ${__filename.split(path.sep)}`   // output >>> Path segments : c:,Users,tarun,Node.js Practice,Path_Module.js
);

const commonPaths=require("./common-paths");

var basePath = __dirname;

const config = {
    entry: {
        vendor: ["jquery", "bootstrap", "bootstrap/dist/css/bootstrap.css", "font-awesome/css/font-awesome.css", "./src/style.css"],
        app: "./src/bootstrapper.ts"
    },
    output: {
        path: commonPaths.outputPath,
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },    
}

module.exports = config;
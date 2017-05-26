var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/example-fabric-ui/main.tsx',
	output: {

		path: path.resolve(__dirname, "build"), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module) 

		filename: "bundle.js", // string
		//filename: "[name].js", // for multiple entry points
		//filename: "[chunkhash].js", // for long term caching
		// the filename template for entry chunks

		publicPath: "/assets/", // string
		//publicPath: "",
		//publicPath: "https://cdn.example.com/",
		// the url to the output directory resolved relative to the HTML page

		libraryTarget: "umd", // universal module definition
        /*
		libraryTarget: "umd2", // universal module definition
        libraryTarget: "commonjs2", // exported with module.exports
        libraryTarget: "commonjs-module", // exports with module.exports
        libraryTarget: "commonjs", // exported as properties to exports
        libraryTarget: "amd", // defined with AMD defined method
        libraryTarget: "this", // property set on this
        libraryTarget: "var", // variable defined in root scope
        libraryTarget: "assign", // blind assignment
        libraryTarget: "window", // property set to window object
        libraryTarget: "global", // property set to global object
        libraryTarget: "jsonp", // jsonp wrapper
		*/
		// the type of the exported library		
	},

	module: {
		rules: [
		
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				use: "source-map-loader"
			},

			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				exclude: /(node_modules|bower_components)/
			},

			{
				test: /.jsx?$/, // /\.js$/
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015-native-modules', 'react']
				}
			}			
		]
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
};
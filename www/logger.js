
// Add ability to access line number
// http://stackoverflow.com/questions/11386492/accessing-line-number-in-v8-javascript-chrome-node-js
Object.defineProperty(global, '__stack', {
	get: function(){
		var orig = Error.prepareStackTrace;
		Error.prepareStackTrace = function(_, stack){ return stack; };
		var err = new Error;
		Error.captureStackTrace(err, arguments.callee);
		var stack = err.stack;
		Error.prepareStackTrace = orig;
		return stack;
	}
});
Object.defineProperty(global, '__line', {
	get: function(){
		return __stack[1].getLineNumber();
	}
});

(function() {

var log = function(tag, filename, line, description) {
	console.log(
			'[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
			+ '] ' + tag + '\t' + filename + '\t:' + line + '\t' + description);
};

var debug = function(filename, line, description) {
	log("\u001b[36mDEBUG\u001b[0m", filename, line, description);
};
var info = function(filename, line, description) {
	log("\u001b[32mINFO\u001b[0m", filename, line, description);
};
var warn = function(filename, line, description) {
	log("\u001b[33mWARN", filename, line, description + "\u001b[0m");
};
var error = function(filename, line, description) {
	log("\u001b[31mERROR", filename, line, description + "\u001b[0m");
};

module.exports.debug = debug;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
}());


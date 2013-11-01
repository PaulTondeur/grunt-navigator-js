module.exports = function (grunt) {
	grunt.initConfig({
		states: {
			jsonPaths: {
				format: 'json',
				out: "states/statePaths.json",
				states: "test/States.js"
			},

			jsonRegex: {
				format: 'json',
				regex: true,
				out: "states/stateRegex.json",
				states: "test/States.js"
			},

			requireJSjsonPaths: {
				format: 'json',
				out: "states/requireJSStatePaths.json",
				states: "test/RequireJSStates.js"
			},

			requireJSjsonRegex: {
				format: 'json',
				regex: true,
				out: "states/requireJSStateRegex.json",
				states: "test/RequireJSStates.js"
			}
		}
	});

	grunt.loadTasks('tasks');
};
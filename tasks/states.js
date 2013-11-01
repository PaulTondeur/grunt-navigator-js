module.exports = function (grunt) {
	var path = require('path'),
		_ = require('lodash');

	GLOBAL.navigatorjs = {};
	require("navigator-js/public/js/navigator-js/NavigationState.js");

	grunt.registerMultiTask('states', 'Write states to external file', function() {
		var States = getStates(this.data.states),
			paths = getStatePathsArray(States, this.data.regex);

		writeStatesToFile(paths, this.data.format, this.data.out);

		function getStates(statesFile) {
			var ModularStates = require(path.resolve(statesFile));

			return _.isEmpty(ModularStates) ? GLOBAL.States : ModularStates;
		}

		function getStatePathsArray(states, regex) {
			var allStates = [],
				state,
				stateKey;

			for (stateKey in states) {
				state = states[stateKey];

				if(state instanceof navigatorjs.NavigationState) {
					if(regex) {
						allStates.push(state.getPathRegex().toString());
					} else {
						allStates.push(state.getPath());
					}
				}
			}

			return allStates;
		}

		function writeStatesToFile(paths, format, out) {
			if(format=="json") {
				writeToJSON(paths, out);
			} else {
				throw new Error("Can't write to file, as format ["+format+"] is unknown");
			}
		}

		function writeToJSON(paths, out) {
			var jsonString = JSON.stringify(paths);
			grunt.file.write(out, jsonString);
		}
	});
};

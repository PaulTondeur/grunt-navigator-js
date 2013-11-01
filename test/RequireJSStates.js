if (typeof define !== 'function') { var define = require('amdefine')(module) }
define([
], function () {
	var RequireJSStates = {};
	RequireJSStates.ROOT = new navigatorjs.NavigationState("");

	RequireJSStates.HOME = RequireJSStates.ROOT.clone().append("home");
	RequireJSStates.GALLERY = RequireJSStates.ROOT.clone().append("gallery");
	RequireJSStates.GALLERY_IMAGE = RequireJSStates.GALLERY.clone().append("*");
	RequireJSStates.ME = RequireJSStates.ROOT.clone().append("requirejs");

	RequireJSStates.TEST = "I am not a state";
	RequireJSStates.TEST2 = "i/am/no/state/either";

	return RequireJSStates;
});
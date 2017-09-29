/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--0-1!../../node_modules/postcss-loader/lib/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--0-1!../../node_modules/postcss-loader/lib/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Abril+Fatface);", ""]);

// module
exports.push([module.i, ".slide-up {\n    -webkit-animation: slide-up 200ms backwards ease-in-out;\n            animation: slide-up 200ms backwards ease-in-out;\n}.animation-delay-100 {\n        -webkit-animation-delay: 100ms;\n                animation-delay: 100ms;\n    }.animation-duration-100 {\n        -webkit-animation-duration: 100ms;\n                animation-duration: 100ms;\n    }.animation-delay-200 {\n        -webkit-animation-delay: 200ms;\n                animation-delay: 200ms;\n    }.animation-duration-200 {\n        -webkit-animation-duration: 200ms;\n                animation-duration: 200ms;\n    }.animation-delay-300 {\n        -webkit-animation-delay: 300ms;\n                animation-delay: 300ms;\n    }.animation-duration-300 {\n        -webkit-animation-duration: 300ms;\n                animation-duration: 300ms;\n    }.animation-delay-400 {\n        -webkit-animation-delay: 400ms;\n                animation-delay: 400ms;\n    }.animation-duration-400 {\n        -webkit-animation-duration: 400ms;\n                animation-duration: 400ms;\n    }.animation-delay-500 {\n        -webkit-animation-delay: 500ms;\n                animation-delay: 500ms;\n    }.animation-duration-500 {\n        -webkit-animation-duration: 500ms;\n                animation-duration: 500ms;\n    }.animation-delay-600 {\n        -webkit-animation-delay: 600ms;\n                animation-delay: 600ms;\n    }.animation-duration-600 {\n        -webkit-animation-duration: 600ms;\n                animation-duration: 600ms;\n    }.animation-delay-700 {\n        -webkit-animation-delay: 700ms;\n                animation-delay: 700ms;\n    }.animation-duration-700 {\n        -webkit-animation-duration: 700ms;\n                animation-duration: 700ms;\n    }.animation-delay-800 {\n        -webkit-animation-delay: 800ms;\n                animation-delay: 800ms;\n    }.animation-duration-800 {\n        -webkit-animation-duration: 800ms;\n                animation-duration: 800ms;\n    }.animation-delay-900 {\n        -webkit-animation-delay: 900ms;\n                animation-delay: 900ms;\n    }.animation-duration-900 {\n        -webkit-animation-duration: 900ms;\n                animation-duration: 900ms;\n    }.animation-delay-1000 {\n        -webkit-animation-delay: 1000ms;\n                animation-delay: 1000ms;\n    }.animation-duration-1000 {\n        -webkit-animation-duration: 1000ms;\n                animation-duration: 1000ms;\n    }.animation-delay-1100 {\n        -webkit-animation-delay: 1100ms;\n                animation-delay: 1100ms;\n    }.animation-duration-1100 {\n        -webkit-animation-duration: 1100ms;\n                animation-duration: 1100ms;\n    }.animation-delay-1200 {\n        -webkit-animation-delay: 1200ms;\n                animation-delay: 1200ms;\n    }.animation-duration-1200 {\n        -webkit-animation-duration: 1200ms;\n                animation-duration: 1200ms;\n    }.animation-delay-1300 {\n        -webkit-animation-delay: 1300ms;\n                animation-delay: 1300ms;\n    }.animation-duration-1300 {\n        -webkit-animation-duration: 1300ms;\n                animation-duration: 1300ms;\n    }.animation-delay-1400 {\n        -webkit-animation-delay: 1400ms;\n                animation-delay: 1400ms;\n    }.animation-duration-1400 {\n        -webkit-animation-duration: 1400ms;\n                animation-duration: 1400ms;\n    }.animation-delay-1500 {\n        -webkit-animation-delay: 1500ms;\n                animation-delay: 1500ms;\n    }.animation-duration-1500 {\n        -webkit-animation-duration: 1500ms;\n                animation-duration: 1500ms;\n    }.animation-delay-1600 {\n        -webkit-animation-delay: 1600ms;\n                animation-delay: 1600ms;\n    }.animation-duration-1600 {\n        -webkit-animation-duration: 1600ms;\n                animation-duration: 1600ms;\n    }.animation-delay-1700 {\n        -webkit-animation-delay: 1700ms;\n                animation-delay: 1700ms;\n    }.animation-duration-1700 {\n        -webkit-animation-duration: 1700ms;\n                animation-duration: 1700ms;\n    }.animation-delay-1800 {\n        -webkit-animation-delay: 1800ms;\n                animation-delay: 1800ms;\n    }.animation-duration-1800 {\n        -webkit-animation-duration: 1800ms;\n                animation-duration: 1800ms;\n    }.animation-delay-1900 {\n        -webkit-animation-delay: 1900ms;\n                animation-delay: 1900ms;\n    }.animation-duration-1900 {\n        -webkit-animation-duration: 1900ms;\n                animation-duration: 1900ms;\n    }.animation-delay-2000 {\n        -webkit-animation-delay: 2000ms;\n                animation-delay: 2000ms;\n    }.animation-duration-2000 {\n        -webkit-animation-duration: 2000ms;\n                animation-duration: 2000ms;\n    }.animation-delay-2100 {\n        -webkit-animation-delay: 2100ms;\n                animation-delay: 2100ms;\n    }.animation-duration-2100 {\n        -webkit-animation-duration: 2100ms;\n                animation-duration: 2100ms;\n    }.animation-delay-2200 {\n        -webkit-animation-delay: 2200ms;\n                animation-delay: 2200ms;\n    }.animation-duration-2200 {\n        -webkit-animation-duration: 2200ms;\n                animation-duration: 2200ms;\n    }.animation-delay-2300 {\n        -webkit-animation-delay: 2300ms;\n                animation-delay: 2300ms;\n    }.animation-duration-2300 {\n        -webkit-animation-duration: 2300ms;\n                animation-duration: 2300ms;\n    }.animation-delay-2400 {\n        -webkit-animation-delay: 2400ms;\n                animation-delay: 2400ms;\n    }.animation-duration-2400 {\n        -webkit-animation-duration: 2400ms;\n                animation-duration: 2400ms;\n    }.animation-delay-2500 {\n        -webkit-animation-delay: 2500ms;\n                animation-delay: 2500ms;\n    }.animation-duration-2500 {\n        -webkit-animation-duration: 2500ms;\n                animation-duration: 2500ms;\n    }.animation-delay-2600 {\n        -webkit-animation-delay: 2600ms;\n                animation-delay: 2600ms;\n    }.animation-duration-2600 {\n        -webkit-animation-duration: 2600ms;\n                animation-duration: 2600ms;\n    }.animation-delay-2700 {\n        -webkit-animation-delay: 2700ms;\n                animation-delay: 2700ms;\n    }.animation-duration-2700 {\n        -webkit-animation-duration: 2700ms;\n                animation-duration: 2700ms;\n    }.animation-delay-2800 {\n        -webkit-animation-delay: 2800ms;\n                animation-delay: 2800ms;\n    }.animation-duration-2800 {\n        -webkit-animation-duration: 2800ms;\n                animation-duration: 2800ms;\n    }.animation-delay-2900 {\n        -webkit-animation-delay: 2900ms;\n                animation-delay: 2900ms;\n    }.animation-duration-2900 {\n        -webkit-animation-duration: 2900ms;\n                animation-duration: 2900ms;\n    }.animation-delay-3000 {\n        -webkit-animation-delay: 3000ms;\n                animation-delay: 3000ms;\n    }.animation-duration-3000 {\n        -webkit-animation-duration: 3000ms;\n                animation-duration: 3000ms;\n    }@-webkit-keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}@keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}body {\n    \n}h1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}h1, h2, h3, h4, h5, h6 {\n    line-height: 1.8;\n    font-family: 'Abril Fatface', cursive;\n}p {\n    line-height: 1.6;\n    font-family: 'Open Sans', Helvetica, sans-serif;\n}* {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n}body {\n    background: #DDD;\n    padding: 50px 5vw;\n    min-height: 100vh;\n    max-width: 1440px;\n    margin: 0 auto;\n    \n}.Banner {\n    position: relative;\n    overflow: hidden;\n}.Banner__image {\n        width: 100%;\n    }.Banner__screen {\n        position: absolute;\n        display: inline-block;\n        bottom: 1em;\n        left: -2em;\n        min-width: 40%;\n        width: 90%;\n        background: #000000;\n        background: rgba(0,0,0,.3);\n        color: white;\n        padding: 2em 3em;\n\n    }.Content {\n    background: white;\n    border-radius: 0 0 3px 3px;\n    z-index: 100;\n}.Content--padding {\n        padding: 4em 2em;\n    }.Header {\n    max-width: 1440px;\n    margin: 0 auto;\n    position: -webkit-sticky;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n    background: #DDD;\n\n}.Hero {\n    font-size: 3em;\n    margin: 0 0 .2em 0;\n}.Logo {\n    display: inline-block;\n}.Main {\n    max-width: 1440px;\n    margin: 0 auto;\n}.Wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}.Wrapper--space-between {\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }.Wrapper .Wrapper__item--last {\n        margin-left: auto;\n        margin-right: 0;\n    }.Wrapper .col-1 {\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n        }.Wrapper .col-2 {\n            -webkit-box-flex: 2;\n                -ms-flex: 2;\n                    flex: 2;\n        }.Wrapper .col-3 {\n            -webkit-box-flex: 3;\n                -ms-flex: 3;\n                    flex: 3;\n        }.Wrapper .col-4 {\n            -webkit-box-flex: 4;\n                -ms-flex: 4;\n                    flex: 4;\n        }.Wrapper .col-5 {\n            -webkit-box-flex: 5;\n                -ms-flex: 5;\n                    flex: 5;\n        }.Wrapper .col-6 {\n            -webkit-box-flex: 6;\n                -ms-flex: 6;\n                    flex: 6;\n        }.Wrapper .col-7 {\n            -webkit-box-flex: 7;\n                -ms-flex: 7;\n                    flex: 7;\n        }.Wrapper .col-8 {\n            -webkit-box-flex: 8;\n                -ms-flex: 8;\n                    flex: 8;\n        }.Wrapper .col-9 {\n            -webkit-box-flex: 9;\n                -ms-flex: 9;\n                    flex: 9;\n        }.Wrapper .col-10 {\n            -webkit-box-flex: 10;\n                -ms-flex: 10;\n                    flex: 10;\n        }.Wrapper .col-11 {\n            -webkit-box-flex: 11;\n                -ms-flex: 11;\n                    flex: 11;\n        }.Wrapper .col-12 {\n            -webkit-box-flex: 12;\n                -ms-flex: 12;\n                    flex: 12;\n        }@media (max-width: 425px) {.Wrapper {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }.Wrapper .Wrapper__item--last {\n            margin-left: 0;\n            margin-right: 0;\n    }\n}.Card {\n    background: white;\n    border-radius: 3px;\n    overflow: hidden;\n    -webkit-box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n            box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n    padding: 1em;\n    margin: 1em;\n}.Tab {\n    display: inline-block;\n    overflow: hidden;\n    border-radius: 3px 3px 0 0;\n    background: #CCC;\n    z-index: 0;\n    margin-right: .25em\n}.Tab:hover {\n    background: #BBB;\n}.Tab--active {\n        background: white;\n}.Tab--active:hover {\n    background: white;\n}.Tab a {\n        text-decoration: none;\n        padding: 1em 1em .25em 1em;\n        line-height: 2;\n        font-weight: 600;\n        color: black;\n}.Tab a:visited {\n    color: inherit;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU4Zjc4Mjk5NDY2YWMzM2U1ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcz80YzM5Iiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTtBQUNBLDRGQUE2Rjs7QUFFN0Y7QUFDQSxvQ0FBcUMsOERBQThELDhEQUE4RCxHQUFHLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZD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Q0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWU4Zjc4Mjk5NDY2YWMzM2U1ZjQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYnJpbCtGYXRmYWNlKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZS11cCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS11cCAyMDBtcyBiYWNrd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS11cCAyMDBtcyBiYWNrd2FyZHMgZWFzZS1pbi1vdXQ7XFxufS5hbmltYXRpb24tZGVsYXktMTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNDAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNDAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktODAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tODAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktOTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tOTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDExMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDExMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMzAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMzAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMDBtcztcXG4gICAgfUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufUBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1ib2R5IHtcXG4gICAgXFxufWgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufWgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBsaW5lLWhlaWdodDogMS44O1xcbiAgICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xcbn1wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufSoge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogI0RERDtcXG4gICAgcGFkZGluZzogNTBweCA1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIFxcbn0uQmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn0uQmFubmVyX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfS5CYW5uZXJfX3NjcmVlbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBib3R0b206IDFlbTtcXG4gICAgICAgIGxlZnQ6IC0yZW07XFxuICAgICAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwYWRkaW5nOiAyZW0gM2VtO1xcblxcbiAgICB9LkNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59LkNvbnRlbnQtLXBhZGRpbmcge1xcbiAgICAgICAgcGFkZGluZzogNGVtIDJlbTtcXG4gICAgfS5IZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kOiAjREREO1xcblxcbn0uSGVybyB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBtYXJnaW46IDAgMCAuMmVtIDA7XFxufS5Mb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn0uTWFpbiB7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59LldyYXBwZXIge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufS5XcmFwcGVyLS1zcGFjZS1iZXR3ZWVuIHtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9LldyYXBwZXIgLldyYXBwZXJfX2l0ZW0tLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH0uV3JhcHBlciAuY29sLTEge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTIge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAyO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMjtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTMge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDM7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAzO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMztcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTQge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDQ7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA0O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNDtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTUge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA1O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTYge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDY7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA2O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNjtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTcge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDc7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA3O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNztcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTgge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDg7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogODtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTkge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDk7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA5O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogOTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTEwIHtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDEwO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTA7XFxuICAgICAgICB9LldyYXBwZXIgLmNvbC0xMSB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTE7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAxMTtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDExO1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtMTIge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEyO1xcbiAgICAgICAgICAgICAgICAtbXMtZmxleDogMTI7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMjtcXG4gICAgICAgIH1AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHsuV3JhcHBlciB7XFxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH0uV3JhcHBlciAuV3JhcHBlcl9faXRlbS0tbGFzdCB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB9XFxufS5DYXJkIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDEwcHggLTdweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbjogMWVtO1xcbn0uVGFiIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gICAgYmFja2dyb3VuZDogI0NDQztcXG4gICAgei1pbmRleDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbVxcbn0uVGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0JCQjtcXG59LlRhYi0tYWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn0uVGFiLS1hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59LlRhYiBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gLjI1ZW0gMWVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbn0uVGFiIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIhLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
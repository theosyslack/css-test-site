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



window.addEventListener('load', function(){
    document.body.classList.remove('preload');
    let header = document.querySelector('.Header');
    let body = document.querySelector('.Body');

    window.addEventListener('scroll', function(e){
        let headerBoundaries = header.getBoundingClientRect();

        if (headerBoundaries.top === -1){
            header.classList.add('Header--is-sticky');
            body.classList.add('Body--dark-mode');
            
        } else {
            header.classList.remove('Header--is-sticky');
            body.classList.remove('Body--dark-mode');
        }
    })
});


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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800);", ""]);

// module
exports.push([module.i, ".slide-up {\n    -webkit-animation: slide-up 200ms backwards ease-in-out;\n            animation: slide-up 200ms backwards ease-in-out;\n}.animation-delay-100 {\n        -webkit-animation-delay: 100ms;\n                animation-delay: 100ms;\n    }.animation-duration-100 {\n        -webkit-animation-duration: 100ms;\n                animation-duration: 100ms;\n    }.animation-delay-200 {\n        -webkit-animation-delay: 200ms;\n                animation-delay: 200ms;\n    }.animation-duration-200 {\n        -webkit-animation-duration: 200ms;\n                animation-duration: 200ms;\n    }.animation-delay-300 {\n        -webkit-animation-delay: 300ms;\n                animation-delay: 300ms;\n    }.animation-duration-300 {\n        -webkit-animation-duration: 300ms;\n                animation-duration: 300ms;\n    }.animation-delay-400 {\n        -webkit-animation-delay: 400ms;\n                animation-delay: 400ms;\n    }.animation-duration-400 {\n        -webkit-animation-duration: 400ms;\n                animation-duration: 400ms;\n    }.animation-delay-500 {\n        -webkit-animation-delay: 500ms;\n                animation-delay: 500ms;\n    }.animation-duration-500 {\n        -webkit-animation-duration: 500ms;\n                animation-duration: 500ms;\n    }.animation-delay-600 {\n        -webkit-animation-delay: 600ms;\n                animation-delay: 600ms;\n    }.animation-duration-600 {\n        -webkit-animation-duration: 600ms;\n                animation-duration: 600ms;\n    }.animation-delay-700 {\n        -webkit-animation-delay: 700ms;\n                animation-delay: 700ms;\n    }.animation-duration-700 {\n        -webkit-animation-duration: 700ms;\n                animation-duration: 700ms;\n    }.animation-delay-800 {\n        -webkit-animation-delay: 800ms;\n                animation-delay: 800ms;\n    }.animation-duration-800 {\n        -webkit-animation-duration: 800ms;\n                animation-duration: 800ms;\n    }.animation-delay-900 {\n        -webkit-animation-delay: 900ms;\n                animation-delay: 900ms;\n    }.animation-duration-900 {\n        -webkit-animation-duration: 900ms;\n                animation-duration: 900ms;\n    }.animation-delay-1000 {\n        -webkit-animation-delay: 1000ms;\n                animation-delay: 1000ms;\n    }.animation-duration-1000 {\n        -webkit-animation-duration: 1000ms;\n                animation-duration: 1000ms;\n    }.animation-delay-1100 {\n        -webkit-animation-delay: 1100ms;\n                animation-delay: 1100ms;\n    }.animation-duration-1100 {\n        -webkit-animation-duration: 1100ms;\n                animation-duration: 1100ms;\n    }.animation-delay-1200 {\n        -webkit-animation-delay: 1200ms;\n                animation-delay: 1200ms;\n    }.animation-duration-1200 {\n        -webkit-animation-duration: 1200ms;\n                animation-duration: 1200ms;\n    }.animation-delay-1300 {\n        -webkit-animation-delay: 1300ms;\n                animation-delay: 1300ms;\n    }.animation-duration-1300 {\n        -webkit-animation-duration: 1300ms;\n                animation-duration: 1300ms;\n    }.animation-delay-1400 {\n        -webkit-animation-delay: 1400ms;\n                animation-delay: 1400ms;\n    }.animation-duration-1400 {\n        -webkit-animation-duration: 1400ms;\n                animation-duration: 1400ms;\n    }.animation-delay-1500 {\n        -webkit-animation-delay: 1500ms;\n                animation-delay: 1500ms;\n    }.animation-duration-1500 {\n        -webkit-animation-duration: 1500ms;\n                animation-duration: 1500ms;\n    }.animation-delay-1600 {\n        -webkit-animation-delay: 1600ms;\n                animation-delay: 1600ms;\n    }.animation-duration-1600 {\n        -webkit-animation-duration: 1600ms;\n                animation-duration: 1600ms;\n    }.animation-delay-1700 {\n        -webkit-animation-delay: 1700ms;\n                animation-delay: 1700ms;\n    }.animation-duration-1700 {\n        -webkit-animation-duration: 1700ms;\n                animation-duration: 1700ms;\n    }.animation-delay-1800 {\n        -webkit-animation-delay: 1800ms;\n                animation-delay: 1800ms;\n    }.animation-duration-1800 {\n        -webkit-animation-duration: 1800ms;\n                animation-duration: 1800ms;\n    }.animation-delay-1900 {\n        -webkit-animation-delay: 1900ms;\n                animation-delay: 1900ms;\n    }.animation-duration-1900 {\n        -webkit-animation-duration: 1900ms;\n                animation-duration: 1900ms;\n    }.animation-delay-2000 {\n        -webkit-animation-delay: 2000ms;\n                animation-delay: 2000ms;\n    }.animation-duration-2000 {\n        -webkit-animation-duration: 2000ms;\n                animation-duration: 2000ms;\n    }.animation-delay-2100 {\n        -webkit-animation-delay: 2100ms;\n                animation-delay: 2100ms;\n    }.animation-duration-2100 {\n        -webkit-animation-duration: 2100ms;\n                animation-duration: 2100ms;\n    }.animation-delay-2200 {\n        -webkit-animation-delay: 2200ms;\n                animation-delay: 2200ms;\n    }.animation-duration-2200 {\n        -webkit-animation-duration: 2200ms;\n                animation-duration: 2200ms;\n    }.animation-delay-2300 {\n        -webkit-animation-delay: 2300ms;\n                animation-delay: 2300ms;\n    }.animation-duration-2300 {\n        -webkit-animation-duration: 2300ms;\n                animation-duration: 2300ms;\n    }.animation-delay-2400 {\n        -webkit-animation-delay: 2400ms;\n                animation-delay: 2400ms;\n    }.animation-duration-2400 {\n        -webkit-animation-duration: 2400ms;\n                animation-duration: 2400ms;\n    }.animation-delay-2500 {\n        -webkit-animation-delay: 2500ms;\n                animation-delay: 2500ms;\n    }.animation-duration-2500 {\n        -webkit-animation-duration: 2500ms;\n                animation-duration: 2500ms;\n    }.animation-delay-2600 {\n        -webkit-animation-delay: 2600ms;\n                animation-delay: 2600ms;\n    }.animation-duration-2600 {\n        -webkit-animation-duration: 2600ms;\n                animation-duration: 2600ms;\n    }.animation-delay-2700 {\n        -webkit-animation-delay: 2700ms;\n                animation-delay: 2700ms;\n    }.animation-duration-2700 {\n        -webkit-animation-duration: 2700ms;\n                animation-duration: 2700ms;\n    }.animation-delay-2800 {\n        -webkit-animation-delay: 2800ms;\n                animation-delay: 2800ms;\n    }.animation-duration-2800 {\n        -webkit-animation-duration: 2800ms;\n                animation-duration: 2800ms;\n    }.animation-delay-2900 {\n        -webkit-animation-delay: 2900ms;\n                animation-delay: 2900ms;\n    }.animation-duration-2900 {\n        -webkit-animation-duration: 2900ms;\n                animation-duration: 2900ms;\n    }.animation-delay-3000 {\n        -webkit-animation-delay: 3000ms;\n                animation-delay: 3000ms;\n    }.animation-duration-3000 {\n        -webkit-animation-duration: 3000ms;\n                animation-duration: 3000ms;\n    }@-webkit-keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}@keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}body {\n    \n}h1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}h1, h2, h3, h4, h5, h6 {\n    line-height: 1.8;\n    font-family: 'Open Sans', Helvetica, serif;\n    font-weight: 700;\n}p {\n    line-height: 1.6;\n    font-family: 'Open Sans', Helvetica, sans-serif;\n}* {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n}body {    \n    padding: 0;\n    margin: 0\n}body.preload * {\n    -webkit-transition: none !important;\n    transition: none !important;\n}hr {\n    margin: 3em 0;\n    border-color: white;\n}.Banner {\n    position: relative;\n    overflow: hidden;\n    border-radius: 3px;\n    -webkit-box-shadow: 0px 15px 10px -7px rgba(0,0,0,0.3);\n            box-shadow: 0px 15px 10px -7px rgba(0,0,0,0.3);\n    margin: 0 -1em;\n}.Banner__image {\n        width: 100%;\n        margin-bottom: -3em;\n    }.Banner__screen {\n        position: absolute;\n        display: inline-block;\n        bottom: 0;\n        left: 0;\n        min-width: 40%;\n        width: 90%;\n        background: linear-gradient(40deg, #000000 50%, #000000 70%,  #000000);\n        background: linear-gradient(40deg, rgba(0,0,0,.6) 50%, rgba(0,0,0,.1) 70%,  rgba(0,0,0,0));\n        color: white;\n        padding: 1em;\n\n    }.Body {\n    background: #DDD;\n    padding: 50px 5vw;\n    min-height: 100vh;\n    max-width: 1440px;\n    margin: 0 auto;\n    -webkit-transition: background 200ms ease-in-out;\n    transition: background 200ms ease-in-out;\n}.Body--dark-mode {\n        background: white;\n    }.Content {\n    background: white;\n    border-radius: 0 0 3px 3px;\n    z-index: 100;\n}.Content--padding {\n        padding: 4em 2em;\n    }.Header {\n    max-width: 1440px;\n    margin: 0 auto;\n    position: -webkit-sticky;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n    background: #DDD;\n\n}.Header--is-sticky {\n        -webkit-transition: opacity 200ms 100ms ease-in-out;\n        transition: opacity 200ms 100ms ease-in-out;\n        opacity: 0\n    }.Header--is-sticky:hover {\n    opacity: 1;\n}.Hero {\n    -webkit-transition: font 200ms ease-in-out;\n    transition: font 200ms ease-in-out;\n    font-size: 3em;\n    margin: 0 0 .2em 0;\n}.Image--aside {\n        margin: 0 4em 0 -4em;\n        position: -webkit-sticky;\n        position: sticky;\n        top: 1em;\n    }.Logo {\n    display: inline-block;\n}.Main {\n    max-width: 1440px;\n    margin: 0 auto;\n}.Wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}.Wrapper--space-between {\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }.Wrapper .Wrapper__item--last {\n        margin-left: auto;\n        margin-right: 0;\n    }.Wrapper .col-1 {\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n        }.Wrapper .col-2 {\n            -webkit-box-flex: 2;\n                -ms-flex: 2;\n                    flex: 2;\n        }.Wrapper .col-3 {\n            -webkit-box-flex: 3;\n                -ms-flex: 3;\n                    flex: 3;\n        }.Wrapper .col-4 {\n            -webkit-box-flex: 4;\n                -ms-flex: 4;\n                    flex: 4;\n        }.Wrapper .col-5 {\n            -webkit-box-flex: 5;\n                -ms-flex: 5;\n                    flex: 5;\n        }.Wrapper .col-6 {\n            -webkit-box-flex: 6;\n                -ms-flex: 6;\n                    flex: 6;\n        }.Wrapper .col-7 {\n            -webkit-box-flex: 7;\n                -ms-flex: 7;\n                    flex: 7;\n        }.Wrapper .col-8 {\n            -webkit-box-flex: 8;\n                -ms-flex: 8;\n                    flex: 8;\n        }.Wrapper .col-9 {\n            -webkit-box-flex: 9;\n                -ms-flex: 9;\n                    flex: 9;\n        }.Wrapper .col-10 {\n            -webkit-box-flex: 10;\n                -ms-flex: 10;\n                    flex: 10;\n        }.Wrapper .col-11 {\n            -webkit-box-flex: 11;\n                -ms-flex: 11;\n                    flex: 11;\n        }.Wrapper .col-12 {\n            -webkit-box-flex: 12;\n                -ms-flex: 12;\n                    flex: 12;\n        }@media (max-width: 425px) {.Wrapper {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }.Wrapper .Wrapper__item--last {\n            margin-left: 0;\n            margin-right: 0;\n    }\n}.Card {\n    background: white;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 2px black solid;\n    -webkit-box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n            box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n    // padding: 1em;\n    margin: 1em;\n}.Card__header {\n        padding: 0 .5em;\n        border-bottom: 2px black solid;\n        text-align: center;\n    }.Card__icon {\n            height: 100px;\n            width: 100px;\n            margin: 0 auto;\n            display: block;\n            margin: -3em auto;\n            padding: 0 0 3em 0;\n        }.Card__body {\n        padding: 1em;\n    }.Card--with-icon {\n        overflow:visible;\n\n\n    }.Tab {\n    display: inline-block;\n    overflow: hidden;\n    border-radius: 3px 3px 0 0;\n    background: #CCC;\n    z-index: 0;\n    margin-right: .25em;\n    font-family: 'Open Sans', san-serif\n}.Tab:hover {\n    background: #BBB;\n}.Tab--active {\n        background: white;\n}.Tab--active:hover {\n    background: white;\n}.Tab a {\n        text-decoration: none;\n        padding: 1em 1em .25em 1em;\n        line-height: 2;\n        font-weight: 600;\n        color: black;\n}.Tab a:visited {\n    color: inherit;\n}\n\n\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTk2ZDYzZDI2ZGM1YjJmY2ZlNDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/NGMzOSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7QUNwQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTtBQUNBLHdHQUF5Rzs7QUFFekc7QUFDQSxvQ0FBcUMsOERBQThELDhEQUE4RCxHQUFHLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLDZCQUE2QixVQUFVLHFCQUFxQiw4Q0FBOEMsOENBQThDLE9BQU8sWUFBWSxxQkFBcUIsNkNBQTZDLDZDQUE2QyxPQUFPLEdBQUcscUJBQXFCLFVBQVUscUJBQXFCLDhDQUE4Qyw4Q0FBOEMsT0FBTyxZQUFZLHFCQUFxQiw2Q0FBNkMsNkNBQTZDLE9BQU8sR0FBRyxNQUFNLFNBQVMsMkJBQTJCLGdCQUFnQixHQUFHLHdCQUF3Qix1QkFBdUIsaURBQWlELHVCQUF1QixHQUFHLEdBQUcsdUJBQXVCLHNEQUFzRCxHQUFHLEdBQUcsc0NBQXNDLHNDQUFzQyxHQUFHLE1BQU0scUJBQXFCLGtCQUFrQixnQkFBZ0IsMENBQTBDLGtDQUFrQyxHQUFHLElBQUksb0JBQW9CLDBCQUEwQixHQUFHLFNBQVMseUJBQXlCLHVCQUF1Qix5QkFBeUIsNkRBQTZELDZEQUE2RCxxQkFBcUIsR0FBRyxnQkFBZ0Isc0JBQXNCLDhCQUE4QixPQUFPLGlCQUFpQiw2QkFBNkIsZ0NBQWdDLG9CQUFvQixrQkFBa0IseUJBQXlCLHFCQUFxQixpRkFBaUYscUdBQXFHLHVCQUF1Qix1QkFBdUIsU0FBUyxPQUFPLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixxQkFBcUIsdURBQXVELCtDQUErQyxHQUFHLGtCQUFrQiw0QkFBNEIsT0FBTyxVQUFVLHdCQUF3QixpQ0FBaUMsbUJBQW1CLEdBQUcsbUJBQW1CLDJCQUEyQixPQUFPLFNBQVMsd0JBQXdCLHFCQUFxQiwrQkFBK0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEtBQUssb0JBQW9CLDhEQUE4RCxzREFBc0QsMkJBQTJCLDBCQUEwQixpQkFBaUIsR0FBRyxPQUFPLGlEQUFpRCx5Q0FBeUMscUJBQXFCLHlCQUF5QixHQUFHLGVBQWUsK0JBQStCLG1DQUFtQywyQkFBMkIsbUJBQW1CLE9BQU8sT0FBTyw0QkFBNEIsR0FBRyxPQUFPLHdCQUF3QixxQkFBcUIsR0FBRyxVQUFVLDJCQUEyQiwyQkFBMkIsb0JBQW9CLEdBQUcseUJBQXlCLG9DQUFvQyxxQ0FBcUMsaURBQWlELE9BQU8sK0JBQStCLDRCQUE0QiwwQkFBMEIsT0FBTyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxpQkFBaUIsa0NBQWtDLDhCQUE4Qiw4QkFBOEIsV0FBVyxrQkFBa0IsbUNBQW1DLCtCQUErQiwrQkFBK0IsV0FBVyxrQkFBa0IsbUNBQW1DLCtCQUErQiwrQkFBK0IsV0FBVyxrQkFBa0IsbUNBQW1DLCtCQUErQiwrQkFBK0IsV0FBVywyQkFBMkIsVUFBVSx1Q0FBdUMsd0NBQXdDLHlDQUF5Qyx5Q0FBeUMsT0FBTywrQkFBK0IsNkJBQTZCLDhCQUE4QixPQUFPLEdBQUcsT0FBTyx3QkFBd0IseUJBQXlCLHVCQUF1Qiw4QkFBOEIsNERBQTRELDREQUE0RCxzQkFBc0Isa0JBQWtCLEdBQUcsZUFBZSwwQkFBMEIseUNBQXlDLDZCQUE2QixPQUFPLGFBQWEsNEJBQTRCLDJCQUEyQiw2QkFBNkIsNkJBQTZCLGdDQUFnQyxpQ0FBaUMsV0FBVyxhQUFhLHVCQUF1QixPQUFPLGtCQUFrQiwyQkFBMkIsV0FBVyxNQUFNLDRCQUE0Qix1QkFBdUIsaUNBQWlDLHVCQUF1QixpQkFBaUIsMEJBQTBCLDRDQUE0QyxZQUFZLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLFFBQVEsZ0NBQWdDLHFDQUFxQyx5QkFBeUIsMkJBQTJCLHVCQUF1QixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRzs7QUFFdnVhOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU5NmQ2M2QyNmRjNWIyZmNmZTQ3IiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncHJlbG9hZCcpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSGVhZGVyJyk7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQm9keScpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgaGVhZGVyQm91bmRhcmllcyA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAoaGVhZGVyQm91bmRhcmllcy50b3AgPT09IC0xKXtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdIZWFkZXItLWlzLXN0aWNreScpO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdCb2R5LS1kYXJrLW1vZGUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ0hlYWRlci0taXMtc3RpY2t5Jyk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ0JvZHktLWRhcmstbW9kZScpO1xuICAgICAgICB9XG4gICAgfSlcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwLDgwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGUtdXAge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtdXAgMjAwbXMgYmFja3dhcmRzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtdXAgMjAwbXMgYmFja3dhcmRzIGVhc2UtaW4tb3V0O1xcbn0uYW5pbWF0aW9uLWRlbGF5LTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNjAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNzAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNzAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogODAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogOTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTEwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTEwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTExMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDExMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTExMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDExMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTEyMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTEyMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTEzMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTEzMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE0MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE0MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE1MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE1MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE2MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE2MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE3MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE3MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE4MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE4MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTE5MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTE5MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTIwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTIwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTIxMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTIxMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTIyMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTIyMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTIzMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTIzMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI0MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI0MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI1MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI1MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI2MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI2MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNjAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI3MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI3MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNzAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI4MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI4MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyODAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTI5MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDI5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTI5MDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDI5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyOTAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWRlbGF5LTMwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzMDAwbXM7XFxuICAgIH0uYW5pbWF0aW9uLWR1cmF0aW9uLTMwMDAge1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDMwMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDAwbXM7XFxuICAgIH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIH1cXG59Ym9keSB7XFxuICAgIFxcbn1oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufSoge1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1ib2R5IHsgICAgXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMFxcbn1ib2R5LnByZWxvYWQgKiB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufWhyIHtcXG4gICAgbWFyZ2luOiAzZW0gMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59LkJhbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTdweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtN3B4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgbWFyZ2luOiAwIC0xZW07XFxufS5CYW5uZXJfX2ltYWdlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTNlbTtcXG4gICAgfS5CYW5uZXJfX3NjcmVlbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgbWluLXdpZHRoOiA0MCU7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMDAwMDAwIDUwJSwgIzAwMDAwMCA3MCUsICAjMDAwMDAwKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgwLDAsMCwuNikgNTAlLCByZ2JhKDAsMCwwLC4xKSA3MCUsICByZ2JhKDAsMCwwLDApKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG5cXG4gICAgfS5Cb2R5IHtcXG4gICAgYmFja2dyb3VuZDogI0RERDtcXG4gICAgcGFkZGluZzogNTBweCA1dnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcyBlYXNlLWluLW91dDtcXG59LkJvZHktLWRhcmstbW9kZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgfS5Db250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgICB6LWluZGV4OiAxMDA7XFxufS5Db250ZW50LS1wYWRkaW5nIHtcXG4gICAgICAgIHBhZGRpbmc6IDRlbSAyZW07XFxuICAgIH0uSGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogLTFweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZDogI0RERDtcXG5cXG59LkhlYWRlci0taXMtc3RpY2t5IHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBvcGFjaXR5OiAwXFxuICAgIH0uSGVhZGVyLS1pcy1zdGlja3k6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn0uSGVybyB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogZm9udCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIG1hcmdpbjogMCAwIC4yZW0gMDtcXG59LkltYWdlLS1hc2lkZSB7XFxuICAgICAgICBtYXJnaW46IDAgNGVtIDAgLTRlbTtcXG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDFlbTtcXG4gICAgfS5Mb2dvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn0uTWFpbiB7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59LldyYXBwZXIge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufS5XcmFwcGVyLS1zcGFjZS1iZXR3ZWVuIHtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9LldyYXBwZXIgLldyYXBwZXJfX2l0ZW0tLWxhc3Qge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH0uV3JhcHBlciAuY29sLTEge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTIge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAyO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMjtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTMge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDM7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAzO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMztcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTQge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDQ7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA0O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNDtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTUge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDU7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA1O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTYge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDY7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA2O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNjtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTcge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDc7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA3O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogNztcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTgge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDg7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogODtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTkge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDk7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiA5O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogOTtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTEwIHtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxMDtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDEwO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTA7XFxuICAgICAgICB9LldyYXBwZXIgLmNvbC0xMSB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTE7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAxMTtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDExO1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtMTIge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEyO1xcbiAgICAgICAgICAgICAgICAtbXMtZmxleDogMTI7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMjtcXG4gICAgICAgIH1AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHsuV3JhcHBlciB7XFxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH0uV3JhcHBlciAuV3JhcHBlcl9faXRlbS0tbGFzdCB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICB9XFxufS5DYXJkIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAtN3B4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgLy8gcGFkZGluZzogMWVtO1xcbiAgICBtYXJnaW46IDFlbTtcXG59LkNhcmRfX2hlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH0uQ2FyZF9faWNvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWFyZ2luOiAtM2VtIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDNlbSAwO1xcbiAgICAgICAgfS5DYXJkX19ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgfS5DYXJkLS13aXRoLWljb24ge1xcbiAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcXG5cXG5cXG4gICAgfS5UYWIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbi1zZXJpZlxcbn0uVGFiOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0JCQjtcXG59LlRhYi0tYWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn0uVGFiLS1hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59LlRhYiBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gLjI1ZW0gMWVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbn0uVGFiIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIhLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
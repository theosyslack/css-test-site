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
exports.push([module.i, ".slide-up {\n    -webkit-animation: slide-up 200ms backwards ease-in-out;\n            animation: slide-up 200ms backwards ease-in-out;\n}.animation-delay-100 {\n        -webkit-animation-delay: 100ms;\n                animation-delay: 100ms;\n    }.animation-duration-100 {\n        -webkit-animation-duration: 100ms;\n                animation-duration: 100ms;\n    }.animation-delay-200 {\n        -webkit-animation-delay: 200ms;\n                animation-delay: 200ms;\n    }.animation-duration-200 {\n        -webkit-animation-duration: 200ms;\n                animation-duration: 200ms;\n    }.animation-delay-300 {\n        -webkit-animation-delay: 300ms;\n                animation-delay: 300ms;\n    }.animation-duration-300 {\n        -webkit-animation-duration: 300ms;\n                animation-duration: 300ms;\n    }.animation-delay-400 {\n        -webkit-animation-delay: 400ms;\n                animation-delay: 400ms;\n    }.animation-duration-400 {\n        -webkit-animation-duration: 400ms;\n                animation-duration: 400ms;\n    }.animation-delay-500 {\n        -webkit-animation-delay: 500ms;\n                animation-delay: 500ms;\n    }.animation-duration-500 {\n        -webkit-animation-duration: 500ms;\n                animation-duration: 500ms;\n    }.animation-delay-600 {\n        -webkit-animation-delay: 600ms;\n                animation-delay: 600ms;\n    }.animation-duration-600 {\n        -webkit-animation-duration: 600ms;\n                animation-duration: 600ms;\n    }.animation-delay-700 {\n        -webkit-animation-delay: 700ms;\n                animation-delay: 700ms;\n    }.animation-duration-700 {\n        -webkit-animation-duration: 700ms;\n                animation-duration: 700ms;\n    }.animation-delay-800 {\n        -webkit-animation-delay: 800ms;\n                animation-delay: 800ms;\n    }.animation-duration-800 {\n        -webkit-animation-duration: 800ms;\n                animation-duration: 800ms;\n    }.animation-delay-900 {\n        -webkit-animation-delay: 900ms;\n                animation-delay: 900ms;\n    }.animation-duration-900 {\n        -webkit-animation-duration: 900ms;\n                animation-duration: 900ms;\n    }.animation-delay-1000 {\n        -webkit-animation-delay: 1000ms;\n                animation-delay: 1000ms;\n    }.animation-duration-1000 {\n        -webkit-animation-duration: 1000ms;\n                animation-duration: 1000ms;\n    }.animation-delay-1100 {\n        -webkit-animation-delay: 1100ms;\n                animation-delay: 1100ms;\n    }.animation-duration-1100 {\n        -webkit-animation-duration: 1100ms;\n                animation-duration: 1100ms;\n    }.animation-delay-1200 {\n        -webkit-animation-delay: 1200ms;\n                animation-delay: 1200ms;\n    }.animation-duration-1200 {\n        -webkit-animation-duration: 1200ms;\n                animation-duration: 1200ms;\n    }.animation-delay-1300 {\n        -webkit-animation-delay: 1300ms;\n                animation-delay: 1300ms;\n    }.animation-duration-1300 {\n        -webkit-animation-duration: 1300ms;\n                animation-duration: 1300ms;\n    }.animation-delay-1400 {\n        -webkit-animation-delay: 1400ms;\n                animation-delay: 1400ms;\n    }.animation-duration-1400 {\n        -webkit-animation-duration: 1400ms;\n                animation-duration: 1400ms;\n    }.animation-delay-1500 {\n        -webkit-animation-delay: 1500ms;\n                animation-delay: 1500ms;\n    }.animation-duration-1500 {\n        -webkit-animation-duration: 1500ms;\n                animation-duration: 1500ms;\n    }.animation-delay-1600 {\n        -webkit-animation-delay: 1600ms;\n                animation-delay: 1600ms;\n    }.animation-duration-1600 {\n        -webkit-animation-duration: 1600ms;\n                animation-duration: 1600ms;\n    }.animation-delay-1700 {\n        -webkit-animation-delay: 1700ms;\n                animation-delay: 1700ms;\n    }.animation-duration-1700 {\n        -webkit-animation-duration: 1700ms;\n                animation-duration: 1700ms;\n    }.animation-delay-1800 {\n        -webkit-animation-delay: 1800ms;\n                animation-delay: 1800ms;\n    }.animation-duration-1800 {\n        -webkit-animation-duration: 1800ms;\n                animation-duration: 1800ms;\n    }.animation-delay-1900 {\n        -webkit-animation-delay: 1900ms;\n                animation-delay: 1900ms;\n    }.animation-duration-1900 {\n        -webkit-animation-duration: 1900ms;\n                animation-duration: 1900ms;\n    }.animation-delay-2000 {\n        -webkit-animation-delay: 2000ms;\n                animation-delay: 2000ms;\n    }.animation-duration-2000 {\n        -webkit-animation-duration: 2000ms;\n                animation-duration: 2000ms;\n    }.animation-delay-2100 {\n        -webkit-animation-delay: 2100ms;\n                animation-delay: 2100ms;\n    }.animation-duration-2100 {\n        -webkit-animation-duration: 2100ms;\n                animation-duration: 2100ms;\n    }.animation-delay-2200 {\n        -webkit-animation-delay: 2200ms;\n                animation-delay: 2200ms;\n    }.animation-duration-2200 {\n        -webkit-animation-duration: 2200ms;\n                animation-duration: 2200ms;\n    }.animation-delay-2300 {\n        -webkit-animation-delay: 2300ms;\n                animation-delay: 2300ms;\n    }.animation-duration-2300 {\n        -webkit-animation-duration: 2300ms;\n                animation-duration: 2300ms;\n    }.animation-delay-2400 {\n        -webkit-animation-delay: 2400ms;\n                animation-delay: 2400ms;\n    }.animation-duration-2400 {\n        -webkit-animation-duration: 2400ms;\n                animation-duration: 2400ms;\n    }.animation-delay-2500 {\n        -webkit-animation-delay: 2500ms;\n                animation-delay: 2500ms;\n    }.animation-duration-2500 {\n        -webkit-animation-duration: 2500ms;\n                animation-duration: 2500ms;\n    }.animation-delay-2600 {\n        -webkit-animation-delay: 2600ms;\n                animation-delay: 2600ms;\n    }.animation-duration-2600 {\n        -webkit-animation-duration: 2600ms;\n                animation-duration: 2600ms;\n    }.animation-delay-2700 {\n        -webkit-animation-delay: 2700ms;\n                animation-delay: 2700ms;\n    }.animation-duration-2700 {\n        -webkit-animation-duration: 2700ms;\n                animation-duration: 2700ms;\n    }.animation-delay-2800 {\n        -webkit-animation-delay: 2800ms;\n                animation-delay: 2800ms;\n    }.animation-duration-2800 {\n        -webkit-animation-duration: 2800ms;\n                animation-duration: 2800ms;\n    }.animation-delay-2900 {\n        -webkit-animation-delay: 2900ms;\n                animation-delay: 2900ms;\n    }.animation-duration-2900 {\n        -webkit-animation-duration: 2900ms;\n                animation-duration: 2900ms;\n    }.animation-delay-3000 {\n        -webkit-animation-delay: 3000ms;\n                animation-delay: 3000ms;\n    }.animation-duration-3000 {\n        -webkit-animation-duration: 3000ms;\n                animation-duration: 3000ms;\n    }@-webkit-keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}@keyframes slide-up {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(50px);\n                transform: translateY(50px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}body {\n    \n}h1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}h1, h2, h3, h4, h5, h6 {\n    line-height: 1.8;\n    font-family: 'Open Sans', Helvetica, serif;\n    font-weight: 700;\n}p {\n    line-height: 1.6;\n    font-family: 'Open Sans', Helvetica, sans-serif;\n}* {\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n}body {    \n    padding: 0;\n    margin: 0\n}body.preload * {\n    -webkit-transition: none !important;\n    transition: none !important;\n}hr {\n    margin: 3em 0;\n    border-color: white;\n}.Banner {\n    position: relative;\n    overflow: hidden;\n    border-radius: 3px;\n    -webkit-box-shadow: 0px 15px 10px -7px rgba(0,0,0,0.3);\n            box-shadow: 0px 15px 10px -7px rgba(0,0,0,0.3);\n    margin: 0 -1em;\n}.Banner__image {\n        width: 100%;\n        margin-bottom: -3em;\n    }.Banner__screen {\n        position: absolute;\n        display: inline-block;\n        bottom: 0;\n        left: 0;\n        min-width: 40%;\n        width: 90%;\n        background: linear-gradient(40deg, #000000 50%, #000000 70%,  #000000);\n        background: linear-gradient(40deg, rgba(0,0,0,.6) 50%, rgba(0,0,0,.1) 70%,  rgba(0,0,0,0));\n        color: white;\n        padding: 1em;\n\n    }.Body {\n    background: #49a2d7;\n    padding: 50px 5vw;\n    min-height: 100vh;\n    max-width: 1440px;\n    margin: 0 auto;\n    -webkit-transition: background 200ms ease-in-out;\n    transition: background 200ms ease-in-out;\n}.Body--dark-mode {\n        background: white;\n    }.Content {\n    background: white;\n    border-radius: 0 0 3px 3px;\n    z-index: 100;\n}.Content--padding {\n        padding: 4em 2em;\n    }.Header {\n    max-width: 1440px;\n    margin: 0 auto;\n    position: -webkit-sticky;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n\n}.Header--is-sticky {\n        -webkit-transition: opacity 200ms 100ms ease-in-out;\n        transition: opacity 200ms 100ms ease-in-out;\n        background: white;\n        -webkit-box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n                box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n        \n        opacity: .05\n    }.Header--is-sticky:hover {\n    opacity: 1;\n}.Hero {\n    -webkit-transition: font 200ms ease-in-out;\n    transition: font 200ms ease-in-out;\n    font-size: 3em;\n    color: white;\n    margin: 0 0 .2em 0;\n}.Image--aside {\n        margin: 0 4em 0 -4em;\n        position: -webkit-sticky;\n        position: sticky;\n        top: 3em;\n    }.Logo {\n    display: inline-block;\n}.Main {\n    max-width: 1440px;\n    margin: 0 auto;\n}.Wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}.Wrapper--space-between {\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n    }.Wrapper--allow-wrap {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    }.Wrapper .Wrapper__item--last {\n        margin-left: auto;\n        margin-right: 0;\n    }.Wrapper .col-1 {\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n        }.Wrapper .col-2 {\n            -webkit-box-flex: 2;\n                -ms-flex: 2;\n                    flex: 2;\n        }.Wrapper .col-3 {\n            -webkit-box-flex: 3;\n                -ms-flex: 3;\n                    flex: 3;\n        }.Wrapper .col-4 {\n            -webkit-box-flex: 4;\n                -ms-flex: 4;\n                    flex: 4;\n        }.Wrapper .col-5 {\n            -webkit-box-flex: 5;\n                -ms-flex: 5;\n                    flex: 5;\n        }.Wrapper .col-6 {\n            -webkit-box-flex: 6;\n                -ms-flex: 6;\n                    flex: 6;\n        }.Wrapper .col-7 {\n            -webkit-box-flex: 7;\n                -ms-flex: 7;\n                    flex: 7;\n        }.Wrapper .col-8 {\n            -webkit-box-flex: 8;\n                -ms-flex: 8;\n                    flex: 8;\n        }.Wrapper .col-9 {\n            -webkit-box-flex: 9;\n                -ms-flex: 9;\n                    flex: 9;\n        }.Wrapper .col-10 {\n            -webkit-box-flex: 10;\n                -ms-flex: 10;\n                    flex: 10;\n        }.Wrapper .col-11 {\n            -webkit-box-flex: 11;\n                -ms-flex: 11;\n                    flex: 11;\n        }.Wrapper .col-12 {\n            -webkit-box-flex: 12;\n                -ms-flex: 12;\n                    flex: 12;\n        }@media (max-width: 425px) {.Wrapper {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }.Wrapper .Wrapper__item--last {\n            margin-left: 0;\n            margin-right: 0;\n    }\n}.Card {\n    background: white;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 2px black solid;\n    -webkit-box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n            box-shadow: 0px 7px 10px -7px rgba(0,0,0,0.3);\n    // padding: 1em;\n    min-width: 200px;\n    margin: 1em;\n}.Card__header {\n        padding: 0 .5em;\n        border-bottom: 2px black solid;\n        text-align: center;\n    }.Card__icon {\n            height: 100px;\n            width: 100px;\n            margin: 0 auto;\n            display: block;\n            margin: -3em auto;\n            padding: 0 0 3em 0;\n        }.Card__body {\n        padding: 1em;\n    }.Card--with-icon {\n        overflow:visible;\n\n\n    }.Tab {\n    display: inline-block;\n    overflow: hidden;\n    border-radius: 3px 3px 0 0;\n    background: #CCC;\n    z-index: 0;\n    margin-right: .25em;\n    font-family: 'Open Sans', san-serif\n}.Tab:hover {\n    background: #BBB;\n}.Tab--active {\n        background: white;\n}.Tab--active:hover {\n    background: white;\n}.Tab a {\n        text-decoration: none;\n        padding: 1em 1em .25em 1em;\n        line-height: 2;\n        font-weight: 600;\n        color: black;\n}.Tab a:visited {\n    color: inherit;\n}\n\n\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTExNmUwN2FjNWU0ZWE1Y2FjMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5jc3M/NGMzOSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7QUNwQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTtBQUNBLHdHQUF5Rzs7QUFFekc7QUFDQSxvQ0FBcUMsOERBQThELDhEQUE4RCxHQUFHLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHNCQUFzQix5Q0FBeUMseUNBQXlDLE9BQU8seUJBQXlCLDRDQUE0Qyw0Q0FBNEMsT0FBTyxzQkFBc0IseUNBQXlDLHlDQUF5QyxPQUFPLHlCQUF5Qiw0Q0FBNEMsNENBQTRDLE9BQU8sc0JBQXNCLHlDQUF5Qyx5Q0FBeUMsT0FBTyx5QkFBeUIsNENBQTRDLDRDQUE0QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLHVCQUF1QiwwQ0FBMEMsMENBQTBDLE9BQU8sMEJBQTBCLDZDQUE2Qyw2Q0FBNkMsT0FBTyx1QkFBdUIsMENBQTBDLDBDQUEwQyxPQUFPLDBCQUEwQiw2Q0FBNkMsNkNBQTZDLE9BQU8sdUJBQXVCLDBDQUEwQywwQ0FBMEMsT0FBTywwQkFBMEIsNkNBQTZDLDZDQUE2QyxPQUFPLDZCQUE2QixVQUFVLHFCQUFxQiw4Q0FBOEMsOENBQThDLE9BQU8sWUFBWSxxQkFBcUIsNkNBQTZDLDZDQUE2QyxPQUFPLEdBQUcscUJBQXFCLFVBQVUscUJBQXFCLDhDQUE4Qyw4Q0FBOEMsT0FBTyxZQUFZLHFCQUFxQiw2Q0FBNkMsNkNB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTExNmUwN2FjNWU0ZWE1Y2FjMDYiLCJpbXBvcnQgJy4vY3NzL21haW4uY3NzJztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJyk7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5IZWFkZXInKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Cb2R5Jyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGxldCBoZWFkZXJCb3VuZGFyaWVzID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChoZWFkZXJCb3VuZGFyaWVzLnRvcCA9PT0gLTEpe1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0hlYWRlci0taXMtc3RpY2t5Jyk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ0JvZHktLWRhcmstbW9kZScpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnSGVhZGVyLS1pcy1zdGlja3knKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnQm9keS0tZGFyay1tb2RlJyk7XG4gICAgICAgIH1cbiAgICB9KVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDAsODAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZS11cCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS11cCAyMDBtcyBiYWNrd2FyZHMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS11cCAyMDBtcyBiYWNrd2FyZHMgZWFzZS1pbi1vdXQ7XFxufS5hbmltYXRpb24tZGVsYXktMTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNDAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNDAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNjAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktNzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tNzAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktODAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tODAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktOTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tOTAwIHtcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDExMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDExMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDE5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMTkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjEwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjEwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIxMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjIwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjIwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIyMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjMwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjMwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIzMDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjQwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjQwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI0MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjUwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjUwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI1MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjYwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjYwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI2MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjcwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjcwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI3MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjgwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjgwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI4MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMjkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDI5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMjkwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMjkwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDI5MDBtcztcXG4gICAgfS5hbmltYXRpb24tZGVsYXktMzAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMwMDBtcztcXG4gICAgfS5hbmltYXRpb24tZHVyYXRpb24tMzAwMCB7XFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMzAwMG1zO1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMDBtcztcXG4gICAgfUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS11cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxufUBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbn1ib2R5IHtcXG4gICAgXFxufWgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufWgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBsaW5lLWhlaWdodDogMS44O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEhlbHZldGljYSwgc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufXAge1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59KiB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufWJvZHkgeyAgICBcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwXFxufWJvZHkucHJlbG9hZCAqIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59aHIge1xcbiAgICBtYXJnaW46IDNlbSAwO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn0uQmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtN3B4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICBtYXJnaW46IDAgLTFlbTtcXG59LkJhbm5lcl9faW1hZ2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtM2VtO1xcbiAgICB9LkJhbm5lcl9fc2NyZWVuIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMwMDAwMDAgNTAlLCAjMDAwMDAwIDcwJSwgICMwMDAwMDApO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDAsMCwwLC42KSA1MCUsIHJnYmEoMCwwLDAsLjEpIDcwJSwgIHJnYmEoMCwwLDAsMCkpO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcblxcbiAgICB9LkJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDlhMmQ3O1xcbiAgICBwYWRkaW5nOiA1MHB4IDV2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn0uQm9keS0tZGFyay1tb2RlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB9LkNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59LkNvbnRlbnQtLXBhZGRpbmcge1xcbiAgICAgICAgcGFkZGluZzogNGVtIDJlbTtcXG4gICAgfS5IZWFkZXIge1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAtMXB4O1xcbiAgICB6LWluZGV4OiAyO1xcblxcbn0uSGVhZGVyLS1pcy1zdGlja3kge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDEwcHggLTdweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAtN3B4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgICAgIFxcbiAgICAgICAgb3BhY2l0eTogLjA1XFxuICAgIH0uSGVhZGVyLS1pcy1zdGlja3k6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn0uSGVybyB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogZm9udCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwIDAgLjJlbSAwO1xcbn0uSW1hZ2UtLWFzaWRlIHtcXG4gICAgICAgIG1hcmdpbjogMCA0ZW0gMCAtNGVtO1xcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogM2VtO1xcbiAgICB9LkxvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufS5NYWluIHtcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn0uV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxufS5XcmFwcGVyLS1zcGFjZS1iZXR3ZWVuIHtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9LldyYXBwZXItLWFsbG93LXdyYXAge1xcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH0uV3JhcHBlciAuV3JhcHBlcl9faXRlbS0tbGFzdCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgfS5XcmFwcGVyIC5jb2wtMSB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtMiB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMjtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDI7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAyO1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtMyB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMztcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDM7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAzO1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtNCB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogNDtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDQ7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA0O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtNSB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogNTtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDU7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA1O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtNiB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogNjtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDY7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA2O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtNyB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogNztcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDc7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA3O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtOCB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogODtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA4O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtOSB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogOTtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDk7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiA5O1xcbiAgICAgICAgfS5XcmFwcGVyIC5jb2wtMTAge1xcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEwO1xcbiAgICAgICAgICAgICAgICAtbXMtZmxleDogMTA7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxMDtcXG4gICAgICAgIH0uV3JhcHBlciAuY29sLTExIHtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxMTtcXG4gICAgICAgICAgICAgICAgLW1zLWZsZXg6IDExO1xcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTE7XFxuICAgICAgICB9LldyYXBwZXIgLmNvbC0xMiB7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTI7XFxuICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAxMjtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEyO1xcbiAgICAgICAgfUBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkgey5XcmFwcGVyIHtcXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfS5XcmFwcGVyIC5XcmFwcGVyX19pdGVtLS1sYXN0IHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH1cXG59LkNhcmQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDEwcHggLTdweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCAxMHB4IC03cHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICAvLyBwYWRkaW5nOiAxZW07XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMWVtO1xcbn0uQ2FyZF9faGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfS5DYXJkX19pY29uIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBtYXJnaW46IC0zZW0gYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgM2VtIDA7XFxuICAgICAgICB9LkNhcmRfX2JvZHkge1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICB9LkNhcmQtLXdpdGgtaWNvbiB7XFxuICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xcblxcblxcbiAgICB9LlRhYiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0M7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogLjI1ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2FuLXNlcmlmXFxufS5UYWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQkJCO1xcbn0uVGFiLS1hY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxufS5UYWItLWFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn0uVGFiIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMWVtIDFlbSAuMjVlbSAxZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxufS5UYWIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjF9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYiEuL3NyYy9jc3MvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
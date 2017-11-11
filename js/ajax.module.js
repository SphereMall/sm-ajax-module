var AjaxModule =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AjaxElement = (function () {
    function AjaxElement(id) {
        this.id = id;
    }
    AjaxElement.prototype.setElement = function (element) {
        this.element = element;
    };
    AjaxElement.prototype.setSettings = function (settings) {
        this.settings = settings;
    };
    return AjaxElement;
}());
exports.AjaxElement = AjaxElement;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AjaxFormElement_1 = __webpack_require__(4);
var AjaxHtmlElement_1 = __webpack_require__(5);
var AjaxElementFactory = (function () {
    function AjaxElementFactory() {
    }
    AjaxElementFactory.getAjaxElement = function (tagName, elementId) {
        switch (tagName) {
            case 'FORM':
                return new AjaxFormElement_1.AjaxFormElement(elementId);
            default:
                return new AjaxHtmlElement_1.AjaxHtmlElement(elementId);
        }
    };
    return AjaxElementFactory;
}());
exports.AjaxElementFactory = AjaxElementFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Guid = (function () {
    function Guid() {
    }
    Guid.get = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    Guid.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return Guid;
}());
exports.Guid = Guid;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Settings = (function () {
    function Settings() {
        this.type = 'post';
        this.dataType = 'json';
    }
    return Settings;
}());
exports.Settings = Settings;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AjaxElement_1 = __webpack_require__(0);
var AjaxFormElement = (function (_super) {
    __extends(AjaxFormElement, _super);
    function AjaxFormElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AjaxFormElement.prototype.ajaxSend = function () {
        console.log('call form element');
    };
    AjaxFormElement.prototype.subscribe = function () {
        console.log(this);
    };
    return AjaxFormElement;
}(AjaxElement_1.AjaxElement));
exports.AjaxFormElement = AjaxFormElement;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AjaxElement_1 = __webpack_require__(0);
var AjaxHtmlElement = (function (_super) {
    __extends(AjaxHtmlElement, _super);
    function AjaxHtmlElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AjaxHtmlElement.prototype.ajaxSend = function () {
        console.log('call html dom element');
    };
    AjaxHtmlElement.prototype.subscribe = function () {
    };
    return AjaxHtmlElement;
}(AjaxElement_1.AjaxElement));
exports.AjaxHtmlElement = AjaxHtmlElement;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Guid_1 = __webpack_require__(2);
var AjaxElementFactory_1 = __webpack_require__(1);
var Settings_1 = __webpack_require__(3);
var AjaxModule = (function () {
    function AjaxModule() {
        this.elements = [];
    }
    AjaxModule.prototype.init = function () {
        var _this = this;
        var elements = document.body.querySelectorAll("\n      [data-ajax-action], \n      [data-ajax-controller], \n      [data-ajax-method]");
        Object.keys(elements).forEach(function (key) {
            var currentElement = elements[+key];
            var elementIdAttr = currentElement.attributes.getNamedItem('data-ajax-element-id');
            if (elementIdAttr == null) {
                var elementId = Guid_1.Guid.get();
                currentElement.setAttribute('data-ajax-element-id', elementId);
                var element = AjaxElementFactory_1.AjaxElementFactory.getAjaxElement(currentElement.tagName, elementId);
                element.setElement(currentElement);
                element.setSettings(new Settings_1.Settings());
                element.subscribe();
                _this.elements.push(element);
            }
        });
    };
    AjaxModule.prototype.getElements = function () {
        return this.elements;
    };
    return AjaxModule;
}());
exports.AjaxModule = AjaxModule;
exports.module = new AjaxModule();
exports.module.init();


/***/ })
/******/ ]);
//# sourceMappingURL=ajax.module.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["character-count"] = factory();
	else
		root["CharacterCount"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns the length of a string, counting special characters such as unicode or
 * emoji ones as a single character instead of multiple ones.
 *
 * @param {string} text
 *
 * @returns {int} The length of the string
 */
const characterCount = text => {
  // Variation Selectors: https://emojipedia.org/variation-selector-16/
  const variations = ['️']; // Zero Width Joiner: https://emojipedia.org/emoji/%E2%80%8D/

  const separator = '‍';
  const transformed = [...text].filter(i => variations.indexOf(i) === -1); // Get all common ascii items

  const ascii = transformed.filter(i => i.length === 1 && i !== separator).length; // Get all emoji separator items.

  const separators = transformed.filter(i => i === separator).length; // Get individual emoji items

  const emoji = transformed.filter(i => i.length > 1).length;
  const aproximateLength = separators > 0 ? 2.5 : 2;
  return ascii + Math.round(emoji / aproximateLength);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (characterCount);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=character-count.js.map
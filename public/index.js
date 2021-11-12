/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar main_1 = __importDefault(__webpack_require__(/*! ./components/main */ \"./src/components/main.ts\"));\nvar main = document.getElementById(\"main\");\nmain === null || main === void 0 ? void 0 : main.classList.add(\"vh-100\", \"bg-dark\", \"d-flex\", \"flex-column\", \"justify-content-center\", \"align-items-center\");\nvar login = document.createElement(\"div\");\nlogin.id = \"loginContainer\";\nmain === null || main === void 0 ? void 0 : main.append(login);\n// GetLoginPage();\n// const config = AppConfig();\n// DisplayBlock(config.loginPage);\n(0, main_1.default)();\n\n\n//# sourceURL=webpack://recurtion-clicker-empire-game/./src/app.ts?");

/***/ }),

/***/ "./src/appConfig.ts":
/*!**************************!*\
  !*** ./src/appConfig.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar AppConfig = function () {\n    return {\n        loginPage: document.getElementById(\"loginContainer\"),\n        hamburgerImg: \"https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_960_720.png\",\n    };\n};\nexports[\"default\"] = AppConfig;\n\n\n//# sourceURL=webpack://recurtion-clicker-empire-game/./src/appConfig.ts?");

/***/ }),

/***/ "./src/components/main.ts":
/*!********************************!*\
  !*** ./src/components/main.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar appConfig_1 = __importDefault(__webpack_require__(/*! ../appConfig */ \"./src/appConfig.ts\"));\nvar Main = function () {\n    var config = (0, appConfig_1.default)();\n    var mainContainer = document.getElementById(\"main\");\n    var subContainer = document.createElement(\"div\");\n    subContainer.classList.add(\"d-flex\", \"col-11\", \"bg-navy\", \"d-block\");\n    // subContainer.style.height = \"100vh\";\n    subContainer.id = \"mainContainer\";\n    // let hamburgerImg = document.createElement(\"img\");\n    // hamburgerImg.src = config.hamburgerImg;\n    // subContainer.append(hamburgerImg);\n    var leftSection = document.createElement(\"div\");\n    leftSection.classList.add(\"bg-dark\", \"col-4\", \"m-2\");\n    var hamburgerSection = document.createElement(\"div\");\n    hamburgerSection.classList.add(\"bg-navy\", \"m-2\");\n    var upperHamburgerDiv = document.createElement(\"div\");\n    upperHamburgerDiv.classList.add(\"d-flex\", \"flex-row\");\n    var numberOfhamburgersP = document.createElement(\"p\");\n    numberOfhamburgersP.classList.add(\"text-white\", \"font-weight-bold\");\n    numberOfhamburgersP.innerHTML = \"0\";\n    upperHamburgerDiv.append(numberOfhamburgersP);\n    var BurgersP = document.createElement(\"div\");\n    BurgersP.classList.add(\"text-white\", \"font-weight-bold\");\n    BurgersP.innerHTML = \"Burgers\";\n    upperHamburgerDiv.append(BurgersP);\n    hamburgerSection.append(upperHamburgerDiv);\n    var lowerHamburgerDiv = document.createElement(\"div\");\n    lowerHamburgerDiv.classList.add(\"d-flex\", \"flex-row\");\n    var oneClickP = document.createElement(\"p\");\n    oneClickP.classList.add(\"text-white\", \"font-weight-bold\");\n    oneClickP.innerHTML = \"one click ￥25\";\n    lowerHamburgerDiv.append(oneClickP);\n    hamburgerSection.append(lowerHamburgerDiv);\n    leftSection.append(hamburgerSection);\n    subContainer.append(leftSection);\n    mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.append(subContainer);\n};\nfunction GetMainPage() {\n    return Main();\n}\nexports[\"default\"] = GetMainPage;\n\n\n//# sourceURL=webpack://recurtion-clicker-empire-game/./src/components/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_warmup_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Clock {\n  constructor(el) {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    this.el = el;\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.renderTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n\n    return timeString;\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    // this.printTime();\n    this.renderTime();\n\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n\n  renderTime() {\n    let timeString = this.printTime();\n    _warmup_js__WEBPACK_IMPORTED_MODULE_0___default()(timeString, this.el);\n  }\n}\n\nlet clockElement = document.getElementById(\"clock\");\nconsole.log(clockElement);\nlet clock = new Clock(clockElement);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(){\n  let dogArray = [];\n  Object.keys(dogs).forEach((dog) => {\n    let dogA = document.createElement(\"a\");\n    dogA.innerHTML = dog;\n    dogA.href = dogs[dog];\n    let dogLi = document.createElement(\"li\");\n    dogLi.classList.add(\"dog-link\");\n    dogLi.classList.add(\"hidden\");\n    dogLi.append(dogA);\n    dogArray.push(dogLi);\n  });\n  return dogArray;\n}\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator();\n  let list = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n  dogLinks.forEach((link) => {\n    list.append(link);\n  });\n}\n\nfunction handleEnter(e){\n  let nav = e.currentTarget;\n  Array.from(nav.getElementsByClassName(\"dog-link\")).forEach((child) => {\n    child.classList.remove('hidden');\n  }); \n}\n\nfunction handleLeave(e){\n  let nav = e.currentTarget;\n  Array.from(nav.getElementsByClassName(\"dog-link\")).forEach((child) => {\n    child.classList.add('hidden');\n  }); \n}\n\nattachDogLinks();\n\nlist = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\nlist.addEventListener(\"mouseenter\", (e) => {\n  handleEnter(e);\n});\nlist.addEventListener(\"mouseleave\", (e) => {\n  handleLeave(e);\n});\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_warmup__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll.js */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nlet slideAndScroll = document.getElementsByClassName(\"slide-and-scroll\")[0];\n\nlet debouncedScroll = debounce(function() {\n  let winTop = window.visualViewport.pageTop;\n  let winHeight = window.visualViewport.height;\n  let winBottom = winTop+winHeight;\n  let images = Array.from(document.getElementsByClassName(\"slide\"));\n  images.forEach((image) => {\n    let imgMidCoords = image.height/2 + image.y;\n    let imgBottomCoords = image.height+image.y;\n    if (imgMidCoords < winBottom && imgMidCoords > winTop) {\n      image.classList.add(\"active\");\n    } else if (imgBottomCoords < winHeight || image.y > winBottom){\n      image.classList.remove(\"active\");\n    }\n  });\n}, 250);\n\nwindow.addEventListener(\"scroll\", (e) => {\n  debouncedScroll();\n});\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nlet todosUl = document.getElementsByClassName(\"todos\")[0];\nlet addTodoForm = document.getElementsByClassName(\"add-todo-form\")[0];\n\npopulateList(todos);\n\nfunction addTodo(e){\n  e.preventDefault();\n  let textField = document.getElementsByName(\"add-todo\")[0];\n  let todo = {value: textField.value, done: false};\n  todos.push(todo);\n  textField.value = (\"\");\n\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n  populateList(todos);\n}\n\naddTodoForm.addEventListener(\"submit\", (e) => {\n  addTodo(e);\n});\n\nfunction populateList(todos){\n  todosUl.innerHTML = \"\";\n  \n  let todoLIs = todos.map((todo, idx) => {\n    let checkedness;\n    if (todo.done) {\n      checkedness = \"checked\";\n    } else {\n      checkedness = \"\";\n    }\n    let inner = `<label><input type=\"checkbox\" ${checkedness} data-idx=${idx}>${todo.value}</label>`;\n    console.log(inner);\n    let wrapper = document.createElement(\"li\");\n    wrapper.innerHTML = inner;\n    return wrapper;\n  });\n  todoLIs.forEach((li) => {\n    todosUl.append(li);\n  });\n}\n\ntodosUl.addEventListener(\"click\", (e) => {\n  if (e.target.type === 'checkbox') {\n    let checkbox = e.target;\n    let boxInList = todos[checkbox.getAttribute('data-idx')];\n    boxInList.done = !boxInList.done;\n    localStorage.setItem('todos', JSON.stringify(todos));\n  }\n});\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let newP = document.createElement(\"p\");\n  if (htmlElement.childElementCount > 0) {\n    Array.from(htmlElement.children).forEach( (child) => {\n      child.parentElement.removeChild(child);\n    });\n  }\n  newP.append(string);\n  htmlElement.append(newP);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\nmodule.exports = htmlGenerator;\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });
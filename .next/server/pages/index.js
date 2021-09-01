"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/getFiveNewestPosts.js":
/*!***********************************!*\
  !*** ./api/getFiveNewestPosts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiBaseUrl.js */ "./utils/apiBaseUrl.js");


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__() {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`${_utils_apiBaseUrl_js__WEBPACK_IMPORTED_MODULE_1__.default}/posts/get-five-newest-posts`);
    return response.data;
  } catch (error) {
    return {
      getDataError: true
    };
  }
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Header.js";


const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "navbar navbar-expand-lg navbar-dark bg-primary",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarTogglerDemo03",
        "aria-controls": "navbarTogglerDemo03",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "navbar-toggler-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        href: "/",
        children: "IIT(BHU)CyberSec"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo03",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "navbar-nav mr-auto mt-2 mt-md-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item active",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/",
              children: ["Home", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "sr-only",
                children: "(current)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/about",
              children: "About Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/blog",
              children: "Blogs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "nav-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              href: "/contact",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "form-inline my-2 my-lg-0",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "form-control mr-sm-2",
            type: "text",
            placeholder: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./components/Jumbotron.js":
/*!*********************************!*\
  !*** ./components/Jumbotron.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Jumbotron.js";


const Jumbotron = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "ht-tm-jumbotron",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jumbotron bg-transparent mb-0 radius-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "ht-tm-header",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "col-xl-6",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  className: "display-2",
                  children: ["IIT(BHU)CyberSe", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "vim-caret",
                    children: "c"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 78
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "lead mb-3 text-mono text-success",
                  children: "A Bootstrap theme for 1337 hackers."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "mt-5 text-grey text-spacey",
                  children: "Neon Glow is a free and open source Bootstrap theme. It was built on top of the Bootstrap 4. Only the leetest of hackers will be able to wield its power. Scroll down to explore the components and dive into the source."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-mono",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/bootstrap-themes/demo/files/hackerthemes-neon-glow.zip",
                    className: "btn btn-primary btn-shadow px-3 my-2 ml-0 text-left js-ht-download-link",
                    "data-type": "theme",
                    "data-id": "95",
                    children: "Download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 41
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jumbotron);

/***/ }),

/***/ "./components/Postcard.js":
/*!********************************!*\
  !*** ./components/Postcard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Postcard.js";


const PostCard = ({
  title,
  imgLink,
  content
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container ht-tm-container mb-5 mt-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-xl-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              class: "card-img-top",
              src: `${imgLink}`,
              alt: "Ca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "card-body",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                class: "card-title display-4",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                class: "card-text lead mb-3 text-success text-mono",
                children: content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#!",
                class: "btn btn-primary btn-shadow text-mono",
                children: "Go somewhere"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

/***/ }),

/***/ "./components/Postcards.js":
/*!*********************************!*\
  !*** ./components/Postcards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/getFiveNewestPosts.js */ "./api/getFiveNewestPosts.js");
/* harmony import */ var _Postcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Postcard */ "./components/Postcard.js");


var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/components/Postcards.js";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_2__.default)();
    console.log(apiResult);
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: this.props.posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Postcard__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: post.title,
        imgLink: post.thumbnailImageUrl,
        content: post.urlTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }, this))
    }, void 0, false);
  }

});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_Postcards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Postcards */ "./components/Postcards.js");
/* harmony import */ var _api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/getFiveNewestPosts.js */ "./api/getFiveNewestPosts.js");

var _jsxFileName = "/home/esharkythegreat/WebDev/CyberSecWeb-Components/frontend/CyberSecWebsiteFrontEnd-Pages/pages/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const apiResult = await (0,_api_getFiveNewestPosts_js__WEBPACK_IMPORTED_MODULE_5__.default)();
    return {
      posts: apiResult && apiResult.posts
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ht-main",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Postcards__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, this.props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this);
  }

});

/***/ }),

/***/ "./utils/apiBaseUrl.js":
/*!*****************************!*\
  !*** ./utils/apiBaseUrl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let apiBaseUrl;

if (true) {
  apiBaseUrl = "http://localhost:5000";
} else {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiBaseUrl);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztBQUN4Q0EsRUFBQUEsVUFBVSxHQUFHNEIsdUJBQWI7QUFDSCxDQUZELE1BRU8sRUFFTjs7QUFFRCxpRUFBZTVCLFVBQWY7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vYXBpL2dldEZpdmVOZXdlc3RQb3N0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2NvbXBvbmVudHMvSnVtYm90cm9uLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL1Bvc3RjYXJkLmpzIiwid2VicGFjazovL3dlYnNpdGUvLi9jb21wb25lbnRzL1Bvc3RjYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3V0aWxzL2FwaUJhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGAke2FwaUJhc2VVcmx9L3Bvc3RzL2dldC1maXZlLW5ld2VzdC1wb3N0c2ApXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgZ2V0RGF0YUVycm9yOiB0cnVlIH1cbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJUb2dnbGVyRGVtbzAzXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRvZ2dsZXJEZW1vMDNcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPklJVChCSFUpQ3liZXJTZWM8L2E+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVG9nZ2xlckRlbW8wM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvIG10LTIgbXQtbWQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5Ib21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj0nL2Fib3V0Jz5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYmxvZ1wiPkJsb2dzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBKdW1ib3Ryb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJodC10bS1qdW1ib3Ryb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBiZy10cmFuc3BhcmVudCBtYi0wIHJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh0LXRtLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTJcIj5JSVQoQkhVKUN5YmVyU2U8c3BhbiBjbGFzc05hbWU9XCJ2aW0tY2FyZXRcIj5jPC9zcGFuPjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWQgbWItMyB0ZXh0LW1vbm8gdGV4dC1zdWNjZXNzXCI+QSBCb290c3RyYXAgdGhlbWUgZm9yIDEzMzcgaGFja2Vycy48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWdyZXkgdGV4dC1zcGFjZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW9uIEdsb3cgaXMgYSBmcmVlIGFuZCBvcGVuIHNvdXJjZSBCb290c3RyYXAgdGhlbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgd2FzIGJ1aWx0IG9uIHRvcCBvZiB0aGUgQm9vdHN0cmFwIDQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25seSB0aGUgbGVldGVzdCBvZiBoYWNrZXJzIHdpbGwgYmUgYWJsZSB0byB3aWVsZCBpdHMgcG93ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2Nyb2xsIGRvd24gdG8gZXhwbG9yZSB0aGUgY29tcG9uZW50cyBhbmQgZGl2ZSBpbnRvIHRoZSBzb3VyY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tb25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ib290c3RyYXAtdGhlbWVzL2RlbW8vZmlsZXMvaGFja2VydGhlbWVzLW5lb24tZ2xvdy56aXBcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNoYWRvdyBweC0zIG15LTIgbWwtMCB0ZXh0LWxlZnQganMtaHQtZG93bmxvYWQtbGlua1wiIGRhdGEtdHlwZT1cInRoZW1lXCIgZGF0YS1pZD1cIjk1XCI+RG93bmxvYWQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVtYm90cm9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHRpdGxlLCBpbWdMaW5rLCBjb250ZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBodC10bS1jb250YWluZXIgbWItNSBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtgJHtpbWdMaW5rfWB9IGFsdD1cIkNhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGUgZGlzcGxheS00XCI+e3RpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGxlYWQgbWItMyB0ZXh0LXN1Y2Nlc3MgdGV4dC1tb25vXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc2hhZG93IHRleHQtbW9ub1wiPkdvIHNvbWV3aGVyZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgZ2V0Rml2ZU5ld2VzdFBvc3RzIGZyb20gXCIuLi9hcGkvZ2V0Rml2ZU5ld2VzdFBvc3RzLmpzXCJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi9Qb3N0Y2FyZFwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgZ2V0Rml2ZU5ld2VzdFBvc3RzKClcbiAgICAgICAgY29uc29sZS5sb2coYXBpUmVzdWx0KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zdHM6IGFwaVJlc3VsdCAmJiBhcGlSZXN1bHQucG9zdHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkIHRpdGxlPXtwb3N0LnRpdGxlfSBpbWdMaW5rPXtwb3N0LnRodW1ibmFpbEltYWdlVXJsfSBjb250ZW50PXtwb3N0LnVybFRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICcuLi9jb21wb25lbnRzL0p1bWJvdHJvbidcbmltcG9ydCBQb3N0Q2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Y2FyZHMnXG5pbXBvcnQgZ2V0Rml2ZU5ld2VzdFBvc3RzIGZyb20gXCIuLi9hcGkvZ2V0Rml2ZU5ld2VzdFBvc3RzLmpzXCJcbmltcG9ydCBQb3N0Y2FyZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdGNhcmRzXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCBnZXRGaXZlTmV3ZXN0UG9zdHMoKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3N0czogYXBpUmVzdWx0ICYmIGFwaVJlc3VsdC5wb3N0c1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3RjYXJkcyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsImxldCBhcGlCYXNlVXJsXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgYXBpQmFzZVVybCA9IHByb2Nlc3MuZW52LkRFVl9BUElfVVJMXG59IGVsc2Uge1xuICAgIGFwaUJhc2VVcmwgPSBwcm9jZXNzLmVudi5QUk9EVUNUSU9OX0FQSV9VUkxcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpQmFzZVVybCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGlCYXNlVXJsIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJnZXREYXRhRXJyb3IiLCJSZWFjdCIsIk5hdmJhciIsIkp1bWJvdHJvbiIsIlBvc3RDYXJkIiwidGl0bGUiLCJpbWdMaW5rIiwiY29udGVudCIsIkNvbXBvbmVudCIsImdldEZpdmVOZXdlc3RQb3N0cyIsImdldEluaXRpYWxQcm9wcyIsImFwaVJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInJlbmRlciIsInByb3BzIiwibWFwIiwicG9zdCIsInRodW1ibmFpbEltYWdlVXJsIiwidXJsVGl0bGUiLCJIZWFkZXIiLCJQb3N0Q2FyZHMiLCJQb3N0Y2FyZHMiLCJwcm9jZXNzIiwiZW52IiwiREVWX0FQSV9VUkwiLCJQUk9EVUNUSU9OX0FQSV9VUkwiXSwic291cmNlUm9vdCI6IiJ9
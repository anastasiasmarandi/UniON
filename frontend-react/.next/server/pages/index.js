"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabler-icons-react */ \"tabler-icons-react\");\n/* harmony import */ var tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/services */ \"./utils/services.js\");\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const { 0: pass , 1: setPass  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ()=>{\n        const res = await (0,_utils_services__WEBPACK_IMPORTED_MODULE_6__.loginUser)(email, pass);\n        console.log(res);\n    // if (res) router.push(\"/dashboard\");\n    }, [\n        email,\n        pass\n    ]);\n    const goToRegister = ()=>{\n        router.push(\"/register\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-circle circle-1\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-circle circle-2\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                shadow: \"sm\",\n                p: \"lg\",\n                radius: \"xl\",\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-logo\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.At, {}, void 0, false, void 0, void 0),\n                        placeholder: \"Your email\",\n                        radius: \"xl\",\n                        size: \"md\",\n                        className: \"input\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        radius: \"xl\",\n                        size: \"md\",\n                        className: \"input\",\n                        value: pass,\n                        onChange: (e)=>setPass(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        radius: \"xl\",\n                        className: \"submit-btn\",\n                        onClick: ()=>login()\n                        ,\n                        children: \"Logare\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Anchor, {\n                        className: \"link\",\n                        onClick: ()=>goToRegister()\n                        ,\n                        children: \"Utilizator nou\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/mbian/Documents/Facultate/Anul 3/Semestrul 2/IP/UniON/frontend-react/pages/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZC1yZWFjdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQXQgfSBmcm9tIFwidGFibGVyLWljb25zLXJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBJbnB1dCwgQnV0dG9uLCBBbmNob3IgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gXCIuLi91dGlscy9zZXJ2aWNlc1wiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3MsIHNldFBhc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgbG9naW4gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgbG9naW5Vc2VyKGVtYWlsLCBwYXNzKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vIGlmIChyZXMpIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgfSwgW2VtYWlsLCBwYXNzXSk7XG5cbiAgY29uc3QgZ29Ub1JlZ2lzdGVyID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNpcmNsZSBjaXJjbGUtMVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNpcmNsZSBjaXJjbGUtMlwiIC8+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q2FyZCBzaGFkb3c9XCJzbVwiIHA9XCJsZ1wiIHJhZGl1cz1cInhsXCIgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbG9nb1wiIC8+XG5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWNvbj17PEF0IC8+fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgcmFkaXVzPVwieGxcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICByYWRpdXM9XCJ4bFwiXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uIHJhZGl1cz1cInhsXCIgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiIG9uQ2xpY2s9eygpID0+IGxvZ2luKCl9PlxuICAgICAgICAgIExvZ2FyZVxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8QW5jaG9yIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiBnb1RvUmVnaXN0ZXIoKX0+XG4gICAgICAgICAgVXRpbGl6YXRvciBub3VcbiAgICAgICAgPC9BbmNob3I+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJBdCIsIkNhcmQiLCJJbnB1dCIsIkJ1dHRvbiIsIkFuY2hvciIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJsb2dpblVzZXIiLCJIb21lIiwicm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3MiLCJzZXRQYXNzIiwibG9naW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ29Ub1JlZ2lzdGVyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic2hhZG93IiwicCIsInJhZGl1cyIsImljb24iLCJwbGFjZWhvbGRlciIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./utils/services.js":
/*!***************************!*\
  !*** ./utils/services.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"registerUser\": () => (/* binding */ registerUser)\n/* harmony export */ });\nconst be = \"http://127.0.0.1:5000\";\nconst loginUser = async (mail, passw)=>{\n    const url = `${be}/login`;\n    const body = {\n        email: mail,\n        password: passw\n    };\n    const response = await fetch(url, {\n        method: \"POST\",\n        mode: \"no-cors\",\n        body: body\n    });\n    return response;\n};\nconst registerUser = async (firstName, lastName, cnp, mail, passw)=>{\n    const url = `${be}/register`;\n    const body = {\n        firstName: firstName,\n        lastName: lastName,\n        cnp: cnp,\n        email: mail,\n        password: passw\n    };\n    const response = await fetch(url, {\n        method: \"POST\",\n        mode: \"no-cors\",\n        body: body\n    });\n    return response;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zZXJ2aWNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLEVBQUUsR0FBRyx1QkFBdUI7QUFFM0IsTUFBTUMsU0FBUyxHQUFHLE9BQU9DLElBQUksRUFBRUMsS0FBSyxHQUFLO0lBQzlDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUVKLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDekIsTUFBTUssSUFBSSxHQUFHO1FBQ1hDLEtBQUssRUFBRUosSUFBSTtRQUNYSyxRQUFRLEVBQUVKLEtBQUs7S0FDaEI7SUFFRCxNQUFNSyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxHQUFHLEVBQUU7UUFDaENNLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRSxTQUFTO1FBQ2ZOLElBQUksRUFBRUEsSUFBSTtLQUNYLENBQUM7SUFFRixPQUFPRyxRQUFRLENBQUM7Q0FDakIsQ0FBQztBQUVLLE1BQU1JLFlBQVksR0FBRyxPQUFPQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFFYixJQUFJLEVBQUVDLEtBQUssR0FBSztJQUMzRSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxFQUFFSixFQUFFLENBQUMsU0FBUyxDQUFDO0lBQzVCLE1BQU1LLElBQUksR0FBRztRQUNYUSxTQUFTLEVBQUVBLFNBQVM7UUFDcEJDLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsR0FBRyxFQUFFQSxHQUFHO1FBQ1JULEtBQUssRUFBRUosSUFBSTtRQUNYSyxRQUFRLEVBQUVKLEtBQUs7S0FDaEI7SUFFRCxNQUFNSyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTCxHQUFHLEVBQUU7UUFDaENNLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLElBQUksRUFBRSxTQUFTO1FBQ2ZOLElBQUksRUFBRUEsSUFBSTtLQUNYLENBQUM7SUFFRixPQUFPRyxRQUFRLENBQUM7Q0FDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLXJlYWN0Ly4vdXRpbHMvc2VydmljZXMuanM/ZjYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiZSA9IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKG1haWwsIHBhc3N3KSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7YmV9L2xvZ2luYDtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgZW1haWw6IG1haWwsXHJcbiAgICBwYXNzd29yZDogcGFzc3csXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBtb2RlOiBcIm5vLWNvcnNcIixcclxuICAgIGJvZHk6IGJvZHksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgY25wLCBtYWlsLCBwYXNzdykgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGAke2JlfS9yZWdpc3RlcmA7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgY25wOiBjbnAsXHJcbiAgICBlbWFpbDogbWFpbCxcclxuICAgIHBhc3N3b3JkOiBwYXNzdyxcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIG1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgYm9keTogYm9keSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYmUiLCJsb2dpblVzZXIiLCJtYWlsIiwicGFzc3ciLCJ1cmwiLCJib2R5IiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwicmVnaXN0ZXJVc2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjbnAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/services.js\n");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ "tabler-icons-react":
/*!*************************************!*\
  !*** external "tabler-icons-react" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("tabler-icons-react");

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
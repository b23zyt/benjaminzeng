"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/page",{

/***/ "(app-pages-browser)/./src/app/portfolio/page.jsx":
/*!************************************!*\
  !*** ./src/app/portfolio/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        id: 1,\n        color: \"from-red-300 to-blue-300\",\n        title: \"React Commerce\",\n        desc: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.\",\n        img: \"/star.png\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 2,\n        color: \"from-blue-300 to-violet-300\",\n        title: \"Next.js Medium Blog\",\n        desc: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.\",\n        img: \"/star.png\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 3,\n        color: \"from-violet-300 to-purple-300\",\n        title: \"Vanilla Book App\",\n        desc: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.\",\n        img: \"/star.png\",\n        link: \"https://lama.dev\"\n    },\n    {\n        id: 4,\n        color: \"from-purple-300 to-red-300\",\n        title: \"Spotify Music App\",\n        desc: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.\",\n        img: \"/star.png\",\n        link: \"https://lama.dev\"\n    }\n];\nconst PortfolioPage = ()=>{\n    _s();\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    // const x = useTransform(scrollYProgress, [0, 1], [\"0%\", \"-80%\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        className: \"h-full\",\n        initial: {\n            y: \"-200vh\"\n        },\n        animate: {\n            y: \"0%\"\n        },\n        transition: {\n            duration: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[screen] relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center\",\n                        children: \"My Works\"\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0 flex h-screen gap-4 items-center \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-screen w-screen flex items-center justify-center bg-gradient-to-r \".concat(item.color),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col gap-8 text-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[300px] xl:w-[420px] xl:h-[370px]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    src: item.img,\n                                                    alt: \"\",\n                                                    fill: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]\",\n                                                children: item.desc\n                                            }, void 0, false, {\n                                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: item.link,\n                                                className: \"flex justify-end\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded\",\n                                                    children: \"See Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, item.id, false, {\n                                    fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-screen flex flex-col gap-16 items-center justify-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-8xl\",\n                        children: \"Do you have a project?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.svg, {\n                                animate: {\n                                    rotate: 360\n                                },\n                                transition: {\n                                    duration: 8,\n                                    ease: \"linear\",\n                                    repeat: Infinity\n                                },\n                                viewBox: \"0 0 300 300\",\n                                className: \"w-64 h-64 md:w-[500px] md:h-[500px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            id: \"circlePath\",\n                                            d: \"M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                        fill: \"#000\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textPath\", {\n                                            xlinkHref: \"#circlePath\",\n                                            className: \"text-xl\",\n                                            children: \"Front-end Developer and UI Designer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/contact\",\n                                className: \"w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center\",\n                                children: \"Hire Me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/b23zeng/Desktop/portfolio_2024/src/app/portfolio/page.jsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PortfolioPage, \"K+vLkUSSogCN887TkXa8xjCRTOU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll\n    ];\n});\n_c = PortfolioPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioPage);\nvar _c;\n$RefreshReg$(_c, \"PortfolioPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0U7QUFDbkM7QUFDRTtBQUNBO0FBRS9CLE1BQU1NLFFBQVE7SUFDVjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLEtBQUs7UUFDTEMsTUFBTTtJQUNSO0NBQ0Q7QUFFSCxNQUFNQyxnQkFBZ0I7O0lBQ2xCLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdiLHdEQUFTQTtJQUNyQyxtRUFBbUU7SUFFbkUscUJBQ0ksOERBQUNELGlEQUFNQSxDQUFDZSxHQUFHO1FBQUNDLFdBQVU7UUFBU0MsU0FBUztZQUFDQyxHQUFFO1FBQVE7UUFBR0MsU0FBUztZQUFDRCxHQUFFO1FBQUk7UUFBR0UsWUFBWTtZQUFDQyxVQUFTO1FBQUM7OzBCQUM1Riw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBc0Y7Ozs7OztrQ0FHckcsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDZFYsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDUiw4REFBQ1I7b0NBQ0dDLFdBQVcsdUVBQWtGLE9BQVhPLEtBQUtmLEtBQUs7OENBRzVGLDRFQUFDTzt3Q0FBSUMsV0FBVTs7MERBQ2YsOERBQUNRO2dEQUFHUixXQUFVOzBEQUNUTyxLQUFLZCxLQUFLOzs7Ozs7MERBRWYsOERBQUNNO2dEQUFJQyxXQUFVOzBEQUNYLDRFQUFDWCxrREFBS0E7b0RBQUNvQixLQUFLRixLQUFLWixHQUFHO29EQUFFZSxLQUFJO29EQUFHQyxJQUFJOzs7Ozs7Ozs7OzswREFFckMsOERBQUNDO2dEQUFFWixXQUFVOzBEQUNSTyxLQUFLYixJQUFJOzs7Ozs7MERBRWQsOERBQUNQLGlEQUFJQTtnREFBQzBCLE1BQU1OLEtBQUtYLElBQUk7Z0RBQUVJLFdBQVU7MERBQzdCLDRFQUFDYztvREFBT2QsV0FBVTs4REFBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWJwSE8sS0FBS2hCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFxQjVCLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ25CLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDaEIsaURBQU1BLENBQUMrQixHQUFHO2dDQUNUWixTQUFTO29DQUFFYSxRQUFRO2dDQUFJO2dDQUN2QlosWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBR1ksTUFBTTtvQ0FBVUMsUUFBUUM7Z0NBQVM7Z0NBQzVEQyxTQUFRO2dDQUNScEIsV0FBVTs7a0RBRVYsOERBQUNxQjtrREFDQyw0RUFBQ0M7NENBQ0MvQixJQUFHOzRDQUNIZ0MsR0FBRTs7Ozs7Ozs7Ozs7a0RBR04sOERBQUNDO3dDQUFLYixNQUFLO2tEQUNULDRFQUFDYzs0Q0FBU0MsV0FBVTs0Q0FBYzFCLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUsxRCw4REFBQ2IsaURBQUlBO2dDQUNIMEIsTUFBSztnQ0FDTGIsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuRU1IOztRQUMwQlosb0RBQVNBOzs7S0FEbkNZO0FBcUVOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9ydGZvbGlvL3BhZ2UuanN4PzAwMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBjb2xvcjogXCJmcm9tLXJlZC0zMDAgdG8tYmx1ZS0zMDBcIixcbiAgICAgIHRpdGxlOiBcIlJlYWN0IENvbW1lcmNlXCIsXG4gICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9yZXMgYWIgaWQgYWQgbmVzY2l1bnQgcXVvIGF1dCBjb3Jwb3JpcyBtb2RpPyBWb2x1cHRhdGUsIHF1b3Mgc3VudCBkb2xvcnVtIGZhY2lsaXMsIGlkIGV1bSBzZXF1aSBwbGFjZWF0IGFjY3VzYW50aXVtIHNhZXBlIGVvcyBsYWJvcnVtLlwiLFxuICAgICAgaW1nOiBcIi9zdGFyLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL2xhbWEuZGV2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIGNvbG9yOiBcImZyb20tYmx1ZS0zMDAgdG8tdmlvbGV0LTMwMFwiLFxuICAgICAgdGl0bGU6IFwiTmV4dC5qcyBNZWRpdW0gQmxvZ1wiLFxuICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmVzIGFiIGlkIGFkIG5lc2NpdW50IHF1byBhdXQgY29ycG9yaXMgbW9kaT8gVm9sdXB0YXRlLCBxdW9zIHN1bnQgZG9sb3J1bSBmYWNpbGlzLCBpZCBldW0gc2VxdWkgcGxhY2VhdCBhY2N1c2FudGl1bSBzYWVwZSBlb3MgbGFib3J1bS5cIixcbiAgICAgIGltZzogXCIvc3Rhci5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9sYW1hLmRldlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBjb2xvcjogXCJmcm9tLXZpb2xldC0zMDAgdG8tcHVycGxlLTMwMFwiLFxuICAgICAgdGl0bGU6IFwiVmFuaWxsYSBCb29rIEFwcFwiLFxuICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEb2xvcmVzIGFiIGlkIGFkIG5lc2NpdW50IHF1byBhdXQgY29ycG9yaXMgbW9kaT8gVm9sdXB0YXRlLCBxdW9zIHN1bnQgZG9sb3J1bSBmYWNpbGlzLCBpZCBldW0gc2VxdWkgcGxhY2VhdCBhY2N1c2FudGl1bSBzYWVwZSBlb3MgbGFib3J1bS5cIixcbiAgICAgIGltZzogXCIvc3Rhci5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9sYW1hLmRldlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBjb2xvcjogXCJmcm9tLXB1cnBsZS0zMDAgdG8tcmVkLTMwMFwiLFxuICAgICAgdGl0bGU6IFwiU3BvdGlmeSBNdXNpYyBBcHBcIixcbiAgICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JlcyBhYiBpZCBhZCBuZXNjaXVudCBxdW8gYXV0IGNvcnBvcmlzIG1vZGk/IFZvbHVwdGF0ZSwgcXVvcyBzdW50IGRvbG9ydW0gZmFjaWxpcywgaWQgZXVtIHNlcXVpIHBsYWNlYXQgYWNjdXNhbnRpdW0gc2FlcGUgZW9zIGxhYm9ydW0uXCIsXG4gICAgICBpbWc6IFwiL3N0YXIucG5nXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vbGFtYS5kZXZcIixcbiAgICB9LFxuICBdO1xuXG5jb25zdCBQb3J0Zm9saW9QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcbiAgICAvLyBjb25zdCB4ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbXCIwJVwiLCBcIi04MCVcIl0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImgtZnVsbFwiIGluaXRpYWw9e3t5OlwiLTIwMHZoXCJ9fSBhbmltYXRlPXt7eTpcIjAlXCJ9fSB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MX19PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bc2NyZWVuXSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bY2FsYygxMDB2aC02cmVtKV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC04eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgTXkgV29ya3NcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBmbGV4IGgtc2NyZWVuIGdhcC00IGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by1yICR7aXRlbS5jb2xvcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCB4bDp0ZXh0LTh4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy04MCBoLTU2IG1kOnctOTYgbWQ6aC02NCBsZzp3LVszNTBweF0gbGc6aC1bMzAwcHhdIHhsOnctWzQyMHB4XSB4bDpoLVszNzBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWd9IGFsdD1cIlwiIGZpbGwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTgwIG1kOnc5NiBsZzp3LVs1MDBweF0gbGc6dGV4dC1sZyB4bDp3LVs2MDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHRleHQtc20gbWQ6cC00IG1kOnRleHQtbWQgbGc6cC02IGxnOnRleHQtbGcgYmctd2hpdGUgdGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkIG0tNCByb3VuZGVkXCI+U2VlIERlbW88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGdhcC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtOHhsXCI+RG8geW91IGhhdmUgYSBwcm9qZWN0PzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8bW90aW9uLnN2Z1xuICAgICAgICAgICAgYW5pbWF0ZT17eyByb3RhdGU6IDM2MCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogOCwgZWFzZTogXCJsaW5lYXJcIiwgcmVwZWF0OiBJbmZpbml0eSB9fVxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMDAgMzAwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgaC02NCBtZDp3LVs1MDBweF0gbWQ6aC1bNTAwcHhdIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGVQYXRoXCJcbiAgICAgICAgICAgICAgICBkPVwiTSAxNTAsIDE1MCBtIC02MCwgMCBhIDYwLDYwIDAgMCwxIDEyMCwwIGEgNjAsNjAgMCAwLDEgLTEyMCwwIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8dGV4dCBmaWxsPVwiIzAwMFwiPlxuICAgICAgICAgICAgICA8dGV4dFBhdGggeGxpbmtIcmVmPVwiI2NpcmNsZVBhdGhcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgRnJvbnQtZW5kIERldmVsb3BlciBhbmQgVUkgRGVzaWduZXJcbiAgICAgICAgICAgICAgPC90ZXh0UGF0aD5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgbWQ6dy0yOCBtZDpoLTI4IGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIG0tYXV0byBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGlyZSBNZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1BhZ2UiXSwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiTGluayIsInVzZVJlZiIsIkltYWdlIiwiaXRlbXMiLCJpZCIsImNvbG9yIiwidGl0bGUiLCJkZXNjIiwiaW1nIiwibGluayIsIlBvcnRmb2xpb1BhZ2UiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJpdGVtIiwiaDEiLCJzcmMiLCJhbHQiLCJmaWxsIiwicCIsImhyZWYiLCJidXR0b24iLCJzdmciLCJyb3RhdGUiLCJlYXNlIiwicmVwZWF0IiwiSW5maW5pdHkiLCJ2aWV3Qm94IiwiZGVmcyIsInBhdGgiLCJkIiwidGV4dCIsInRleHRQYXRoIiwieGxpbmtIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/portfolio/page.jsx\n"));

/***/ })

});
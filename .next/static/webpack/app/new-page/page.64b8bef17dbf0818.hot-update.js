"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/new-page/page",{

/***/ "(app-pages-browser)/./components/ThemeSettings/Clear1.js":
/*!********************************************!*\
  !*** ./components/ThemeSettings/Clear1.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\nconst ClearButton1 = ()=>{\n    _s();\n    const clearLocalStorage = ()=>{\n        localStorage.removeItem(\"toggled\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const clear = ()=>{\n            document.body.classList.remove(\"dark-theme\");\n            document.querySelector(\".theme-dark-light .light input\").checked = true;\n            document.querySelector(\".layout-wrap\").classList.remove(\"menu-style-icon\", \"menu-style-icon-default\");\n            document.querySelector(\".menu-style .menu-click\").checked = true;\n            document.querySelector(\".layout-wrap\").classList.remove(\"layout-width-boxed\");\n            document.querySelector(\".layout-width .full\").checked = true;\n            document.querySelector(\".layout-wrap\").classList.remove(\"menu-position-scrollable\");\n            document.querySelector(\".menu-position .menu-fixed\").checked = true;\n            document.querySelector(\".layout-wrap\").classList.remove(\"header-position-scrollable\");\n            document.querySelector(\".header-position .header-fixed\").checked = true;\n            document.querySelector(\".layout-wrap\").classList.remove(\"loader-off\");\n            document.querySelector(\".style-loader .style-loader-on\").checked = true;\n            clearLocalStorage();\n        };\n        const clearButton = document.querySelector(\".form-theme-style .button-clear-select\");\n        // clearButton.addEventListener('click', clear)\n        return ()=>{\n            clearButton.removeEventListener(\"click\", clear);\n        };\n    }, []);\n    return null // As this component does not render anything visible\n    ;\n};\n_s(ClearButton1, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ClearButton1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClearButton1);\nvar _c;\n$RefreshReg$(_c, \"ClearButton1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGhlbWVTZXR0aW5ncy9DbGVhcjEuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNpQztBQUVqQyxNQUFNQyxlQUFlOztJQUVqQixNQUFNQyxvQkFBb0I7UUFDdEJDLGFBQWFDLFVBQVUsQ0FBQztJQUM1QjtJQUVBSixnREFBU0EsQ0FBQztRQUNOLE1BQU1LLFFBQVE7WUFDVkMsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztZQUMvQkgsU0FBU0ksYUFBYSxDQUFDLGtDQUFrQ0MsT0FBTyxHQUFHO1lBQ25FTCxTQUFTSSxhQUFhLENBQUMsZ0JBQWdCRixTQUFTLENBQUNDLE1BQU0sQ0FBQyxtQkFBbUI7WUFDM0VILFNBQVNJLGFBQWEsQ0FBQywyQkFBMkJDLE9BQU8sR0FBRztZQUM1REwsU0FBU0ksYUFBYSxDQUFDLGdCQUFnQkYsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDeERILFNBQVNJLGFBQWEsQ0FBQyx1QkFBdUJDLE9BQU8sR0FBRztZQUN4REwsU0FBU0ksYUFBYSxDQUFDLGdCQUFnQkYsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDeERILFNBQVNJLGFBQWEsQ0FBQyw4QkFBOEJDLE9BQU8sR0FBRztZQUMvREwsU0FBU0ksYUFBYSxDQUFDLGdCQUFnQkYsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDeERILFNBQVNJLGFBQWEsQ0FBQyxrQ0FBa0NDLE9BQU8sR0FBRztZQUNuRUwsU0FBU0ksYUFBYSxDQUFDLGdCQUFnQkYsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDeERILFNBQVNJLGFBQWEsQ0FBQyxrQ0FBa0NDLE9BQU8sR0FBRztZQUNuRVQ7UUFDSjtRQUVBLE1BQU1VLGNBQWNOLFNBQVNJLGFBQWEsQ0FBQztRQUMzQywrQ0FBK0M7UUFFL0MsT0FBTztZQUNIRSxZQUFZQyxtQkFBbUIsQ0FBQyxTQUFTUjtRQUM3QztJQUNKLEdBQUcsRUFBRTtJQUVMLE9BQU8sS0FBSyxxREFBcUQ7O0FBQ3JFO0dBaENNSjtLQUFBQTtBQWtDTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lU2V0dGluZ3MvQ2xlYXIxLmpzPzg2NjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xlYXJCdXR0b24xID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2dnbGVkJylcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstdGhlbWUnKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtZGFyay1saWdodCAubGlnaHQgaW5wdXQnKS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0LXdyYXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXN0eWxlLWljb24nLCAnbWVudS1zdHlsZS1pY29uLWRlZmF1bHQnKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1zdHlsZSAubWVudS1jbGljaycpLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtd3JhcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2xheW91dC13aWR0aC1ib3hlZCcpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtd2lkdGggLmZ1bGwnKS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0LXdyYXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBvc2l0aW9uLXNjcm9sbGFibGUnKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wb3NpdGlvbiAubWVudS1maXhlZCcpLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtd3JhcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1wb3NpdGlvbi1zY3JvbGxhYmxlJylcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1wb3NpdGlvbiAuaGVhZGVyLWZpeGVkJykuY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyLW9mZicpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHlsZS1sb2FkZXIgLnN0eWxlLWxvYWRlci1vbicpLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGhlbWUtc3R5bGUgLmJ1dHRvbi1jbGVhci1zZWxlY3QnKVxyXG4gICAgICAgIC8vIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXIpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIG51bGwgLy8gQXMgdGhpcyBjb21wb25lbnQgZG9lcyBub3QgcmVuZGVyIGFueXRoaW5nIHZpc2libGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xlYXJCdXR0b24xXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJDbGVhckJ1dHRvbjEiLCJjbGVhckxvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGVhciIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwiY2xlYXJCdXR0b24iLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ThemeSettings/Clear1.js\n"));

/***/ })

});
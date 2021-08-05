(function() {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\Porag\\GainSolution\\New folder (2)\\crud-test\\pages\\[id]\\index.js";





const Student = ({
  student
}) => {
  const {
    0: confirm,
    1: setConfirm
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: isDeleting,
    1: setIsDeleting
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isDeleting) {
      deleteStudent();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);

  const close = () => setConfirm(false);

  const deleteStudent = async () => {
    const studentId = router.query.id;

    try {
      const deleted = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:3000/api/students/${studentId}`, {
        method: "Delete"
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "student-container",
    children: [isDeleting ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Loader, {
      active: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: student.fullName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: student.subject1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: student.subject2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: student.subject3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
        color: "red",
        onClick: open,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, undefined)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Confirm, {
      open: confirm,
      onCancel: close,
      onConfirm: handleDelete
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

Student.getInitialProps = async ({
  query: {
    id
  }
}) => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:3000/api/students/${id}`);
  const {
    data
  } = await res.json();
  return {
    student: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Student);

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-unfetch");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[id]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi9wYWdlcy9baWRdL2luZGV4LmpzIiwid2VicGFjazovL2NydWQtdGVzdC9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovL2NydWQtdGVzdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY3J1ZC10ZXN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jcnVkLXRlc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jcnVkLXRlc3QvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIlN0dWRlbnQiLCJzdHVkZW50IiwiY29uZmlybSIsInNldENvbmZpcm0iLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGVsZXRlU3R1ZGVudCIsIm9wZW4iLCJjbG9zZSIsInN0dWRlbnRJZCIsInF1ZXJ5IiwiaWQiLCJkZWxldGVkIiwiZmV0Y2giLCJtZXRob2QiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGVsZXRlIiwiZnVsbE5hbWUiLCJzdWJqZWN0MSIsInN1YmplY3QyIiwic3ViamVjdDMiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlKLFVBQUosRUFBZ0I7QUFDWkssbUJBQWE7QUFDaEI7QUFDSixHQUpRLEVBSU4sQ0FBQ0wsVUFBRCxDQUpNLENBQVQ7O0FBTUEsUUFBTU0sSUFBSSxHQUFHLE1BQU1SLFVBQVUsQ0FBQyxJQUFELENBQTdCOztBQUVBLFFBQU1TLEtBQUssR0FBRyxNQUFNVCxVQUFVLENBQUMsS0FBRCxDQUE5Qjs7QUFFQSxRQUFNTyxhQUFhLEdBQUcsWUFBWTtBQUM5QixVQUFNRyxTQUFTLEdBQUdOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQyxFQUEvQjs7QUFDQSxRQUFJO0FBQ0EsWUFBTUMsT0FBTyxHQUFHLE1BQU1DLHlEQUFLLENBQUUsc0NBQXFDSixTQUFVLEVBQWpELEVBQW9EO0FBQzNFSyxjQUFNLEVBQUU7QUFEbUUsT0FBcEQsQ0FBM0I7QUFJQVgsWUFBTSxDQUFDWSxJQUFQLENBQVksR0FBWjtBQUNILEtBTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDtBQUNKLEdBWEQ7O0FBYUEsUUFBTUcsWUFBWSxHQUFHLFlBQVk7QUFDN0JqQixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBTSxTQUFLO0FBQ1IsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLGVBQ0tQLFVBQVUsZ0JBQ0wsOERBQUMscURBQUQ7QUFBUSxZQUFNO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxnQkFHUDtBQUFBLDhCQUNJO0FBQUEsa0JBQUtKLE9BQU8sQ0FBQ3VCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQUl2QixPQUFPLENBQUN3QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGtCQUFJeEIsT0FBTyxDQUFDeUI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBQSxrQkFBSXpCLE9BQU8sQ0FBQzBCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLHFEQUFEO0FBQVEsYUFBSyxFQUFDLEtBQWQ7QUFBb0IsZUFBTyxFQUFFaEIsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQSxvQkFKUixlQVlJLDhEQUFDLHNEQUFEO0FBQ0ksVUFBSSxFQUFFVCxPQURWO0FBRUksY0FBUSxFQUFFVSxLQUZkO0FBR0ksZUFBUyxFQUFFVztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFvQkgsQ0FyREQ7O0FBdURBdkIsT0FBTyxDQUFDNEIsZUFBUixHQUEwQixPQUFPO0FBQUVkLE9BQUssRUFBRTtBQUFFQztBQUFGO0FBQVQsQ0FBUCxLQUE2QjtBQUNuRCxRQUFNYyxHQUFHLEdBQUcsTUFBTVoseURBQUssQ0FBRSxzQ0FBcUNGLEVBQUcsRUFBMUMsQ0FBdkI7QUFDQSxRQUFNO0FBQUVlO0FBQUYsTUFBVyxNQUFNRCxHQUFHLENBQUNFLElBQUosRUFBdkI7QUFFQSxTQUFPO0FBQUU5QixXQUFPLEVBQUU2QjtBQUFYLEdBQVA7QUFDSCxDQUxEOztBQU9BLCtEQUFlOUIsT0FBZixFOzs7Ozs7Ozs7OztBQ25FQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlybSwgQnV0dG9uLCBMb2FkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5jb25zdCBTdHVkZW50ID0gKHsgc3R1ZGVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29uZmlybSwgc2V0Q29uZmlybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0RlbGV0aW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVN0dWRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNEZWxldGluZ10pXHJcblxyXG4gICAgY29uc3Qgb3BlbiA9ICgpID0+IHNldENvbmZpcm0odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiBzZXRDb25maXJtKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVTdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0dWRlbnRJZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3R1ZGVudHMvJHtzdHVkZW50SWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICBjbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHVkZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7aXNEZWxldGluZ1xyXG4gICAgICAgICAgICAgICAgPyA8TG9hZGVyIGFjdGl2ZSAvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3N0dWRlbnQuZnVsbE5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57c3R1ZGVudC5zdWJqZWN0MX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3N0dWRlbnQuc3ViamVjdDJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntzdHVkZW50LnN1YmplY3QzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdyZWQnIG9uQ2xpY2s9e29wZW59PkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgIG9wZW49e2NvbmZpcm19XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17Y2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuU3R1ZGVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0dWRlbnRzLyR7aWR9YCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgc3R1ZGVudDogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
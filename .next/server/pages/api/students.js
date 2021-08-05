(function() {
var exports = {};
exports.id = "pages/api/students";
exports.ids = ["pages/api/students"];
exports.modules = {

/***/ "./models/Student.js":
/*!***************************!*\
  !*** ./models/Student.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add a full name'],
    maxlength: [40, 'Name cannot be more than 40 characters']
  },
  subject1: {
    type: String,
    required: true,
    maxlength: [100, 'Subject name cannot be more than 100 characters']
  },
  subject2: {
    type: String,
    maxlength: [100, 'Subject name cannot be more than 100 characters']
  },
  subject3: {
    type: String,
    maxlength: [100, 'Suject name cannot be more than 100 characters']
  }
});
module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);

/***/ }),

/***/ "./pages/api/students/index.js":
/*!*************************************!*\
  !*** ./pages/api/students/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ "./utils/dbConnect.js");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Student */ "./models/Student.js");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Student__WEBPACK_IMPORTED_MODULE_1__);


(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const students = await _models_Student__WEBPACK_IMPORTED_MODULE_1___default().find({});
        res.status(200).json({
          success: true,
          data: students
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'POST':
      try {
        const student = await _models_Student__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);
        res.status(201).json({
          success: true,
          data: student
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    default:
      res.status(400).json({
        success: false
      });
      break;
  }
});

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb://porag:porag474@cluster0-shard-00-00.ghyba.mongodb.net:27017,cluster0-shard-00-01.ghyba.mongodb.net:27017,cluster0-shard-00-02.ghyba.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7d7pqq-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi9tb2RlbHMvU3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi9wYWdlcy9hcGkvc3R1ZGVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3J1ZC10ZXN0Ly4vdXRpbHMvZGJDb25uZWN0LmpzIiwid2VicGFjazovL2NydWQtdGVzdC9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU3R1ZGVudFNjaGVtYSIsIlNjaGVtYSIsImZ1bGxOYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwic3ViamVjdDEiLCJzdWJqZWN0MiIsInN1YmplY3QzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlN0dWRlbnQiLCJtb2RlbCIsImRiQ29ubmVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0dWRlbnRzIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJzdHVkZW50IiwiYm9keSIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxJQUFJRixRQUFRLENBQUNHLE1BQWIsQ0FBb0I7QUFDdENDLFVBQVEsRUFBRTtBQUNOQyxRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLHdCQUFQLENBRko7QUFJTkMsYUFBUyxFQUFFLENBQUMsRUFBRCxFQUFLLHdDQUFMO0FBSkwsR0FENEI7QUFPdENDLFVBQVEsRUFBRTtBQUNOSixRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFLElBRko7QUFHTkMsYUFBUyxFQUFFLENBQUMsR0FBRCxFQUFNLGlEQUFOO0FBSEwsR0FQNEI7QUFZdENFLFVBQVEsRUFBRTtBQUNOTCxRQUFJLEVBQUVDLE1BREE7QUFHTkUsYUFBUyxFQUFFLENBQUMsR0FBRCxFQUFNLGlEQUFOO0FBSEwsR0FaNEI7QUFpQnRDRyxVQUFRLEVBQUU7QUFDTk4sUUFBSSxFQUFFQyxNQURBO0FBR05FLGFBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSxnREFBTjtBQUhMO0FBakI0QixDQUFwQixDQUF0QjtBQXdCQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JDLE9BQWhCLElBQTJCZixRQUFRLENBQUNnQixLQUFULENBQWUsU0FBZixFQUEwQmQsYUFBMUIsQ0FBNUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQWUseURBQVM7QUFFVCwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQWFGLEdBQW5COztBQUVBLFVBQVFFLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsUUFBUSxHQUFHLE1BQU1OLDJEQUFBLENBQWEsRUFBYixDQUF2QjtBQUVBSSxXQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUo7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT0ssS0FBUCxFQUFjO0FBQ1pQLFdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUNKLFNBQUssTUFBTDtBQUNJLFVBQUk7QUFDQSxjQUFNRyxPQUFPLEdBQUcsTUFBTVosNkRBQUEsQ0FBZUcsR0FBRyxDQUFDVSxJQUFuQixDQUF0QjtBQUVBVCxXQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUU7QUFBdkIsU0FBckI7QUFDSCxPQUpELENBSUUsT0FBT0QsS0FBUCxFQUFjO0FBQ1pQLFdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUNKO0FBQ0lMLFNBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFyQlI7QUF1QkgsQ0ExQkQsRTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBLE1BQU1LLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlWixTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlZLFVBQVUsQ0FBQ0MsV0FBZixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQU1DLEVBQUUsR0FBRyxNQUFNL0IsdURBQUEsQ0FBaUJnQyx1UUFBakIsRUFBd0M7QUFDckRDLG1CQUFlLEVBQUUsSUFEb0M7QUFFckRDLHNCQUFrQixFQUFFO0FBRmlDLEdBQXhDLENBQWpCO0FBS0FMLFlBQVUsQ0FBQ0MsV0FBWCxHQUF5QkMsRUFBRSxDQUFDSSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDSDs7QUFFRCwrREFBZW5CLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsc0MiLCJmaWxlIjoicGFnZXMvYXBpL3N0dWRlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgU3R1ZGVudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZnVsbE5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIGZ1bGwgbmFtZSddLFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIHN1YmplY3QxOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzEwMCwgJ1N1YmplY3QgbmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDEwMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBzdWJqZWN0Mjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBcclxuICAgICAgICBtYXhsZW5ndGg6IFsxMDAsICdTdWJqZWN0IG5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAxMDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgc3ViamVjdDM6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTAwLCAnU3VqZWN0IG5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAxMDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuU3R1ZGVudCB8fCBtb25nb29zZS5tb2RlbCgnU3R1ZGVudCcsIFN0dWRlbnRTY2hlbWEpOyIsImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcclxuaW1wb3J0IFN0dWRlbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1N0dWRlbnQnO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBTdHVkZW50LmZpbmQoe30pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogc3R1ZGVudHMgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5jcmVhdGUocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogc3R1ZGVudCB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
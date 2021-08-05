(function() {
var exports = {};
exports.id = "pages/api/students/[id]";
exports.ids = ["pages/api/students/[id]"];
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

/***/ "./pages/api/students/[id].js":
/*!************************************!*\
  !*** ./pages/api/students/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ "./utils/dbConnect.js");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Student */ "./models/Student.js");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Student__WEBPACK_IMPORTED_MODULE_1__);


(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    query: {
      id
    },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const student = await _models_Student__WEBPACK_IMPORTED_MODULE_1___default().findById(id);

        if (!student) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: student
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'PUT':
      try {
        const student = await _models_Student__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!student) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: student
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'DELETE':
      try {
        const deletedStudent = await _models_Student__WEBPACK_IMPORTED_MODULE_1___default().deleteOne({
          _id: id
        });

        if (!deletedStudent) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: {}
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/students/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi9tb2RlbHMvU3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi9wYWdlcy9hcGkvc3R1ZGVudHMvW2lkXS5qcyIsIndlYnBhY2s6Ly9jcnVkLXRlc3QvLi91dGlscy9kYkNvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vY3J1ZC10ZXN0L2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJTdHVkZW50U2NoZW1hIiwiU2NoZW1hIiwiZnVsbE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJzdWJqZWN0MSIsInN1YmplY3QyIiwic3ViamVjdDMiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiU3R1ZGVudCIsIm1vZGVsIiwiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInN0dWRlbnQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImJvZHkiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlZFN0dWRlbnQiLCJfaWQiLCJjb25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJkYiIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ3RDQyxVQUFRLEVBQUU7QUFDTkMsUUFBSSxFQUFFQyxNQURBO0FBRU5DLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyx3QkFBUCxDQUZKO0FBSU5DLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyx3Q0FBTDtBQUpMLEdBRDRCO0FBT3RD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LGNBQUksRUFBRTtBQUF2QixTQUFyQjtBQUNILE9BUkQsQ0FRRSxPQUFPQyxLQUFQLEVBQWM7QUFDWlQsV0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSVAsU0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQTdDUjtBQStDSCxDQXJERCxFOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUEsTUFBTVEsVUFBVSxHQUFHLEVBQW5COztBQUVBLGVBQWVqQixTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlpQixVQUFVLENBQUNDLFdBQWYsRUFBNEI7QUFDeEI7QUFDSDs7QUFFRCxRQUFNQyxFQUFFLEdBQUcsTUFBTXBDLHVEQUFBLENBQWlCcUMsdVFBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBRTtBQUZpQyxHQUF4QyxDQUFqQjtBQUtBTCxZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ksV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0g7O0FBRUQsK0RBQWV4QixTQUFmLEU7Ozs7Ozs7Ozs7O0FDakJBLHNDIiwiZmlsZSI6InBhZ2VzL2FwaS9zdHVkZW50cy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgU3R1ZGVudFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZnVsbE5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIGZ1bGwgbmFtZSddLFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIHN1YmplY3QxOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzEwMCwgJ1N1YmplY3QgbmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDEwMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBzdWJqZWN0Mjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBcclxuICAgICAgICBtYXhsZW5ndGg6IFsxMDAsICdTdWJqZWN0IG5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAxMDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgc3ViamVjdDM6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTAwLCAnU3VqZWN0IG5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAxMDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuU3R1ZGVudCB8fCBtb25nb29zZS5tb2RlbCgnU3R1ZGVudCcsIFN0dWRlbnRTY2hlbWEpOyIsImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcclxuaW1wb3J0IFN0dWRlbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1N0dWRlbnQnO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgICAgIG1ldGhvZFxyXG4gICAgfSA9IHJlcTtcclxuXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHVkZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBzdHVkZW50IH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IFN0dWRlbnQuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc3R1ZGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogc3R1ZGVudCB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRTdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5kZWxldGVPbmUoeyBfaWQ6IGlkIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZGVsZXRlZFN0dWRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
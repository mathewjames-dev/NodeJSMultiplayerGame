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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./public/scripts/components/chat/chat.js":
/*!************************************************!*\
  !*** ./public/scripts/components/chat/chat.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Front-end Chat Class\r\n *\r\n ***/\r\n\r\nvar chatText = document.getElementById('chat-text');\r\nvar chatInput = document.getElementById('chat-input');\r\nvar chatForm = document.getElementById('chat-form');\r\nvar typing = false;\r\n\r\n// Function for when the chat submit has been clicked.\r\nchatForm.onsubmit = (e) => {\r\n    // Prevent the form from refreshing the page\r\n    e.preventDefault();\r\n\r\n    // Call sendMsgToServer socket function, with form text value as argument\r\n    socket.emit('sendMsgToServer', { username: game.player.username, text: chatInput.value });\r\n    chatInput.value = \"\";\r\n}\r\n\r\n// Add a chat block to the list view and scroll to the bottom upon successful message receive.\r\nsocket.on('broadcastMessage', (data) => {\r\n    console.log('CLIENT: Received chat message.');\r\n    chatText.innerHTML += '<div class=\"chatCell\">' + data.username + ': ' + data.text + '</div>';\r\n    chatText.scrollTop = chatText.scrollHeight;\r\n});\r\n\r\n// Add a global event listener for when the dom has been loaded.\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    // Focus event listener for the chat input. Once focused we set the global typing variable to true.\r\n    document.getElementById('chat-input').addEventListener('focus', function () {\r\n        typing = true;\r\n    });\r\n\r\n    // When the user is not focused on the chat we can set the global typing variable to false.\r\n    document.getElementById('chat-input').addEventListener('blur', function () {\r\n        typing = false;\r\n    });\r\n});\r\n\r\n// Event listener for a key up event.\r\ndocument.onkeyup = (event) => {\r\n\r\n    // User pressed the enter key.\r\n    if (event.keyCode === 13) {\r\n\r\n        // If the user isn't typing.\r\n        if (!typing) {\r\n            // Focus on the chat input.\r\n            chatInput.focus();\r\n        } else {\r\n            // User did send a message, unfocus the chat input.\r\n            chatInput.blur();\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./public/scripts/components/chat/chat.js?");

/***/ }),

/***/ "./public/scripts/components/game/canvas/canvas.js":
/*!*********************************************************!*\
  !*** ./public/scripts/components/game/canvas/canvas.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/***\r\n *\r\n * Canvas Front-end File\r\n * This will be utilized to house the canvas related elements for the game.\r\n *\r\n ***/\r\nconst PlayerRender = __webpack_require__(/*! ./entities/player/playerRender */ \"./public/scripts/components/game/canvas/entities/player/playerRender.js\");\r\nconst MapRender = __webpack_require__(/*! ./map/render */ \"./public/scripts/components/game/canvas/map/render.js\");\r\n\r\nclass Canvas {\r\n    constructor() {\r\n        this.mapRender = new MapRender;\r\n        this.playerRender = new PlayerRender;\r\n\r\n        this.inventoryDrawn = false;\r\n    }\r\n\r\n    async drawStates(updatePackage) {\r\n        // Duplicate the player canvas.\r\n        // Draw the players - DONE\r\n        // Draw npcs - DONE\r\n        // Write the duplicated canvas to the main canvas. (Should prevent any mis-timings and missing images for 1 second during animation)\r\n      //  var contextDuplication = playerContext.canvas.cloneNode();\r\n        playerContext.clearRect(0, 0, mapCanvasBelow.width, mapCanvasBelow.height);\r\n\r\n        this.drawNPCStates(updatePackage.player.mapData.npcs);\r\n\r\n        this.drawPlayerStates(updatePackage.players); \r\n    }\r\n\r\n    // Function to draw the player states / sprites.\r\n    async drawPlayerStates(players) {\r\n        // Draw the players first and foremost.\r\n        for (let id in players) {\r\n            let player = players[id];\r\n            if (!player) continue;\r\n            this.playerRender.drawSprite(player);\r\n        }\r\n    }\r\n\r\n    // Function to draw the npc states / sprites.\r\n    async drawNPCStates(npcs) {\r\n        // Loop the players within the update package object that we're passed to then draw the player states\r\n        for (let name in npcs) {\r\n            let npc = npcs[name];\r\n            if (!npc) continue;\r\n            this.playerRender.drawSprite(npc, true);\r\n        }\r\n    }\r\n\r\n    // Function to do all the current player rendering / drawing.\r\n    async drawPlayerUpdate(player) {\r\n        // Utilize the player object within the update package to draw the current players health.\r\n        let hpWidth = 30 * player.health / 100;\r\n\r\n        playerContext.fillStyle = 'red';\r\n        playerContext.fillRect(player.x - hpWidth / 2, player.y - 30, hpWidth, 4); //Draw the health bar\r\n    }\r\n\r\n    // Function to draw the player inventory. (We only draw the inventory once).\r\n    async drawPlayerInventory(inventory) {\r\n        //WE NEED TO LOAD THE IMAGES IF THEY HAVENT BEEN LOADED ALREADY\r\n        let inventoryList = $('#inventory-list');\r\n        inventoryList.html(\"\");\r\n        for (let i = 0; i < inventory.maxSlots; i++) {\r\n            let item = inventory.items[i];\r\n            if (!item) {\r\n                // Implement an empty item slot\r\n                inventoryList.append(\"<li>\" +\r\n                    \"<div class='item'>\" +\r\n                    \"</div> \" +\r\n                    \"</li>\");\r\n            } else {\r\n                // Load the item sound.\r\n                if (!game.assetLoader.sounds[item.name] && item.properties.sound) {\r\n                    game.assetLoader.addSound(item.name, item.properties.sound);\r\n                    await game.assetLoader.loadSounds();\r\n                }\r\n\r\n                // Implement the item\r\n                inventoryList.append(\"<li>\" +\r\n                    \"<div data-id='\" + item.id + \"' data-name='\" + item.name + \"' class= 'item'> \" +\r\n                    \"<img src='\" + item.image + \"'/>\" +\r\n                    \"</div> \" +\r\n                    \"</li>\");\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Canvas;\n\n//# sourceURL=webpack:///./public/scripts/components/game/canvas/canvas.js?");

/***/ }),

/***/ "./public/scripts/components/game/canvas/entities/player/playerRender.js":
/*!*******************************************************************************!*\
  !*** ./public/scripts/components/game/canvas/entities/player/playerRender.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Player Render Front-end File\r\n * This will be utilized to house the player rendering for the game.\r\n *\r\n ***/\r\nclass PlayerRender {\r\n    // Function to draw the players sprite.\r\n    drawSprite(entity, npc = false) {\r\n\r\n        // Ensure the sprite image has been fully loaded.\r\n        if (!game.assetLoader.images[entity.sprite.name] || !game.assetLoader.images[entity.sprite.name].status == 'loaded') return;\r\n        playerContext.beginPath();\r\n\r\n        //Drawing the image\r\n        playerContext.drawImage(game.assetLoader.images[entity.sprite.name],\r\n            entity.sprite.animation.srcX,\r\n            entity.sprite.animation.srcY,\r\n            entity.sprite.spriteWidth,\r\n            entity.sprite.spriteHeight,\r\n            entity.x - entity.sprite.spriteWidth / 2,\r\n            entity.y - entity.sprite.spriteHeight / 2,\r\n            entity.sprite.spriteWidth,\r\n            entity.sprite.spriteHeight);\r\n    }\r\n}\r\n\r\nmodule.exports = PlayerRender;\n\n//# sourceURL=webpack:///./public/scripts/components/game/canvas/entities/player/playerRender.js?");

/***/ }),

/***/ "./public/scripts/components/game/canvas/map/render.js":
/*!*************************************************************!*\
  !*** ./public/scripts/components/game/canvas/map/render.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Map Render Front-end File\r\n * This will be utilized to house the map rendering for the game.\r\n *\r\n ***/\r\nclass MapRender {\r\n    constructor() {\r\n        this.contextBelow = mapContextBelow;\r\n        this.contextAbove = mapContextAbove;\r\n        this.mapLayers = [];\r\n        this.mapTilesets = [];\r\n        this.loadedTilesets = 0;\r\n    }\r\n\r\n    // Function to load the map data (Sounds and tilesets).\r\n    async loadMap(mapData) {\r\n        let $this = this;\r\n        await this.loadMapSounds(mapData.data)\r\n            .then(this.loadNPCs(mapData))\r\n            .then(this.loadMapTileset(mapData.data));\r\n    }\r\n\r\n    // Function to load the map sounds.\r\n    async loadMapSounds(mapData) {\r\n        // Check to see if the map has any background music also.\r\n        for (let p in mapData.properties) {\r\n            let prop = mapData.properties[p];\r\n            if (prop.name === 'sound' && !game.assetLoader.sounds['background']) {\r\n                // Map has background music\r\n                game.assetLoader.addSound(\"background\", \"/public/assets/sounds/\" + prop.value);\r\n            }\r\n        }\r\n\r\n        // Then we can loop the layers and add in the layer sounds.\r\n        for (let l in mapData.layers) {\r\n            let layer = mapData.layers[l];\r\n            let properties = layer.properties;\r\n            for (let p in properties) {\r\n                let prop = properties[p];\r\n                if (prop.name === 'sound' && !game.assetLoader.sounds[prop.value]) {\r\n                        game.assetLoader.addSound(prop.value, \"/public/assets/sounds/\" + prop.value);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    // Function to load the npcs upon authentication.\r\n    async loadNPCs(mapData) {\r\n        for (let name in mapData.npcs) {\r\n            let npc = mapData.npcs[name];\r\n            if (!npc) continue;\r\n            game.assetLoader.addImage(npc.sprite.name, npc.sprite.location);\r\n        }\r\n    }\r\n\r\n    // Function to load the map tilesets.\r\n    async loadMapTileset(json) {\r\n        this.mapData = json;\r\n\r\n        for (let t = 0; t <= json.tilesets.length; t++) {\r\n            let tileset = json.tilesets[t];\r\n            if (!tileset) continue;\r\n\r\n            let $this = this;\r\n            let src = tileset.image;\r\n\r\n            this.mapTilesets[tileset.name] = new Image();\r\n            this.mapTilesets[tileset.name].name = tileset.name;\r\n            this.mapTilesets[tileset.name].src = '/public/assets/maps/tilesets/' + src;\r\n            this.mapTilesets[tileset.name].gid = tileset.firstgid;\r\n            this.mapTilesets[tileset.name].onload = function () {\r\n                $this.loadedTileset();\r\n            }\r\n        }\r\n\r\n        for (let name in json.npcs) {\r\n            let npc = json.npcs[name];\r\n            if (game.assetLoader.images[npc.sprite.name]) continue;\r\n            // We need to add a check to see if the npcs image has already been loaded\r\n            // If not we can then add that image.\r\n            game.assetLoader.addImage(npc.sprite.name,\r\n                npc.sprite.location);\r\n        }\r\n    }\r\n\r\n    // Function that gets fired upon finished loading of a tileset.\r\n    loadedTileset() {\r\n        this.loadedTilesets++;\r\n\r\n        // If all the tilesets have been loaded - We can begin to render the map layers.\r\n        if (this.loadedTilesets === this.mapData.tilesets.length) {\r\n            this.renderMapLayers();\r\n        }\r\n    }\r\n\r\n\r\n    // Function to render the map layers - The layer parameter is optional.\r\n    renderMapLayers(layers) {\r\n        let $this = this;\r\n\r\n        layers = $.isArray(layers) ? layers : this.mapData.layers;\r\n\r\n        $.each(layers, function (index, value) {\r\n            $this.renderMapLayer($(this)[0]);\r\n        });\r\n    }\r\n\r\n    // Function to render the actual map layer.\r\n    renderMapLayer(layer) {\r\n        if (layer.type !== 'tilelayer' || !layer.opacity) {\r\n            return;\r\n        }\r\n\r\n        var layerAbove = false;\r\n\r\n        // Determine if the layer is above or below utilising the layer properties.\r\n        if (layer.properties) {\r\n            for (let p in layer.properties) {\r\n                let property = layer.properties[p];\r\n                if (property.hasOwnProperty('name') && property['name'] === 'player' && property['value'] === 1) {\r\n                    layerAbove = true;\r\n                }\r\n            }\r\n        }\r\n\r\n        // Check layer above variable to determine what canvas context we use.\r\n        if (layerAbove) {\r\n            var contextDuplication = this.contextAbove.canvas.cloneNode();\r\n        } else {\r\n            var contextDuplication = this.contextBelow.canvas.cloneNode();\r\n        }\r\n\r\n        // Setup the variables - Also find the tileset we need to utilise based on the properties.\r\n        let tileset = layer.properties.find(function (property, index) {\r\n            if (property.name == 'tileset')\r\n                return true;\r\n        }),\r\n            rows = this.mapData.height,\r\n            columns = this.mapData.width,\r\n            size = this.mapData.tilewidth,\r\n            tilesetGid = this.mapTilesets[tileset.value].gid;\r\n\r\n        contextDuplication = contextDuplication.getContext(\"2d\");\r\n\r\n        // If the map hasn't been rendered already - We need to render it.\r\n        // if (this.mapLayers.length < this.mapData.layers.length) {\r\n        for (let c = 0; c < columns; c++) {\r\n            for (let r = 0; r < rows; r++) {\r\n                let tile = layer.data[r * columns + c];\r\n\r\n                if (tile !== 0) { // 0 => empty tile\r\n                    tile--;\r\n\r\n                    tile = tile - (tilesetGid - 1);\r\n\r\n                    let img_x = (tile % (this.mapTilesets[tileset.value].width / size)) * size;\r\n                    let img_y = ~~(tile / (this.mapTilesets[tileset.value].width / size)) * size;\r\n\r\n                    contextDuplication.drawImage(\r\n                        this.mapTilesets[tileset.value],\r\n                        img_x,\r\n                        img_y,\r\n                        size,\r\n                        size,\r\n                        (c * size),\r\n                        (r * size),\r\n                        size,\r\n                        size);\r\n                }\r\n            }\r\n        }\r\n\r\n        // Store the map so we can render faster next time, then draw to canvas.\r\n        this.mapLayers.push(contextDuplication.canvas.toDataURL());\r\n\r\n        if (layerAbove) {\r\n            this.contextAbove.drawImage(contextDuplication.canvas, 0, 0);\r\n        } else {\r\n            this.contextBelow.drawImage(contextDuplication.canvas, 0, 0);\r\n        }\r\n        // }\r\n        //else {\r\n        //  for (let i = 0; i <= this.mapLayers.length; i++) {\r\n        //    var image = $(\"<img />\", { src: this.mapLayers[i] })[0];\r\n        //  this.context.drawImage(image, 0, 0);\r\n        //  }\r\n        // }\r\n    }\r\n}\r\n\r\nmodule.exports = MapRender;\r\n\n\n//# sourceURL=webpack:///./public/scripts/components/game/canvas/map/render.js?");

/***/ }),

/***/ "./public/scripts/components/game/classes/assetManager.js":
/*!****************************************************************!*\
  !*** ./public/scripts/components/game/classes/assetManager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Asset Loader Front-end File\r\n * This will be utilized to house the assets for the game.\r\n *\r\n ***/\r\nclass AssetManager {\r\n    constructor() {\r\n        this.assetsLoaded = 0;\r\n\r\n        // Libraries\r\n        this.images = [];\r\n        this.sounds = [];\r\n    }\r\n\r\n    // Checks an asset to see if it has been loaded.\r\n    assetLoaded(array, name) {\r\n        // Ignore already loaded assets\r\n        if (this[array][name].status !== 'loading') return;\r\n\r\n        this[array][name].status = 'loaded';\r\n\r\n        this.assetsLoaded++;\r\n    }\r\n\r\n    // Loads all the assets.\r\n    async loadAssets() {\r\n        await game.assetLoader.loadImages();\r\n        await game.assetLoader.loadSounds();\r\n    }\r\n\r\n    /*\r\n     * Image Related Functions.\r\n     */\r\n    addImage(name, file) {\r\n        this.images[name] = file;\r\n    }\r\n\r\n    async loadImages() {\r\n        for (var image in this.images) {\r\n            let src = this.images[image];\r\n\r\n            if (!src) continue;\r\n            if (src.status == 'loaded' || src.status == 'loading') continue;\r\n\r\n            let $this = this;\r\n\r\n            this.images[image] = new Image();\r\n            this.images[image].status = 'loading';\r\n            this.images[image].name = image;\r\n            this.images[image].src = src;\r\n            this.images[image].onload = function () { $this.assetLoaded.call($this, \"images\", image) };\r\n        }\r\n    }  \r\n\r\n    /*\r\n     * Sound Related Functions\r\n     */\r\n    addSound(name, file) {\r\n        this.sounds[name] = file;\r\n    }\r\n\r\n    checkAudioState(sound) {\r\n        if (this.sounds[sound].status === 'loading'\r\n            && this.sounds[sound].readyState === 4) {\r\n            this.assetLoaded('sounds', sound);\r\n        }\r\n    }\r\n\r\n    async loadSounds() {\r\n        for (var sound in this.sounds) {\r\n            if (!this.sounds[sound]) continue;\r\n            if (this.sounds[sound].readyState === 0) continue;\r\n           \r\n            let $this = this;\r\n            let src = this.sounds[sound];\r\n            this.sounds[sound] = new Audio();\r\n            this.sounds[sound].status = 'loading';\r\n            this.sounds[sound].name = sound;\r\n            this.sounds[sound].addEventListener('canplay', function () {\r\n                $this.checkAudioState(sound);\r\n            });\r\n            this.sounds[sound].src = src;\r\n            this.sounds[sound].preload = 'auto';\r\n            this.sounds[sound].load();\r\n        }\r\n    }  \r\n}\r\n\r\nmodule.exports = AssetManager;\n\n//# sourceURL=webpack:///./public/scripts/components/game/classes/assetManager.js?");

/***/ }),

/***/ "./public/scripts/components/game/classes/soundManager.js":
/*!****************************************************************!*\
  !*** ./public/scripts/components/game/classes/soundManager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Sound Manager Class File.\r\n * This will be utilized to house the main game sound functions.\r\n *\r\n ***/\r\nclass SoundManager {\r\n    constructor() {\r\n        // Last Played Tiled Sound\r\n        this.lastPlayedTileSound = 0;\r\n    }\r\n\r\n    // Function to update the games sounds.\r\n    async updateSounds(updatePackage) {\r\n        for (let id in updatePackage.players) {\r\n            // Set our variables.\r\n            let player = updatePackage.players[id],\r\n                playerX = Math.round(player.x / 16),\r\n                playerY = Math.round(player.y / 16);\r\n\r\n            // Set the sound variable.\r\n            let sound = '';\r\n\r\n            // Loop the map data layers for the player and see which layers are sound related.\r\n            // Whichever are and if the tile is greater than 0 on that layer, we can set the sound to that value.\r\n            for (let l in player.mapData.data.layers) {\r\n                let layer = player.mapData.data.layers[l];\r\n                let properties = layer.properties;\r\n                for (let p in properties) {\r\n                    let prop = properties[p];\r\n                    if (prop.name === 'sound' && layer.data[playerY * player.mapData.data.width + playerX] > 0) {\r\n                        sound = prop.value;\r\n                    }\r\n                }\r\n            }\r\n\r\n            // If the player is moving we can then play the sound and set the last played tile sound.\r\n            if (player.movement.up || player.movement.down || player.movement.right || player.movement.left) {\r\n                if (game.assetLoader.sounds[sound]) {\r\n                    game.assetLoader.sounds[sound].play();\r\n                    game.lastPlayedTileSound = sound;\r\n                }\r\n            }\r\n            // Otherwise we pause the last played tiled sound for the player.\r\n            else {\r\n                if (game.assetLoader.sounds[game.lastPlayedTileSound]) {\r\n                    game.assetLoader.sounds[game.lastPlayedTileSound].pause();\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = SoundManager;\n\n//# sourceURL=webpack:///./public/scripts/components/game/classes/soundManager.js?");

/***/ }),

/***/ "./public/scripts/components/game/game.js":
/*!************************************************!*\
  !*** ./public/scripts/components/game/game.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/***\r\n *\r\n * Game Front-end File\r\n * This will be utilized to house the main game files and structure.\r\n *\r\n ***/\r\nconst GameSockets = __webpack_require__(/*! ./sockets/gameSockets */ \"./public/scripts/components/game/sockets/gameSockets.js\");\r\nconst AssetManager = __webpack_require__(/*! ./classes/assetManager */ \"./public/scripts/components/game/classes/assetManager.js\");\r\nconst SoundManager = __webpack_require__(/*! ./classes/soundManager */ \"./public/scripts/components/game/classes/soundManager.js\");\r\nconst Canvas = __webpack_require__(/*! ./canvas/canvas */ \"./public/scripts/components/game/canvas/canvas.js\");\r\nconst Input = __webpack_require__(/*! ./input/input */ \"./public/scripts/components/game/input/input.js\");\r\n\r\nclass Game {\r\n    constructor() {\r\n        // Will be utilized for all real time functionality.\r\n        this.gameSockets = new GameSockets;\r\n\r\n        // Will be utilized for all asset loading.\r\n        this.assetLoader = new AssetManager;\r\n\r\n        // Will be utilized for all sound functionality.\r\n        this.soundManager = new SoundManager;\r\n\r\n        // Will be utilized to house the game canvas and respective functions.\r\n        this.canvas = new Canvas;\r\n\r\n        // Will be utilized for all input functionality.\r\n        this.input = new Input;\r\n\r\n        this.loaded = 0;\r\n    }\r\n\r\n    // Function that is called upon authenticating.\r\n    async gameInit(initPackage) {\r\n        initPackage = JSON.parse(initPackage);\r\n\r\n        // Load the player sprite/s.\r\n        await this.loadPlayerSprites(initPackage.players);\r\n\r\n        // Load the map and add the map sounds.\r\n        await this.canvas.mapRender.loadMap(initPackage.player.mapData);\r\n\r\n        // Draw the player inventory.\r\n        await this.canvas.drawPlayerInventory(initPackage.player.inventory);\r\n\r\n        // Load all the assets in the asset loader.\r\n        await this.assetLoader.loadAssets();\r\n\r\n        // Start the game loop.\r\n        this.startGameLoop();\r\n    }\r\n\r\n    // Function to load the players sprites.\r\n    async loadPlayerSprites(players) {\r\n        for (let player in players) {\r\n            if (this.assetLoader.images[players[player].sprite.name]) continue;\r\n            // We need to add a check to see if the players image has already been loaded\r\n            // If not we can then add that image.\r\n            this.assetLoader.addImage(players[player].sprite.name,\r\n                players[player].sprite.location);\r\n        }\r\n\r\n        await this.assetLoader.loadAssets();\r\n    }\r\n\r\n    // Function to start the game loop on the client side.\r\n    startGameLoop() {\r\n        game.loaded = 1;\r\n\r\n        /*\r\n         * Temporary Code\r\n         */\r\n        $('#main-menu').hide();\r\n        $('#inventory').show();\r\n        $('.chatContainer').show();\r\n\r\n        if (game.assetLoader.sounds.background) {\r\n            game.assetLoader.sounds.background.volume = 0;\r\n            game.assetLoader.sounds.background.currentTime = 0;\r\n            game.assetLoader.sounds.background.loop = true;\r\n            game.assetLoader.sounds.background.play();\r\n            $(game.assetLoader.sounds.background).animate({\r\n                volume: 0.1\r\n            }, 2000);\r\n        }\r\n\r\n        setInterval(function () {\r\n            /*\r\n             * Player events.\r\n             */\r\n\r\n            socket.emit('playerMovement', game.input.getMovement());\r\n        }, 1000 / 60); // 30 Times per second\r\n    }\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./public/scripts/components/game/game.js?");

/***/ }),

/***/ "./public/scripts/components/game/input/input.js":
/*!*******************************************************!*\
  !*** ./public/scripts/components/game/input/input.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/***\r\n *\r\n * Input Front-end File\r\n * This will be utilized to house the main game input functions.\r\n *\r\n ***/\r\nclass Input {\r\n    constructor() {\r\n        this.up = false;\r\n        this.down = false;\r\n        this.left = false;\r\n        this.right = false;\r\n\r\n        this.addKeyDownListener();\r\n        this.addKeyUpListener();\r\n    }\r\n\r\n    // Adding the key down listeners within this function.\r\n    addKeyDownListener() {\r\n        // Key down event listener.\r\n        document.addEventListener('keydown', function (event) {\r\n            event.preventDefault();\r\n            switch (event.keyCode) {\r\n                case 65: // A\r\n                    game.input.left = true;\r\n                    break;\r\n                case 37: // Left arrow.\r\n                    game.input.left = true;\r\n                    break;\r\n\r\n                case 87: // W\r\n                    game.input.up = true;\r\n                    break;\r\n                case 38: // Up arrow.\r\n                    game.input.up = true;\r\n                    break;\r\n\r\n                case 68: // D\r\n                    game.input.right = true;\r\n                    break;\r\n                case 39: // Right arrow.\r\n                    game.input.right = true;\r\n                    break;\r\n\r\n                case 83: //S\r\n                    game.input.down = true;\r\n                    break;\r\n                case 40: // Down arrow.\r\n                    game.input.down = true;\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n\r\n    // Adding the key up listeners within this function.\r\n    addKeyUpListener() {\r\n        // Key up event listener.\r\n        document.addEventListener('keyup', function (event) {\r\n            event.preventDefault();\r\n            switch (event.keyCode) {\r\n                case 65: // A\r\n                    game.input.left = false;\r\n                    break;\r\n                case 37: // Left arrow.\r\n                    game.input.left = false;\r\n                    break;\r\n\r\n                case 87: // W\r\n                    game.input.up = false;\r\n                    break;\r\n                case 38: // Up arrow.\r\n                    game.input.up = false;\r\n                    break;\r\n\r\n                case 68: // D\r\n                    game.input.right = false;\r\n                    break;\r\n                case 39: // Right arrow.\r\n                    game.input.right = false;\r\n                    break;\r\n\r\n                case 83: //S\r\n                    game.input.down = false;\r\n                    break;\r\n                case 40: // Down arrow.\r\n                    game.input.down = false;\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n\r\n    // Function to return all the movement values as an object.\r\n    getMovement() {\r\n        return {\r\n            up: game.input.up,\r\n            down: game.input.down,\r\n            left: game.input.left,\r\n            right: game.input.right\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Input;\n\n//# sourceURL=webpack:///./public/scripts/components/game/input/input.js?");

/***/ }),

/***/ "./public/scripts/components/game/menu/authenticationMenu.js":
/*!*******************************************************************!*\
  !*** ./public/scripts/components/game/menu/authenticationMenu.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./public/scripts/components/game/game.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_0__);\n/***\r\n *\r\n * Authentication Menu Front-end File\r\n * This will be utilized to house the jQuery for the authentication menu\r\n * It will also login the user then initialize the game start for the user.\r\n *\r\n ***/\r\n\r\n\r\n\r\n$(function () {\r\n    $('.login').on('click', function () {\r\n        $('#login-register').hide();\r\n        $('#login-form').show();\r\n    });\r\n\r\n    $('.login-form-register').on('click', function () {\r\n        $('#login-form').hide();\r\n        $('#register-form').show();\r\n    });\r\n\r\n    $('.register').on('click', function () {\r\n        $('#login-register').hide();\r\n        $('#register-form').show();\r\n    });\r\n\r\n    $('.register-form-login').on('click', function () {\r\n        $('#register-form').hide();\r\n        $('#login-form').show();\r\n    });\r\n\r\n    // When the register form has been submitted we can then submit this to the server.\r\n    $('#register-form').on('submit', async function (e) {\r\n        e.preventDefault();\r\n        let data = $(this).serialize();\r\n        await routes.register(data, function (r) {\r\n            console.log(r);\r\n        });\r\n    });\r\n\r\n    // When the login form has been submitted, we can authenticate via the server and then initialize the game.\r\n    $('#login-form').on('submit', async function (e) {\r\n        e.preventDefault();\r\n        let data = $(this).serialize() + '&socket=' + socket.id;\r\n        await routes.login(data, async function (r) {\r\n            if (r.status === 200) {\r\n                global.game = new _game__WEBPACK_IMPORTED_MODULE_0__();\r\n                await game.gameInit(r.data.initPackage);\r\n            }\r\n        })\r\n    });\r\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./public/scripts/components/game/menu/authenticationMenu.js?");

/***/ }),

/***/ "./public/scripts/components/game/sockets/gameSockets.js":
/*!***************************************************************!*\
  !*** ./public/scripts/components/game/sockets/gameSockets.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/***\r\n *\r\n * Game Sockets Front-end File\r\n * This will be utilized to house the game sockets.\r\n *\r\n ***/\r\nclass GameSockets {\r\n    constructor() {\r\n        this.playerSockets();\r\n    }\r\n\r\n    // Function that will house all the player related socket functions.\r\n    playerSockets() {\r\n        // Listening for the game update package from the server side game loop.\r\n        socket.on('gameUpdate', async (updatePackage) => {\r\n            updatePackage = JSON.parse(updatePackage);\r\n            if (global.game && game.loaded == 1) {\r\n                // First we will draw the states -> This includes players, and other entities.\r\n                await game.canvas.drawStates(updatePackage)\r\n                    // Then we will draw the player related updates.\r\n                    .then(game.canvas.drawPlayerUpdate(updatePackage.player))\r\n\r\n                    // Then we will draw the players inventory.\r\n                    .then(async () => {\r\n                        // Check if the inventory needs to be redrawn.\r\n                        if (updatePackage.player.inventory.redraw === 1) {\r\n                            console.log(updatePackage.player.inventory);\r\n                            await game.canvas.drawPlayerInventory(updatePackage.player.inventory)\r\n                                .then(() => {\r\n                                    socket.emit('inventoryRedrawn');\r\n                                });\r\n                        }\r\n                    })\r\n\r\n                    // Then we can do all the sound updating.\r\n                    .then(game.soundManager.updateSounds(updatePackage))\r\n            }\r\n        });\r\n    }\r\n\r\n    // Function to increase the players health by the selected amount.\r\n    inventoryItemUsed(itemId) {\r\n        socket.emit('inventoryItemUsed', { itemId: itemId });\r\n    }\r\n}\r\n\r\nmodule.exports = GameSockets;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./public/scripts/components/game/sockets/gameSockets.js?");

/***/ }),

/***/ "./public/scripts/components/routes/auth/authRouting.js":
/*!**************************************************************!*\
  !*** ./public/scripts/components/routes/auth/authRouting.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/***\r\n *\r\n * Auth Routing Front-end File\r\n * This will be utilized to house the authentication routing.\r\n *\r\n ***/\r\nconst { default: Axios } = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\r\n\r\nclass AuthRouting {\r\n    constructor() { }\r\n\r\n    async register(data, cb) {\r\n        Axios.post('/auth/register', data)\r\n            .then(function (res) {\r\n                cb(res)\r\n            }).catch(function (error) {\r\n                console.log(error);\r\n            });\r\n    }\r\n\r\n    async login(data, cb) {\r\n        Axios.post('/auth/login', data)\r\n            .then(function (res) {\r\n                cb(res);\r\n            })\r\n            .catch(function (error) {\r\n                console.log(error);\r\n            });\r\n    }\r\n}\r\n\r\nmodule.exports = AuthRouting;\n\n//# sourceURL=webpack:///./public/scripts/components/routes/auth/authRouting.js?");

/***/ }),

/***/ "./public/scripts/components/routes/routes.js":
/*!****************************************************!*\
  !*** ./public/scripts/components/routes/routes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/***\r\n *\r\n * Routes Front-end File\r\n * This will be utilized to house the front-end routing.\r\n *\r\n ***/\r\nconst AuthRouting = __webpack_require__(/*! ./auth/authRouting */ \"./public/scripts/components/routes/auth/authRouting.js\");\r\nconst { default: Axios } = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\r\n\r\nclass Routing extends AuthRouting {\r\n    constructor() {\r\n        super();\r\n    }\r\n}\r\n\r\nmodule.exports = Routing;\n\n//# sourceURL=webpack:///./public/scripts/components/routes/routes.js?");

/***/ }),

/***/ "./public/scripts/constants.js":
/*!*************************************!*\
  !*** ./public/scripts/constants.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/***\r\n *\r\n * Constants Front-end File\r\n * This file will be utilized to house top level global variables.\r\n *\r\n ***/\r\nconst Routing = __webpack_require__(/*! ./components/routes/routes */ \"./public/scripts/components/routes/routes.js\");\r\n\r\n// Routing\r\nglobal.routes = new Routing();\r\n\r\n\r\n// Element Related Constants\r\nglobal.mapCanvasBelow = document.getElementById('mapContainerBelow');\r\nglobal.mapContextBelow = mapCanvasBelow.getContext(\"2d\");\r\nglobal.mapCanvasAbove = document.getElementById('mapContainerAbove');\r\nglobal.mapContextAbove = mapCanvasAbove.getContext(\"2d\");\r\nglobal.playerCanvas = document.getElementById('playerContainer');\r\nglobal.playerContext = playerCanvas.getContext(\"2d\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./public/scripts/constants.js?");

/***/ }),

/***/ "./public/scripts/main.js":
/*!********************************!*\
  !*** ./public/scripts/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/***\r\n *\r\n * Main Front-end File\r\n * This will be utilized to house the entry code for the game. \r\n * Everything will stem from here for web-pack too.\r\n *\r\n ***/\r\nconst constants = __webpack_require__(/*! ./constants */ \"./public/scripts/constants.js\");\r\n\r\n// Authentication Menu\r\nconst authentication = __webpack_require__(/*! ./components/game/menu/authenticationMenu */ \"./public/scripts/components/game/menu/authenticationMenu.js\");\r\n\r\n// Chat Box\r\nconst chat = __webpack_require__(/*! ./components/chat/chat */ \"./public/scripts/components/chat/chat.js\");\n\n//# sourceURL=webpack:///./public/scripts/main.js?");

/***/ })

/******/ });
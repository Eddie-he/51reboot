(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("echarts"));
  else if(typeof define === 'function' && define.amd)
    define(["echarts"], factory);
  else if(typeof exports === 'object')
    exports["dataTool"] = factory(require("echarts"));
  else
    root["echarts"] = root["echarts"] || {}, root["echarts"]["dataTool"] = factory(root["echarts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
      var echarts = __webpack_require__(1);
      echarts.dataTool = {
          version: '1.0.0',
          gexf: __webpack_require__(5),
          prepareBoxplotData: __webpack_require__(6)
      };
      return echarts.dataTool;
  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  var __WEBPACK_AMD_DEFINE_RESULT__;// GEXF File Parser
  // http://gexf.net/1.2draft/gexf-12draft-primer.pdf
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

      'use strict';
      var zrUtil = __webpack_require__(1).util;

      function parse(xml) {
          var doc;
          if (typeof xml === 'string') {
              var parser = new DOMParser();
              doc = parser.parseFromString(xml, 'text/xml');
          }
          else {
              doc = xml;
          }
          if (!doc || doc.getElementsByTagName('parsererror').length) {
              return null;
          }

          var gexfRoot = getChildByTagName(doc, 'gexf');

          if (!gexfRoot) {
              return null;
          }

          var graphRoot = getChildByTagName(gexfRoot, 'graph');

          var attributes = parseAttributes(getChildByTagName(graphRoot, 'attributes'));
          var attributesMap = {};
          for (var i = 0; i < attributes.length; i++) {
              attributesMap[attributes[i].id] = attributes[i];
          }

          return {
              nodes: parseNodes(getChildByTagName(graphRoot, 'nodes'), attributesMap),
              links: parseEdges(getChildByTagName(graphRoot, 'edges'))
          };
      }

      function parseAttributes(parent) {
          return parent ? zrUtil.map(getChildrenByTagName(parent, 'attribute'), function (attribDom) {
              return {
                  id: getAttr(attribDom, 'id'),
                  title: getAttr(attribDom, 'title'),
                  type: getAttr(attribDom, 'type')
              };
          }) : [];
      }

      function parseNodes(parent, attributesMap) {
          return parent ? zrUtil.map(getChildrenByTagName(parent, 'node'), function (nodeDom) {

              var id = getAttr(nodeDom, 'id');
              var label = getAttr(nodeDom, 'label');

              var node = {
                  id: id,
                  name: label,
                  itemStyle: {
                      normal: {}
                  }
              };

              var vizSizeDom = getChildByTagName(nodeDom, 'viz:size');
              var vizPosDom = getChildByTagName(nodeDom, 'viz:position');
              var vizColorDom = getChildByTagName(nodeDom, 'viz:color');
              // var vizShapeDom = getChildByTagName(nodeDom, 'viz:shape');

              var attvaluesDom = getChildByTagName(nodeDom, 'attvalues');

              if (vizSizeDom) {
                  node.symbolSize = parseFloat(getAttr(vizSizeDom, 'value'));
              }
              if (vizPosDom) {
                  node.x = parseFloat(getAttr(vizPosDom, 'x'));
                  node.y = parseFloat(getAttr(vizPosDom, 'y'));
                  // z
              }
              if (vizColorDom) {
                  node.itemStyle.normal.color = 'rgb(' +[
                      getAttr(vizColorDom, 'r') | 0,
                      getAttr(vizColorDom, 'g') | 0,
                      getAttr(vizColorDom, 'b') | 0
                  ].join(',') + ')';
              }
              // if (vizShapeDom) {
                  // node.shape = getAttr(vizShapeDom, 'shape');
              // }
              if (attvaluesDom) {
                  var attvalueDomList = getChildrenByTagName(attvaluesDom, 'attvalue');

                  node.attributes = {};

                  for (var j = 0; j < attvalueDomList.length; j++) {
                      var attvalueDom = attvalueDomList[j];
                      var attId = getAttr(attvalueDom, 'for');
                      var attValue = getAttr(attvalueDom, 'value');
                      var attribute = attributesMap[attId];

                      if (attribute) {
                          switch (attribute.type) {
                              case 'integer':
                              case 'long':
                                  attValue = parseInt(attValue, 10);
                                  break;
                              case 'float':
                              case 'double':
                                  attValue = parseFloat(attValue);
                                  break;
                              case 'boolean':
                                  attValue = attValue.toLowerCase() == 'true';
                                  break;
                              default:
                          }
                          node.attributes[attId] = attValue;
                      }
                  }
              }

              return node;
          }) : [];
      }

      function parseEdges(parent) {
          return parent ? zrUtil.map(getChildrenByTagName(parent, 'edge'), function (edgeDom) {
              var id = getAttr(edgeDom, 'id');
              var label = getAttr(edgeDom, 'label');

              var source
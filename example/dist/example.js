require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFetch = require('react-fetch');

var _reactFetch2 = _interopRequireDefault(_reactFetch);

var App = (function (_React$Component) {
  function App() {
    _classCallCheck(this, App);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(App, _React$Component);

  _createClass(App, [{
    key: 'onError',
    value: function onError(error) {
      console.log(error);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactFetch2['default'],
        { url: 'http://httpbin.org/headers', onError: this.onError },
        _react2['default'].createElement(TestComponent, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;

var TestComponent = (function (_React$Component2) {
  function TestComponent() {
    _classCallCheck(this, TestComponent);

    if (_React$Component2 != null) {
      _React$Component2.apply(this, arguments);
    }
  }

  _inherits(TestComponent, _React$Component2);

  _createClass(TestComponent, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        this.props.headers ? _react2['default'].createElement(
          'div',
          null,
          'Your User-Agent: ',
          this.props.headers['User-Agent']
        ) : 'loading'
      );
    }
  }]);

  return TestComponent;
})(_react2['default'].Component);

_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
module.exports = exports['default'];

},{"react":undefined,"react-fetch":undefined}]},{},[1]);

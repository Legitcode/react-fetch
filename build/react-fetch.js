'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var Fetch = (function (_Component) {
  _inherits(Fetch, _Component);

  function Fetch(props) {
    _classCallCheck(this, Fetch);

    _get(Object.getPrototypeOf(Fetch.prototype), 'constructor', this).call(this);
    this.state = {};
    this.fetchData(props);
  }

  _createClass(Fetch, [{
    key: 'fetchData',
    value: function fetchData(props) {
      var _this = this;

      var onSuccess = props.onSuccess;
      var onError = props.onError;
      var options = props.options;

      (0, _isomorphicFetch2['default'])(props.url, options || {}).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState(json);
        if (onSuccess) onSuccess(json);
      })['catch'](function (error) {
        if (onError) onError(error);
      });
    }
  }, {
    key: 'children',
    value: function children() {
      var _this2 = this;

      return _react.Children.map(this.props.children, function (child) {
        return (0, _react.cloneElement)(child, _this2.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        this.children()
      );
    }
  }]);

  return Fetch;
})(_react.Component);

exports['default'] = Fetch;
module.exports = exports['default'];
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const React, { Component } = require('react');
// const ReactDOM = require('react-dom');

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            signup: false,
            login: false,
            creditCard: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h2',
                null,
                'Hello World'
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaWdudXAiLCJsb2dpbiIsImNyZWRpdENhcmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsS0FEQztBQUVUQyxtQkFBTyxLQUZFO0FBR1RDLHdCQUFZO0FBSEgsU0FBYjtBQUZlO0FBT2xCOzs7O2lDQUVPO0FBQ0osbUJBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBQ0g7Ozs7RUFaYUMsTUFBTUMsUzs7QUFhdkI7O0FBRURDLFNBQVNDLE1BQVQsQ0FBaUIsb0JBQUMsR0FBRCxPQUFqQixFQUEwQkMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUExQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBSZWFjdCwgeyBDb21wb25lbnQgfSA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyBjb25zdCBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNpZ251cDogZmFsc2UsXG4gICAgICAgICAgICBsb2dpbjogZmFsc2UsXG4gICAgICAgICAgICBjcmVkaXRDYXJkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAgPGgyPkhlbGxvIFdvcmxkPC9oMj5cbiAgICB9XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoIDxBcHAgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSk7Il19
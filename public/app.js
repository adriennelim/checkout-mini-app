"use strict";

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
            signupForm: true,
            shippingInfoForm: false,
            creditCardForm: false
        };

        _this.handleSignupToShippingForm = _this.handleSignupToShippingForm.bind(_this);
        _this.handleShippingToCCForm = _this.handleShippingToCCForm.bind(_this);
        _this.handlePurchase = _this.handlePurchase.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleSignupToShippingForm",
        value: function handleSignupToShippingForm() {
            this.setState({
                signupForm: false,
                shippingInfoForm: true
            });
        }
    }, {
        key: "handleShippingToCCForm",
        value: function handleShippingToCCForm() {
            this.setState({
                shippingInfoForm: false,
                creditCardForm: true
            });
        }
    }, {
        key: "handlePurchase",
        value: function handlePurchase() {
            this.setState({
                creditCardForm: false,
                signupForm: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.signupForm) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Checkout Mini-App"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Signup"
                    ),
                    React.createElement(
                        "form",
                        { id: "signup" },
                        React.createElement(
                            "label",
                            null,
                            "Name:",
                            React.createElement("input", { name: "name", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Email:",
                            React.createElement("input", { name: "email", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Password:",
                            React.createElement("input", { name: "password", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: "submit", value: "Next", onClick: this.handleSignupToShippingForm })
                    )
                );
            }

            if (this.state.shippingInfoForm) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Checkout Mini-App"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Shipping Info"
                    ),
                    React.createElement(
                        "form",
                        { id: "shipping-info" },
                        React.createElement(
                            "label",
                            null,
                            "Address Line 1:",
                            React.createElement("input", { name: "address-line-one", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Address Line 2:",
                            React.createElement("input", { name: "address-line-two", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "City:",
                            React.createElement("input", { name: "city", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Zipcode:",
                            React.createElement("input", { name: "zipcode", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Phone Number:",
                            React.createElement("input", { name: "phone-number", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: "submit", value: "Next", onClick: this.handleShippingToCCForm })
                    )
                );
            }

            if (this.state.creditCardForm) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Checkout Mini-App"
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Credit Card Details"
                    ),
                    React.createElement(
                        "form",
                        { id: "shipping-info" },
                        React.createElement(
                            "label",
                            null,
                            "Credit Card Number:",
                            React.createElement("input", { name: "credit-card-number", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Expiry Date:",
                            React.createElement("input", { name: "expiry-date", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "CVV:",
                            React.createElement("input", { name: "cvv", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "label",
                            null,
                            "Billing Code:",
                            React.createElement("input", { name: "billing-code", className: "input-box" })
                        ),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: "submit", value: "Purchase", onClick: this.handlePurchase })
                    )
                );
            }
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJzaWdudXBGb3JtIiwic2hpcHBpbmdJbmZvRm9ybSIsImNyZWRpdENhcmRGb3JtIiwiaGFuZGxlU2lnbnVwVG9TaGlwcGluZ0Zvcm0iLCJiaW5kIiwiaGFuZGxlU2hpcHBpbmdUb0NDRm9ybSIsImhhbmRsZVB1cmNoYXNlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksSUFESDtBQUVUQyw4QkFBa0IsS0FGVDtBQUdUQyw0QkFBZ0I7QUFIUCxTQUFiOztBQU1BLGNBQUtDLDBCQUFMLEdBQWtDLE1BQUtBLDBCQUFMLENBQWdDQyxJQUFoQyxPQUFsQztBQUNBLGNBQUtDLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCRCxJQUE1QixPQUE5QjtBQUNBLGNBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFWZTtBQVdsQjs7OztxREFFNEI7QUFDekIsaUJBQUtHLFFBQUwsQ0FBYztBQUNWUCw0QkFBWSxLQURGO0FBRVZDLGtDQUFrQjtBQUZSLGFBQWQ7QUFJSDs7O2lEQUV3QjtBQUNyQixpQkFBS00sUUFBTCxDQUFjO0FBQ1ZOLGtDQUFrQixLQURSO0FBRVZDLGdDQUFnQjtBQUZOLGFBQWQ7QUFJSDs7O3lDQUVnQjtBQUNiLGlCQUFLSyxRQUFMLENBQWM7QUFDVkwsZ0NBQWdCLEtBRE47QUFFVkYsNEJBQVk7QUFGRixhQUFkO0FBSUg7OztpQ0FFTztBQUNKLGdCQUFJLEtBQUtELEtBQUwsQ0FBV0MsVUFBZixFQUEy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RUF2SGFFLE1BQU1DLFM7O0FBd0h2Qjs7QUFFREMsU0FBU0MsTUFBVCxDQUFpQixvQkFBQyxHQUFELE9BQWpCLEVBQTBCQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQTFCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IFJlYWN0LCB7IENvbXBvbmVudCB9ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIGNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2lnbnVwRm9ybTogdHJ1ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nSW5mb0Zvcm06IGZhbHNlLFxuICAgICAgICAgICAgY3JlZGl0Q2FyZEZvcm06IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVNpZ251cFRvU2hpcHBpbmdGb3JtID0gdGhpcy5oYW5kbGVTaWdudXBUb1NoaXBwaW5nRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNoaXBwaW5nVG9DQ0Zvcm0gPSB0aGlzLmhhbmRsZVNoaXBwaW5nVG9DQ0Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQdXJjaGFzZSA9IHRoaXMuaGFuZGxlUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTaWdudXBUb1NoaXBwaW5nRm9ybSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaWdudXBGb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIHNoaXBwaW5nSW5mb0Zvcm06IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTaGlwcGluZ1RvQ0NGb3JtKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNoaXBwaW5nSW5mb0Zvcm06IGZhbHNlLFxuICAgICAgICAgICAgY3JlZGl0Q2FyZEZvcm06IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVQdXJjaGFzZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjcmVkaXRDYXJkRm9ybTogZmFsc2UsXG4gICAgICAgICAgICBzaWdudXBGb3JtOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNpZ251cEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hlY2tvdXQgTWluaS1BcHA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2lnbnVwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2lnbnVwVG9TaGlwcGluZ0Zvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hpcHBpbmdJbmZvRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DaGVja291dCBNaW5pLUFwcDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5TaGlwcGluZyBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzaGlwcGluZy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyBMaW5lIDE6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWRkcmVzcy1saW5lLW9uZVwiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BZGRyZXNzIExpbmUgMjogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJhZGRyZXNzLWxpbmUtdHdvXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2l0eVwiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5aaXBjb2RlOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInppcGNvZGVcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmUgTnVtYmVyOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBob25lLW51bWJlclwiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTaGlwcGluZ1RvQ0NGb3JtfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3JlZGl0Q2FyZEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hlY2tvdXQgTWluaS1BcHA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Q3JlZGl0IENhcmQgRGV0YWlsczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2hpcHBpbmctaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjcmVkaXQtY2FyZC1udW1iZXJcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhwaXJ5IERhdGU6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZXhwaXJ5LWRhdGVcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q1ZWOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImN2dlwiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CaWxsaW5nIENvZGU6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYmlsbGluZy1jb2RlXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCIgb25DbGljaz17dGhpcy5oYW5kbGVQdXJjaGFzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufTtcblxuUmVhY3RET00ucmVuZGVyKCA8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpOyJdfQ==
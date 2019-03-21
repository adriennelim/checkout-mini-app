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
            homepage: true,
            signupForm: false,
            shippingInfoForm: false,
            creditCardForm: false,
            confirmationPage: false
        };

        _this.handleHomeToSignUp = _this.handleHomeToSignUp.bind(_this);
        _this.handleSignupToShippingForm = _this.handleSignupToShippingForm.bind(_this);
        _this.handleShippingToCCForm = _this.handleShippingToCCForm.bind(_this);
        _this.handleCCtoConfirmation = _this.handleCCtoConfirmation.bind(_this);
        _this.handlePurchase = _this.handlePurchase.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleHomeToSignUp",
        value: function handleHomeToSignUp() {
            this.setState({
                homepage: false,
                signupForm: true
            });
        }
    }, {
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
        key: "handleCCtoConfirmation",
        value: function handleCCtoConfirmation() {
            this.setState({
                creditCardForm: false,
                confirmationPage: true
            });
        }
    }, {
        key: "handlePurchase",
        value: function handlePurchase() {
            this.setState({
                confirmationPage: false,
                homepage: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.homepage) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Welcome!"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Buy this awesome thing"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handleHomeToSignUp },
                        "Checkout"
                    )
                );
            }

            if (this.state.signupForm) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Checkout"
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
                        "Checkout"
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
                        "Checkout"
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
                        React.createElement("input", { type: "submit", value: "Purchase", onClick: this.handleCCtoConfirmation })
                    )
                );
            }

            if (this.state.confirmationPage) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "Confirmation"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Name, Shipping Info, CC info"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.handlePurchase },
                        "Purchase"
                    )
                );
            }
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJob21lcGFnZSIsInNpZ251cEZvcm0iLCJzaGlwcGluZ0luZm9Gb3JtIiwiY3JlZGl0Q2FyZEZvcm0iLCJjb25maXJtYXRpb25QYWdlIiwiaGFuZGxlSG9tZVRvU2lnblVwIiwiYmluZCIsImhhbmRsZVNpZ251cFRvU2hpcHBpbmdGb3JtIiwiaGFuZGxlU2hpcHBpbmdUb0NDRm9ybSIsImhhbmRsZUNDdG9Db25maXJtYXRpb24iLCJoYW5kbGVQdXJjaGFzZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLElBREQ7QUFFVEMsd0JBQVksS0FGSDtBQUdUQyw4QkFBa0IsS0FIVDtBQUlUQyw0QkFBZ0IsS0FKUDtBQUtUQyw4QkFBa0I7QUFMVCxTQUFiOztBQVFBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLGNBQUtDLDBCQUFMLEdBQWtDLE1BQUtBLDBCQUFMLENBQWdDRCxJQUFoQyxPQUFsQztBQUNBLGNBQUtFLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCRixJQUE1QixPQUE5QjtBQUNBLGNBQUtHLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCSCxJQUE1QixPQUE5QjtBQUNBLGNBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFkZTtBQWVsQjs7Ozs2Q0FFb0I7QUFDakIsaUJBQUtLLFFBQUwsQ0FBYztBQUNWWCwwQkFBVSxLQURBO0FBRVZDLDRC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Y3QsIHsgQ29tcG9uZW50IH0gPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gY29uc3QgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBob21lcGFnZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpZ251cEZvcm06IGZhbHNlLFxuICAgICAgICAgICAgc2hpcHBpbmdJbmZvRm9ybTogZmFsc2UsXG4gICAgICAgICAgICBjcmVkaXRDYXJkRm9ybTogZmFsc2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb25QYWdlOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVIb21lVG9TaWduVXAgPSB0aGlzLmhhbmRsZUhvbWVUb1NpZ25VcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNpZ251cFRvU2hpcHBpbmdGb3JtID0gdGhpcy5oYW5kbGVTaWdudXBUb1NoaXBwaW5nRm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNoaXBwaW5nVG9DQ0Zvcm0gPSB0aGlzLmhhbmRsZVNoaXBwaW5nVG9DQ0Zvcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDQ3RvQ29uZmlybWF0aW9uID0gdGhpcy5oYW5kbGVDQ3RvQ29uZmlybWF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUHVyY2hhc2UgPSB0aGlzLmhhbmRsZVB1cmNoYXNlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSG9tZVRvU2lnblVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhvbWVwYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIHNpZ251cEZvcm06IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTaWdudXBUb1NoaXBwaW5nRm9ybSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaWdudXBGb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIHNoaXBwaW5nSW5mb0Zvcm06IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVTaGlwcGluZ1RvQ0NGb3JtKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNoaXBwaW5nSW5mb0Zvcm06IGZhbHNlLFxuICAgICAgICAgICAgY3JlZGl0Q2FyZEZvcm06IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDQ3RvQ29uZmlybWF0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNyZWRpdENhcmRGb3JtOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvblBhZ2U6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVQdXJjaGFzZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb25maXJtYXRpb25QYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIGhvbWVwYWdlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhvbWVwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5XZWxjb21lITwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkJ1eSB0aGlzIGF3ZXNvbWUgdGhpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVIb21lVG9TaWduVXB9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaWdudXBGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrb3V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlNpZ251cDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ251cFRvU2hpcHBpbmdGb3JtfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNoaXBwaW5nSW5mb0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2hlY2tvdXQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2hpcHBpbmcgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2hpcHBpbmctaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3MgTGluZSAxOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImFkZHJlc3MtbGluZS1vbmVcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyBMaW5lIDI6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWRkcmVzcy1saW5lLXR3b1wiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaXR5OiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNpdHlcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+WmlwY29kZTogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ6aXBjb2RlXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIE51bWJlcjogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwaG9uZS1udW1iZXJcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hpcHBpbmdUb0NDRm9ybX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNyZWRpdENhcmRGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkNoZWNrb3V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkNyZWRpdCBDYXJkIERldGFpbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNoaXBwaW5nLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DcmVkaXQgQ2FyZCBOdW1iZXI6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3JlZGl0LWNhcmQtbnVtYmVyXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkV4cGlyeSBEYXRlOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImV4cGlyeS1kYXRlXCIgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNWVjogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjdnZcIiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QmlsbGluZyBDb2RlOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImJpbGxpbmctY29kZVwiIGNsYXNzTmFtZT1cImlucHV0LWJveFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ0N0b0NvbmZpcm1hdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29uZmlybWF0aW9uUGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q29uZmlybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZSwgU2hpcHBpbmcgSW5mbywgQ0MgaW5mbzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVB1cmNoYXNlfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufTtcblxuUmVhY3RET00ucmVuZGVyKCA8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpOyJdfQ==
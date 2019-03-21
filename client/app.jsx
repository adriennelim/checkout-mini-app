// const React, { Component } = require('react');
// const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupForm: true,
            shippingInfoForm: false,
            creditCardForm: false
        }

        this.handleSignupToShippingForm = this.handleSignupToShippingForm.bind(this);
        this.handleShippingToCCForm = this.handleShippingToCCForm.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
    }

    handleSignupToShippingForm() {
        this.setState({
            signupForm: false,
            shippingInfoForm: true
        })
    }

    handleShippingToCCForm() {
        this.setState({
            shippingInfoForm: false,
            creditCardForm: true
        })
    }

    handlePurchase() {
        this.setState({
            creditCardForm: false,
            signupForm: true
        })
    }

    render(){
        if (this.state.signupForm) {
            return(
                <div>
                    <h2>Checkout Mini-App</h2>
                    <h3>Signup</h3>
                    <form id="signup">
                        <label>Name: 
                            <input name="name" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Email: 
                            <input name="email" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Password: 
                            <input name="password" className="input-box"/>
                        </label>
                        <br /><br />
                        <input type="submit" value="Next" onClick={this.handleSignupToShippingForm}/>
                    </form>
                </div>
            )
        }

        if (this.state.shippingInfoForm) {
            return(
                <div>
                    <h2>Checkout Mini-App</h2>
                    <h3>Shipping Info</h3>
                    <form id="shipping-info">
                        <label>Address Line 1: 
                            <input name="address-line-one" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Address Line 2: 
                            <input name="address-line-two" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>City: 
                            <input name="city" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Zipcode: 
                            <input name="zipcode" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Phone Number: 
                            <input name="phone-number" className="input-box"/>
                        </label>
                        <br /><br />
                        <input type="submit" value="Next" onClick={this.handleShippingToCCForm}/>
                    </form>
                </div>
            )
        }
        
        if (this.state.creditCardForm) {
            return(
                <div>
                    <h2>Checkout Mini-App</h2>
                    <h3>Credit Card Details</h3>
                    <form id="shipping-info">
                        <label>Credit Card Number: 
                            <input name="credit-card-number" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Expiry Date: 
                            <input name="expiry-date" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>CVV: 
                            <input name="cvv" className="input-box"/>
                        </label>
                        <br /><br />
                        <label>Billing Code: 
                            <input name="billing-code" className="input-box"/>
                        </label>
                        <br /><br />
                        <input type="submit" value="Purchase" onClick={this.handlePurchase} />
                    </form>
                </div>
            )
        }
    }
};

ReactDOM.render( <App />, document.querySelector('#app'));
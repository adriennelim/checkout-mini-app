// const React, { Component } = require('react');
// const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false,
            login: false,
            creditCard: false
        }
    }

    render(){
        return  <h2>Checkout Mini-App</h2>
    }
};

ReactDOM.render( <App />, document.querySelector('#app'));
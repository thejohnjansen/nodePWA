"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
var React = require('react');
var ReactDOM = require('react-dom');
class Hello extends React.Component {
    render() {
        return (React.createElement("h1", null, "Welcome to React!!"));
    }
}
exports.Hello = Hello;
ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map
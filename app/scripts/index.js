var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./components/index.js')

var messagingComponent = require('./components/index.jsx');
var TextAreaComponent = messagingComponent.TextAreaComponent;
var HeaderComponent = messagingComponent.HeaderComponent;


var chattersCollection = new model.ChattersCollection{
    chattersCollection.fetch();
    console.log(chattersCollection);


ReactDOM.render(
  React.createElement(HeaderComponent),
  document.getElementById('app')
);
ReactDOM.render(
  React.createElement(TextAreaComponent),
  document.getElementById('chat-box')
);

module.exports = {

}

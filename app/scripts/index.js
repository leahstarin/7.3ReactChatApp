var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var models = require('./models/models');
var chattersCollection = new models.ChattersCollection();
var messagingComponent = require('./components/index.jsx');
var TextAreaComponent = messagingComponent.TextAreaComponent;
var HeaderComponent = messagingComponent.HeaderComponent;
var ConvoComponent = messagingComponent.ConvoComponent;


ReactDOM.render(
  React.createElement(HeaderComponent),
  document.getElementById('app')
);
ReactDOM.render(
  React.createElement(TextAreaComponent, {collection: chattersCollection}),
  document.getElementById('chat-box')
);
ReactDOM.render(
  React.createElement(ConvoComponent),
  document.getElementById('convo')
);

// ReactDOM.render(
//   React.createElement(ChatFormComponent),
//   document.getElementById('')

chattersCollection.fetch()

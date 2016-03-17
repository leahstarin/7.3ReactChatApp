var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var HeaderComponent = React.createClass({
  render: function(){
        return (<div>
            <header className="header">C H A T</header>
               </div>
        );
      }

});

var ConvoComponent = React.createClass({
 render: function(){
   return(
     <div>

     <div className="convo"></div>

   </div>
   )
 }

});

var TextAreaComponent = React.createClass({
  handleClick: function(){
  console.log("hello!")
  console.log(this.props.collection)
  this.props.collection.each(function(msg){
    console.log(msg.get('content'))
    // var content = msg.get('content')
    // var username = msg.get('username')
    // var created_at = msg.get('created_at')
  })
    var ChatMessage = {"content":$(".form-control").val(),"time": Date.now()}
    this.props.collection.create(ChatMessage);
},





  render: function(){
        return (
          <div>
            <textarea className=" three form-control" placeholder="Chat here..." rows="3"></textarea>
            <button onClick={this.handleClick} type="button" name="button" className="comment-button"><i className=" fa fa-comment"></i>Chat</button>
          </div>

        );
      }

});




module.exports = {
'HeaderComponent' : HeaderComponent,
'TextAreaComponent' : TextAreaComponent,
'ConvoComponent' : ConvoComponent


};

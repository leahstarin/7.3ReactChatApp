var React = require('react');
var ReactDOM = require('react-dom');


var HeaderComponent = React.createClass({
  render: function(){
        return (<div>
            <header className="header"></header>
          </div>
        );
      }

});

var TextAreaComponent = React.createClass({
  render: function(){
        return (
          <div>
            <textarea className=" three form-control" placeholder="Chat here..." rows="3"></textarea>
            <button type="button" name="button" className="comment-button"><i className=" fa fa-comment"></i>Comment</button>
          </div>

        );
      }

});


module.exports = {
'HeaderComponent' : HeaderComponent,
'TextAreaComponent' : TextAreaComponent

};

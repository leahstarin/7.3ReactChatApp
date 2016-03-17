var Backbone = require('backbone');


var Chatters = Backbone.Model.extend({

});

var ChattersCollection = Backbone.Collection.extend({
  model: Chatters,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  parse: function(data){
    console.log(data);
    return data;
  }
});

module.exports = {
  "Chatters" : Chatters,
  "ChattersCollection" : ChattersCollection

}

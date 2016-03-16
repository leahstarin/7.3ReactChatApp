var Chatters = Backbone.Model.extend()


var ChattersCollection = Backbone.Collection.extend({
  parse: function(collections){
    return collections.messages;
    console.log(ChattersCollection)
  }
});

module.exports = {
  "Chatters" : Chatters,
  "ChattersCollection" : ChattersCollection

}

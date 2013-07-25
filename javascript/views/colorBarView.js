knotch.Views.ColorBarView = Backbone.View.extend({
  initialize: function (){
    this.template = $('#colorBar-template').html();
    this.collection.getSentiments();
    this.render();
  },

  render: function (){
    var totalWidth = window.innerWidth;
    var colorWidth = totalWidth*.675;
    var obj = {};
    obj.sentiments = this.collection.sentimentPerC;
    obj.colorWidth = colorWidth;
    var template = Handlebars.compile(this.template);
    var html = template(obj);
    this.$el.html(html);
  }

});

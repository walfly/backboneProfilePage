knotch.Views.UserDataView = Backbone.View.extend({
  initialize: function (argument){
    this.template = $('#userData-template').html();
    this.render();
  },
  render: function (){
    var context = this.model.toJSON();
    var template = Handlebars.compile(this.template);
    var html = template(context);
    this.$el.html(html);
  }
});
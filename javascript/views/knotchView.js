knotch.Views.KnotchView = Backbone.View.extend({
  initialize: function (){
    this.template = $('#knotch-template').html();
    this.render();
  },

  render: function (){
    var totalWidth = window.innerWidth;
    var colorWidth = totalWidth*.675;
    var context = this.model.toJSON();
    context.colorWidth = colorWidth;
    var template = Handlebars.compile(this.template);
    var html = template(context);
    this.$el.html(html);
  }
});
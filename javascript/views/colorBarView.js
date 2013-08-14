knotch.Views.ColorBarView = Backbone.View.extend({
  initialize: function (){
    this.template = $('#colorBar-template').html();
    this.collection.getSentiments();
    this.render();
  },

  events:{
    'click .color': 'filterBySentiment'
  },

  filterBySentiment: function (e){
    var targ = $(e.target);
    var data = targ.data('number');
    $('.colors').children().removeClass('selected');
    if(this.presenting !== data){
      targ.addClass('selected');
      this.presenting = data;
    } else {
      this.presenting = 50;
    }
    this.collection.trigger('select', data);
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

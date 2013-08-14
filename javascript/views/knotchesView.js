knotch.Views.KnotchesView = Backbone.View.extend({
  initialize: function (){
    this.render();
    this.collection.on('select', function(d){
      this.filteredRender(d);
    }, this);
  },

  filteredRender: function (d){
    this.$el.empty();
    if(this.presenting !== d){
      this.presenting = d;
      var knotches = this.collection.where({sentiment: d});
      _.each(knotches, function (item){
        var knotchView = new knotch.Views.KnotchView({model: item});
        this.$el.append(knotchView.el);
      }, this);
    } else {
      this.render();
    }
  },

  render: function (){
    this.collection.each(function (item){
      var knotchView = new knotch.Views.KnotchView({model: item});
      this.$el.append(knotchView.el);
    }, this);
  }
});
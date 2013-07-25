knotch.Views.AppView = Backbone.View.extend({

  initialize: function (){
    this.knotches = [];
    _.each(knotches, function (item){
      var aKnotch = new knotch.Models.KnotchModel(item);
      this.knotches.push(aKnotch);
    }, this);
    this.render();
  },

  render: function (){
    this.$el.empty()
    var topbar = new knotch.Views.NavbarView({model: this.model});
    this.$el.append(topbar.el);
    var userData = new knotch.Views.UserDataView({model: this.model});
    this.$el.append(userData.el);
    var knotchList = new knotch.Collections.KnotchCollection(this.knotches);
    var colorBar = new knotch.Views.ColorBarView({collection: knotchList});
    this.$el.append(colorBar.el);
    var knotchle = new knotch.Views.KnotchView({model: this.knotches[0]});
    this.$el.append(knotchle.el);
  }

});
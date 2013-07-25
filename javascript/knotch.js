var knotch = {
  Templates: {},
  Views: {},
  Models: {},
  Collections: {},
  init: function() {
    var user = new this.Models.UserModel(stephanie);
    this.app = new this.Views.AppView({model: user});
    $('body').append(this.app.$el);
  }
};
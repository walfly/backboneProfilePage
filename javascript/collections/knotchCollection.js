knotch.Collections.KnotchCollection = Backbone.Collection.extend({
  model: knotch.Models.KnotchModel,

  getSentiments: function (){
    var sentiments = this.pluck('sentiment');
    this.sentimentPerC = {};
    _.each(sentiments, function (item){
      if(!this.sentimentPerC[item]) this.sentimentPerC[item] = 0;
      this.sentimentPerC[item] += 1;
    }, this);
    _.each(this.sentimentPerC, function (item, key){
      this.sentimentPerC[key] = item/sentiments.length;
    }, this);
  }
});
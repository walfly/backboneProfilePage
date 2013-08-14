Handlebars.registerHelper('width', function (width, perC){
  return Math.floor(perC * width);
});

Handlebars.registerHelper('classNum', function (num){
  var keyStore = ['zero',0,'two',0,'four',0,'six',0,'eight',0,'ten',0,'twelve',0,'fourteen',0,'sixteen',0,'eighteen',0,'twenty'];
  return keyStore[num];
});

Handlebars.registerHelper('classNumKnotch', function (num){
  var keyStore = ['zero',0,'two',0,'four',0,'six',0,'eight',0,'tenK',0,'twelve',0,'fourteen',0,'sixteen',0,'eighteen',0,'twenty'];
  return keyStore[num];
});

Handlebars.registerHelper('floor', function (num){
  return Math.floor(num);
});

Handlebars.registerHelper('floorPlus', function (num){
  return Math.floor(num)+10;
});
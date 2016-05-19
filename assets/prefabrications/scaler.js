// var Parkour = Parkour || {};

// //calculate the dimensions of the game so that 100% of the screen is occupied
// Parkour.getGameLandscapeDimensions = function(max_w, max_h) {
//   //get both w and h of the screen (they might exchange)
//   var w = window.innerWidth * window.devicePixelRatio;
//   var h = window.innerHeight * window.devicePixelRatio;
  
//   //get the actual w and h
//   //Math.max/min return highest/lowest parameter
//   var landW = Math.max(w, h);
//   var landH = Math.min(w, h);
  
//   //do we need to scale to fit in width
//   if(landW > max_w) {
//     var ratioW = max_w / landW;
//     landW *= ratioW;
//     landH *= ratioW;
//   }
  
//   //do we need to scale to fit in height
//   // In scaler.js, line 22, instead of "var ratioH = max_w / landW;" it should be "var ratioH = max_h / landH;"
//   if(landH > max_h) {
//     // var ratioH = max_w / landW;
//     var ratioH = max_h / landH;
//     landW *= ratioH;
//     landH *= ratioH;
//   }
  
//   return {
//     w: landW,
//     h: landH
//   }
// }



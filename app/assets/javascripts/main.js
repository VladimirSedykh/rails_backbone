// Changes XML to JSON
function xmlToJson(xml) {

  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for(var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}



$(document).ready(function() {

  var canvas = document.getElementById('custom');

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

//    ctx.beginPath();
//    ctx.arc(75,75,50,0,Math.PI*2,false); // Outer circle
//    ctx.moveTo(0,175);
//    ctx.arc(175,175,50,0,Math.PI*2,false); // Outer circle
//    ctx.moveTo(175,0);
//    ctx.arc(122,122,50,0,Math.PI*2,false); // Outer circle
//    ctx.moveTo(110,75);
//    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
//    ctx.moveTo(65,65);
//    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
//    ctx.moveTo(95,65);
//    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye

//    ctx.quadraticCurveTo(25,25,25,62.5);
//    ctx.quadraticCurveTo(25,100,50,100);
//    ctx.quadraticCurveTo(50,120,30,125);
//    ctx.quadraticCurveTo(60,120,65,100);
//    ctx.quadraticCurveTo(125,100,125,62.5);
//    ctx.quadraticCurveTo(125,25,75,25);

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.quadraticCurveTo(100,25,25,65);
    ctx.quadraticCurveTo(10,90,125,90);

    ctx.stroke();
  }

  var convas = document.getElementById('image');
  var ct = convas.getContext("2d");
  var img = document.getElementById("scream");
  ct.drawImage(img,0,0);

  var imgData = ct.getImageData(0, 0, convas.width, convas.height);

  for (var i=0; i<imgData.data.length; i += 4)
  {
    imgData.data[i] = 255 - imgData.data[i];
    imgData.data[i+1] = 255 - imgData.data[i+1];
    imgData.data[i+2] = 255 - imgData.data[i+2];
    imgData.data[i+3] = 255;
  }
  ct.putImageData(imgData,0,0);

  console.log(imgData);


});
function update() {
  var date = new Date();
  var hours = date.getHours();
  var minutes=  date.getMinutes();

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.font = "80px monospace";
  context.fillText(hours, 1, 58);
  context.fillText((minutes<10? "0": "") + minutes);

  var imageData = context.getImageData(0, 0, 128, 128);

  browser.browserAction.setIcon({imageData: imageData});
  browser.browserAction.setTitle({title: date.toString()});

  setTimeout(update, (60-date.getSeconds())*1000);
}

update();

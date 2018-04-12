var fs = require('fs'),
    args = require('system').args,
    page = require('webpage').create();

page.content = fs.read(args[1]);

page.viewportSize = {
  width:1024,
  height:1024
};

page.paperSize = {
  format: 'A3',
  orientation: 'potrait',
  margin: '0.5cm'
};

window.setTimeout(function () {
  page.render(args[1]);
  phantom.exit();
},1000);

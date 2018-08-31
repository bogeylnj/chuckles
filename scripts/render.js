var page = require('webpage').create();

console.log('Rendering image...');
page.open('build/tops.html', function() {
  page.viewportSize = { width: 1024, height: 768 };
  page.render('build/tops.png');
  phantom.exit();
});
console.log("\tRender complete");
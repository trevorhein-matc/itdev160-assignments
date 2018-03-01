(function(){
  var data = [
    {name: 'Emmet', description: 'Number one code snippet tool.', author: 'emmitio', url: 'https://atom.io/packages/emmet', downloads: 1662209, stars: 2534, image: "url"},
    {name: 'atom-beautify', description: 'It will clean up your code', author: 'Glavin001', url: 'https://atom.io/packages/atom-beautify', downloads: 4230740, stars: 4544, image: "url"},
    {name: 'ask-stack', description: 'Quickly get answers and code samples from Stack Overflow in Atom', author: 'Chris911', url: 'https://atom.io/packages/ask-stack', downloads: 47392, stars: 259, image: "url"},
  ];

  // Constructor function

  function Package (data) {
    this.name = date.name;
    this.description = date.description;
    this.author = date.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;

    this.getFormattedDownloads = function() {
      return this.downloads.toLocalString();
    }
    this.getFormattedStars = function() {
      return this.stars.toLocalString();
    }
  }

  //So you don't have to keep writing it out
  var getEl = function (id) {
    return document.getElementById(id);
  };

  var writePackageInto = function (package, selector) {
    var nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description');

    nameEl.textContent = package.name;
  };

  var emmet = new Package(data[0]);
  writePackageInto(emmet, 'p1');

  // date
  var today = new Date();
  var dateEl = document.getElementById('date');
  dateEl.textContent = today.toDateString();

  //load packages and write infor to page
  var emmet = new Package(data[0]);
  var p1Name = document.getElementById('p1-name');
  p1Name.textContent = emmet.name;


  for (var i = 0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package, package.selector)
  };


}());

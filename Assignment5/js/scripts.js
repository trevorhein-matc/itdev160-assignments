(function(){

var data = [
  {
    name: 'Emmet',
    description: 'Emmet is the number one code snippet tool used by front end developers. Emmet helps to create HTML and CSS faster with the use of snippets. It uses abbreviations that expand to valid HTML tags.',
    author: 'emmitio',
    url: 'https://atom.io/packages/emmet',
    downloads: 1662209,
    stars: 2534,
    image:  'images/pic1.jpg',
    selector: 'p1',
  },

  {
    name: 'Atom-Beautify',
    description: 'The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more.',
    author: 'Glavin001',
    url: 'https://atom.io/packages/atom-beautify',
    downloads: 4238988,
    stars: 4552,
    image:  'images/pic2.png',
    selector: 'p2',
  },

  {
    name: 'Git-Time-Machine',
    description: 'It shows you a visual plot of commits in your current file, over time. You can click on the timeplot, or hover over it and see all of the commits for a specific time range. You can also view the git-diff between the current version and the previous version, once a selection is made.',
    author: 'littlebee',
    url: 'https://atom.io/packages/git-time-machine',
    downloads: 291174,
    stars: 953,
    image:  'images/pic3.jpg',
    selector: 'p3',
  },

  {
    name: 'Project Manager',
    description:   'The Project Manager package provides quick and easy access for switching between projects in Atom. Save a project by typing “Project Manager: Save Project” into the Command Palette.',
    author: 'danielbrodin',
    url: 'https://atom.io/packages/project-manager',
    downloads: 788717,
    stars: 2082,
    image:  'images/pic4.jpg',
    selector: 'p4',
  },

  {
    name: 'Highlight Selected',
    description:   'The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.',
    author: 'richrace',
    url: 'https://atom.io/packages/highlight-selected',
    downloads: 1046266,
    stars: 2743,
    image:  'images/pic5.jpg',
    selector: 'p5',
  },

  {
    name: 'File Icons',
    description:   'The File Icons package displays specific and meaningful icons next to files in your file-tree, fuzzy-finder, and tabs. They help to visually parse file types with little effort. You can choose between colored or monochrome icons.',
    author: 'Unknown',
    url: 'https://atom.io/packages/file-icons',
    downloads: 4300809,
    stars: 4956,
    image:  'images/pic6.jpg',
    selector: 'p6',
  },

  {
    name: 'Pigments',
    description:   'The Pigments package displays colors in project files, wherever it parses a color to be. It’s super helpful to easily determine what a specific hex code might be, especially if the color isn’t labelled by a variable.',
    author: 'abe33',
    url: 'https://atom.io/packages/pigments',
    downloads: 2132755,
    stars: 3334,
    image:  'images/pic7.jpg',
    selector: 'p7',
  },

  {
    name: 'Minimap',
    description:   'The Minimap package displays a Minimap preview of your file on the right hand side of your editor. You can turn code highlights on and off, as well as change the preview to be on the left-hand side if you wish. It also has a ton of other customizations if you want to dig deeper.',
    author: 'Unknown',
    url: 'https://atom.io/packages/minimap',
    downloads: 4514836,
    stars: 5177,
    image:  'images/pic8.jpg',
    selector: 'p8',
  },

  {
    name: 'Atom Tabs Expose',
    description:   'Atom Tabs Exposé package enables you to quick tab over open files within Atom. It’s meant to mimic Mac OSX Exposé / Mission Control by showing the active tab, panes, and previews of each tab. If the Minimap package is present a thumbnail preview is shown, otherwise it defaults to a suitable file icon. If the File Icons package is installed, you will see file icons in the tabs of each pane.',
    author: 'mrodalgaard',
    url: 'https://atom.io/packages/expose',
    downloads: 62739,
    stars: 237,
    image:  'images/pic9.jpg',
    selector: 'p9',
  },

  {
    name: 'Pane Layout Plus',
    description:   'The Pane Layout Plus package allows you to easily organize and control the distribution of multiple panes in Atom. This package has shortcuts to jump between columns, and set column layouts.',
    author: 'chemoish',
    url: 'https://atom.io/packages/pane-layout-plus',
    downloads: 10156,
    stars: 46,
    image:  'images/pic10.jpeg',
    selector: 'p10',
  }
];


// This is creating an object for each index in the data array

function Package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.image = data.image;
  this.selector = data.selector;

  this.getFormattedDownloads = function() {
    return this.downloads.toLocaleString();
  };

  this.getFormattedStars = function() {
    return this.stars.toLocaleString();
  };
}

// Shortcut instead of typing out document.getElementById just use getEl()
 var getEl = function (id) {
   return document.getElementById(id);
 }


// The commented code below came from using '/**' above the var writePackageInfo and lets you describe them.

 /**
  * Write's the package object's data to the appropriate
  * DOM elements utilizing the package selector property.
  * @param  {Package} package  Package object
  * @return {void}
  */
 var writePackageInfo = function(package) {
   // Get reference to DOM elements
   // The selector  is the p_ + the back half of the HTML

   var selector = package.selector,
     nameEl = getEl(selector + '-name'),
     descEl = getEl(selector + '-description'),
     authEl = getEl(selector + '-author'),
     urlEl = getEl(selector + '-url'),
     downloadEl = getEl(selector + '-downloads'),
     starsEl = getEl(selector + '-stars');
     imageEl = getEl(selector + '-image')

     // Write package data to DOM elements
     nameEl.textContent = package.name;
     descEl.textContent = package.description;
     authEl.textContent = package.author;
     urlEl.href = package.urlEl;
     downloadEl.textContent = package.getFormattedDownloads();
     starsEl.textContent = package.getFormattedStars();
     imageEl.src = package.image;
 }

 //
 for (var i = 0; i < data.length; i++) {
   var package = new Package(data[i]);
   writePackageInfo(package);
 }


}());

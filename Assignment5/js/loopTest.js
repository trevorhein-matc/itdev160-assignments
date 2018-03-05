(function(){

// Constructor function for Package
  function Package(name, description, author, url, downloads, stars, image) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.url = url;
    this.downloads = downloads;
    this.stars = stars;
    this.image = image;
  }

// Create a Package object
var emmet = new Package (
  'Emmet',
  'Emmet is the number one code snippet tool used by front end developers. Emmet helps to create HTML and CSS faster with the use of snippets. It uses abbreviations that expand to valid HTML tags.', 'By: emmitio',
  'https://atom.io/packages/emmet',
  'Downloads: 1,662,209',
  'Stars: 2,534',
  'images/pic1.jpg');

// P1
document.getElementById("p1-name").innerHTML = emmet.name;
document.getElementById("p1-description").innerHTML = emmet.description;
document.getElementById("p1-author").innerHTML = emmet.author;
document.getElementById("p1-url").href = emmet.url;
document.getElementById("p1-downloads").innerHTML = emmet.downloads;
document.getElementById("p1-stars").innerHTML = emmet.stars;
document.getElementById("p1-image").src = emmet.image;

var atomBeautify = new Package (
  'Atom-Beautify',
  'The atom-beautify package will clean up your code, and make it more readable. It has support for a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more.',
  'By: Glavin001',
  'https://atom.io/packages/atom-beautify',
  '4,238,988',
  '4,552',
  'images/pic2.png'
)

//
document.getElementById("p2-name").innerHTML = atomBeautify.name;
document.getElementById("p2-description").innerHTML = atomBeautify.description;
document.getElementById("p2-author").innerHTML = atomBeautify.author;
document.getElementById("p2-url").href = atomBeautify.url;
document.getElementById("p2-downloads").innerHTML = atomBeautify.downloads;
document.getElementById("p2-stars").innerHTML = atomBeautify.stars;
document.getElementById("p2-image").src = atomBeautify.image;


var gitTimeMachine = new Package (
  'Git-Time-Machine',
  'It shows you a visual plot of commits in your current file, over time. You can click on the timeplot, or hover over it and see all of the commits for a specific time range. You can also view the git-diff between the current version and the previous version, once a selection is made.',
  'By: littlebee',
  'https://atom.io/packages/git-time-machine',
  '291,174',
  '953',
  'images/pic3.jpg'
)

//
document.getElementById("p3-name").innerHTML = gitTimeMachine.name;
document.getElementById("p3-description").innerHTML = gitTimeMachine.description;
document.getElementById("p3-author").innerHTML = gitTimeMachine.author;
document.getElementById("p3-url").href = gitTimeMachine.url;
document.getElementById("p3-downloads").innerHTML = gitTimeMachine.downloads;
document.getElementById("p3-stars").innerHTML = gitTimeMachine.stars;
document.getElementById("p3-image").src = gitTimeMachine.image;

var projectManager = new Package (
  'Project Manager',
  'The Project Manager package provides quick and easy access for switching between projects in Atom. Save a project by typing “Project Manager: Save Project” into the Command Palette.',
  'By: danielbrodin',
  'https://atom.io/packages/project-manager',
  '788,717',
  '2,082',
  'images/pic4.jpg'
)

//
document.getElementById("p4-name").innerHTML = projectManager.name;
document.getElementById("p4-description").innerHTML = projectManager.description;
document.getElementById("p4-author").innerHTML = projectManager.author;
document.getElementById("p4-url").href = projectManager.url;
document.getElementById("p4-downloads").innerHTML = projectManager.downloads;
document.getElementById("p4-stars").innerHTML = projectManager.stars;
document.getElementById("p4-image").src = projectManager.image;

var highlightSelected = new Package (
  'Highlight Selected',
  'The Highlight Selected package is super simple, it highlights the current word selected on double click. Especially useful if you’re looking for a particular method name or function within a file without having to open the find panel.',
  'By: richrace',
  'https://atom.io/packages/highlight-selected',
  '1,046,266',
  '2,743',
  'images/pic5.jpg'
)

//
document.getElementById("p5-name").innerHTML = highlightSelected.name;
document.getElementById("p5-description").innerHTML = highlightSelected.description;
document.getElementById("p5-author").innerHTML = highlightSelected.author;
document.getElementById("p5-url").href = highlightSelected.url;
document.getElementById("p5-downloads").innerHTML = highlightSelected.downloads;
document.getElementById("p5-stars").innerHTML = highlightSelected.stars;
document.getElementById("p5-image").src = highlightSelected.image;

var fileIcons = new Package (
  'File Icons',
  'The File Icons package displays specific and meaningful icons next to files in your file-tree, fuzzy-finder, and tabs. They help to visually parse file types with little effort. You can choose between colored or monochrome icons.',
  'By: Unknown',
  'https://atom.io/packages/file-icons',
  '4,300,809',
  '4,956',
  'images/pic6.jpg'
)

//
document.getElementById("p6-name").innerHTML = fileIcons.name;
document.getElementById("p6-description").innerHTML = fileIcons.description;
document.getElementById("p6-author").innerHTML = fileIcons.author;
document.getElementById("p6-url").href = fileIcons.url;
document.getElementById("p6-downloads").innerHTML = fileIcons.downloads;
document.getElementById("p6-stars").innerHTML = fileIcons.stars;
document.getElementById("p6-image").src = fileIcons.image;

var pigments = new Package (
  'Pigments',
  'The Pigments package displays colors in project files, wherever it parses a color to be. It’s super helpful to easily determine what a specific hex code might be, especially if the color isn’t labelled by a variable.',
  'By: abe33',
  'https://atom.io/packages/pigments',
  '2,132,755',
  '3334',
  'images/pic7.jpg'
)

//
document.getElementById("p7-name").innerHTML = pigments.name;
document.getElementById("p7-description").innerHTML = pigments.description;
document.getElementById("p7-author").innerHTML = pigments.author;
document.getElementById("p7-url").href = pigments.url;
document.getElementById("p7-downloads").innerHTML = pigments.downloads;
document.getElementById("p7-stars").innerHTML = pigments.stars;
document.getElementById("p7-image").src = pigments.image;

var minimap = new Package (
  'Minimap',
  'The Minimap package displays a Minimap preview of your file on the right hand side of your editor. You can turn code highlights on and off, as well as change the preview to be on the left-hand side if you wish. It also has a ton of other customizations if you want to dig deeper.',
  'By: Unknown',
  'https://atom.io/packages/minimap',
  '4,514,836',
  '5,177',
  'images/pic8.jpg'
)

//
document.getElementById("p8-name").innerHTML = minimap.name;
document.getElementById("p8-description").innerHTML = minimap.description;
document.getElementById("p8-author").innerHTML = minimap.author;
document.getElementById("p8-url").href = minimap.url;
document.getElementById("p8-downloads").innerHTML = minimap.downloads;
document.getElementById("p8-stars").innerHTML = minimap.stars;
document.getElementById("p8-image").src = minimap.image;

var atomTabs = new Package (
  'Atom Tabs Expose',
  'Atom Tabs Exposé package enables you to quick tab over open files within Atom. It’s meant to mimic Mac OSX Exposé / Mission Control by showing the active tab, panes, and previews of each tab. If the Minimap package is present a thumbnail preview is shown, otherwise it defaults to a suitable file icon. If the File Icons package is installed, you will see file icons in the tabs of each pane.',
  'By: mrodalgaard',
  'https://atom.io/packages/expose',
  '62,739',
  '237',
  'images/pic9.jpg'
)

//
document.getElementById("p9-name").innerHTML = atomTabs.name;
document.getElementById("p9-description").innerHTML = atomTabs.description;
document.getElementById("p9-author").innerHTML = atomTabs.author;
document.getElementById("p9-url").href = atomTabs.url;
document.getElementById("p9-downloads").innerHTML = atomTabs.downloads;
document.getElementById("p9-stars").innerHTML = atomTabs.stars;
document.getElementById("p9-image").src = atomTabs.image;

var paneLayout = new Package (
  'Pane Layout Plus',
  'The Pane Layout Plus package allows you to easily organize and control the distribution of multiple panes in Atom. This package has shortcuts to jump between columns, and set column layouts.',
  'By: chemoish',
  'https://atom.io/packages/pane-layout-plus',
  '10,156',
  '46',
  'images/pic10.jpeg'
)

//
document.getElementById("p10-name").innerHTML = paneLayout.name;
document.getElementById("p10-description").innerHTML = paneLayout.description;
document.getElementById("p10-author").innerHTML = paneLayout.author;
document.getElementById("p10-url").href = paneLayout.url;
document.getElementById("p10-downloads").innerHTML = paneLayout.downloads;
document.getElementById("p10-stars").innerHTML = paneLayout.stars;
document.getElementById("p10-image").src = paneLayout.image;

}());

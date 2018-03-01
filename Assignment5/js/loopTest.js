(function(){

  document.getElementById("p1-image").src = "https://www.w3schools.com/howto/img_fjords.jpg";

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
var emmet = new Package ('Emmet', 'Number one code snippet tool.', 'emmitio', 'https://atom.io/packages/emmet', '1,662,209', '2,534', 'url');

//
document.getElementById("p1-name").innerHTML = emmet.name;
document.getElementById("p1-description").innerHTML = emmet.description;
document.getElementById("p1-author").innerHTML = emmet.author;
document.getElementById("p1-url").innerHTML = emmet.url;
document.getElementById("p1-downloads").innerHTML = emmet.downloads;
document.getElementById("p1-stars").innerHTML = emmet.stars;
document.getElementById("p1-image").innerHTML = emmet.image;








}());

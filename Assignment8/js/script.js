var data = [
    {
      id: 1,
      title: 'Time',
      body: 'Time you enjoy wasting, was not wasted.',
      author: 'John Lennon'
    },
    {
      id: 2,
      title: 'Pain',
      body: 'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now.',
      author: 'Marcus Aurelius'
    },
    {
      id: 3,
      title: 'Words',
      body: 'Some people just have a way with words, and other people â€¦ oh â€¦ not have way.',
      author: 'Steve Martin'
    },
    {
      id: 4,
      title: 'Peace',
      body: 'If everyone demanded peace instead of another television set, then thereâ€™d be peace.',
      author: 'John Lennon'
    },
    {
      id: 5,
      title: 'Art',
      body: 'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of the pattern.',
      author: 'Alfred North Whitehead'
    }
  ];

// jQuery object variables
var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');
var $title = $('#quoteTitle');
var $body = $('#quoteBody');
var $source = $('#quoteAuthor');
var $submit = $('#quoteSubmit');

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    // Create Elements
    var postId = 'post-' + data[i].id,
      $post = $('<div class="post"></div>'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<blockquote></blockquote'),
      $author = $('<span class="author"></span'),
      $navItem = $('<li></li>');

    // Add post data
    $title.text(data[i].title);
    $body.text(data[i].body);
    $author.text(data[i].author);

    // Add nav item data
    $navItem.attr('id', data[i].id);
    $navItem.text(data[i].title);

    // Combine post Elements
    $post.attr('id', postId);
    $post.append($title);
    $post.append($body);
    $post.append($author);

    // Add post and nave elements to page
    $posts.append($post);
    $nav.append($navItem);

    // Wire up nav item click event
    $navItem.on('click', function(){
      var id = $(this).attr('id');
      $posts.children().hide();
      $posts.find('#post-' +id).fadeIn();
    });

    // hide all quotes and show the intro
    $posts.children('.post').hide();
    $intro.fadeIn(1000);

  }
}

initPosts();

$("#quoteSubmit").on('click', function(){
  var postId = 'post-' + data.length,
    $post = $('<div class="post"></div>'),
    $title = $('<h2 class="title"></h2>'),
    $body = $('<blockquote></blockquote'),
    $author = $('<span class="author"></span'),
    $navItem = $('<li></li>');

    $title.text($title.value);
    $body.text($body.value);
    $author.text($source.value);

    $navItem.attr('id', postId);
    $navItem.text($title.value);

    $post.attr('id', postId);
    $post.append($title);
    $post.append($body);
    $post.append($author);

    $posts.append($post);
    $nav.append($navItem);

    $title.value = '';
    $body.value = '';
    $author.value = '';
});

function addQuote() {

  var titleEl = $title;
  var bodyEl = $body;
  var quoteEl = $source;

  $submit.on('click', function(){
    if (titleEl.value != '' && bodyEl.value != '' && quoteEl.value != ''){
      var id = 'post-' + tasks.length;
      var quote = new NewQuote(id, titleEl.value, bodyEl.value, quoteEl.value)
      data.push(quote);

      titleEl.value = '';
      bodyEl.value = '';
      quoteEl.value = '';
    }
  });
}


/*
function addPost(event){
  var postId = 'post-' + data[i].id
}

function addTask (event) {
  // Get Input
  var inputEl = document.getElementById('input-task')
  if (inputEl.value != '') {
    // Create a unique id
    var id = data.length;

    // Create a new quote
    var data = new Quote(id, inputEl.value, taskStatus.active);
    data.push(data);

    // Add the task to the DOM
    addTaskElement(task);

    // Reset input
    inputEl.value = '';
  }
}

function init() {
    document.getElementById('add-task').onclick = addTask;
}

init();
*/

var replyMessages = [];

function ReplyMessage(type, user, text) {
  this.type = type;
  this.user = user;
  this.text = text;
}

function addReplyMessage(event) {
  var user, type, className;
  var messageInput = document.getElementById('message-input');
  var replyMessagesContainerEl = document.getElementById('reply-message-container');


// Determins message type based on button clicked.
  switch (event.target.id) {

    case 'reply-button':
      user = 'Chip';
      type = 'in';
      className = 'in-message';
      break;

    default:
      user = 'unknown';
      type = 'error';
      className = 'error-message';
  }

  // Create new replyMessages
  if (messageInput.value != '') {
    // Construct message and add to collection.
    var message = new ReplyMessage(type, user, messageInput.value);
    replyMessages.push(message);
  }

  // Create Element
  var messageText = document.createTextNode(message.text);
  var messageDivEl = document.createElement('div');
  var messageH2El = document.createElement('h2');

  messageDivEl.appendChild(messageH2El);
  messageH2El.appendChild(messageText);

  messageDivEl.className = className;

  // Add to DOM
  replyMessagesContainerEl.appendChild(messageDivEl);

  // Reset messageInput
  messageInput.value = '';
}

var replyInit = function() {
  // Wire event handlers - Not calling addReplyMessage so there isn't any ()
  document.getElementById('reply-button').onclick = addReplyMessage
}

// Calls the function and sets the onclicks
replyInit();

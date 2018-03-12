var messages = [];

function Message(type, user, text) {
  this.type = type;
  this.user = user;
  this.text = text;
}

function addMessage(event) {
  var user, type, className;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

// Determins message type based on button clicked.
  switch (event.target.id) {

    case 'send-button':
      user = 'Trevor';
      type = 'out';
      className = 'out-message';
      break;

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

  // Create new messages
  if (messageInput.value != '') {
    // Construct message and add to collection.
    var message = new Message(type, user, messageInput.value);
    messages.push(message);
  }

  // Create Element
  var messageText = document.createTextNode(message.text);
  var messageDivEl = document.createElement('div');
  var messageSpanEl = document.createElement('span');

  messageDivEl.appendChild(messageSpanEl);
  messageSpanEl.appendChild(messageText);

  messageDivEl.className = className;

  // Add to DOM
  messagesContainerEl.appendChild(messageDivEl);

  // Reset messageInput
  messageInput.value = '';
}

var init = function() {
  // Wire event handlers - Not calling addMessage so there isn't any ()
  document.getElementById('send-button').onclick = addMessage;

  document.getElementById('reply-button').onclick = addMessage
}

// Calls the function and sets the onclicks
init();

import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Header from './components/common/Header';
import Quote from './components/quote/Quote';
import AddQuoteForm from './components/common/AddQuoteForm';
import About from './components/about/About';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBFokA_XvWw58JhIHfOrnL336IexQk8AiQ",
  authDomain: "quotesapp-8a88a.firebaseapp.com",
  databaseURL: "https://quotesapp-8a88a.firebaseio.com",
  projectId: "quotesapp-8a88a",
  storageBucket: "quotesapp-8a88a.appspot.com",
  messagingSenderId: "467591564117"
};

var firebaseApp = firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    // Set up React State
    this.state = {
      quotes: []
    };
  }

  componentWillMount() {
    // Get db references
    let db = firebaseApp.database().ref('quotes');

    // Wire event handler for a new quote being added to firebaseApp
    // => is same as "function (snapshot) {}"
    db.on('child_added', (snapshot) => {
      // Update React state
      let data = snapshot.val();

      let quote = {
        id: snapshot.key,
        text: data.text,
        author: data.author
      };

      this.setState({ quotes: [quote].concat(this.state.quotes) });
    })
  }

  addQuote(quote) {
    // Get db reference, add new quote, then reset textboxes
    let db = firebaseApp.database().ref('quotes');
    db.push(quote);
  }

  render() {
    const { quotes } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <AddQuoteForm addQuote={this.addQuote} />
          <main>

            {/* { this.state.quotes.map(quote =>
              <Quote quote={quote} key={quote.id} />
            )} */}

            <Route exact={true} path="/" render={() => (
              quotes.map(quote =>
              <Quote quote={quote} key={quote.id} />
              )
            )} />

            <Route path="/about" component={About} />
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

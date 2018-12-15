import React, { Component } from 'react';
import {ApiAiClient} from "api-ai-javascript";
import TextInput from "./components/TextInput"
import './App.css';

const client = new ApiAiClient({accessToken: 'fa99515eae0b43fcb35eb58b43ae19d5'})


class App extends Component {
  	
  handleSend(userInput){
    client.textRequest(userInput)
    .then((response) => {console.log(response.result.fulfillment.speech)})
    .catch((error) => {console.log(error)})
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
        <TextInput handleSend = {this.handleSend} />

        </header>
      </div>
    );
  }
}

export default App;

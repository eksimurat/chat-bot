import React, { Component } from 'react';
import { ApiAiClient } from "api-ai-javascript";
import TextInput from "./components/TextInput"
import MessageList from "./components/MessageList"
import './styles/App.scss';


const client = new ApiAiClient({ accessToken: 'fa99515eae0b43fcb35eb58b43ae19d5' })


class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }
  
  handleSend(userInput) {
    client.textRequest(userInput)
      .then((response) => {
        console.log(response.result.fulfillment.speech)
        this.setState({
          messages: [response]
        })
       })
      .catch((error) => { console.log(error) })
  }

  render() {


    return (
      <div className="App">
        
          <MessageList messages={this.state.messages} />
          <TextInput handleSend={this.handleSend.bind(this)} />

        
      </div>
    );
  }
}

export default App;

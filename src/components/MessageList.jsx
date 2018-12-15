import React from 'react';
import "../styles/MessageList.scss"
export default class MessageList extends React.Component {
    render() {
      return (
        <div className="message">                 
          {this.props.messages.map(message => {
              if(message.sessionId){
                return (
                    <div key = {message.id} className = "message-holder">
                      
                        {message.result.fulfillment.speech}
                      </div>
                      
                  )
            }  
         })}
       </div>
      )
    }
  }
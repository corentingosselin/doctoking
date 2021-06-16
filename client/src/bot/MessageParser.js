class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        this.actionProvider.bodyHandler(message);
    }
  }
  
  export default MessageParser;
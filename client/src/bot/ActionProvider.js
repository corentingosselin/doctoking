import axios from "axios";

// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }


    bodyHandler = async (speciality) => {
        const response = await axios.get('/patient/speciality?input=' + speciality);
        const error = this.createChatBotMessage('Navré, impossible de trouver un médecin, essayez autre chose');
        if (response.status === 200) {
            if (response.data.result === 'no result')
                this.setChatBotMessage(error);
            else {
                const message = this.createChatBotMessage('Vous devriez peut-être consulter un ' + response.data.result);
                this.setChatBotMessage(message);
            }
        } else {
            this.setChatBotMessage(error);
        }
    };

    setChatBotMessage = (message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message] }));
    };
}

export default ActionProvider;
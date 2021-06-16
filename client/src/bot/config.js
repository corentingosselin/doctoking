// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Bonjour ! Dites-moi sur quelle partie du corps vous souffrez ou quel problème vous avez ?`)],
  botName: 'doctoBot'
}

export default config
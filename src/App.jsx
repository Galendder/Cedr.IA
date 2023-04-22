import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [messagesShown, setMessagesShown] = useState(
    ["『M』『I』『S』『S』『I』『O』『N』 『W』『A』『A』『L』『A』『X』『Y』",
      "Bonjour", 
  "Comment allez vous ?",
  "N'ayez pas peur, je ne mord pas",
  "Si vous souhaitez communiquer avec moi, je vous conseille de taper \"help\"..."]);
  let messages = [];
  console.log(messagesShown);
  const userTextBox = userMessageText(onTextChange);
  messages = writeMessages(messagesShown);

  function writeMessages(messages){
    var formattedMessages = [];
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].includes("[LINK]"))
      {
        let link = messages[i].substring(6);
        formattedMessages.push(<a class="app-link message" href={link}>{link}</a>, <br/>);
      }
      else
      {
      formattedMessages.push(<span className='message' key={i}>{messages[i]}</span>, <br/>);
      }

    }
    return formattedMessages;
  }

  
  function userMessageText(onKeyUp)
  {
    return (<input id="user-input-textbox" type='text' onKeyUp={onKeyUp}></input>);
  }
  
  function onTextChange(event)
  {
    if (event.keyCode === 13) 
    {
      console.log(event);
      console.log(messages);
      console.log(messagesShown);
      messagesShown.push("USER >> " + event.target.value);
      let answers = parseMessage(event.target.value);
      for (let index = 0; index < answers.length; index++) {
        const element = answers[index];
        messagesShown.push(element);
      }
      let newMessages = messagesShown.slice();
      event.target.value = "";
      setMessagesShown(newMessages); 
    }
  }

  return (
    <div className="App">
      <div class="messages-container">
        {messages}
      </div>
      {userTextBox}
    </div>
  );
}

function parseMessage(message)
{
  // J'ai hardcodé les messages mais j'aurai pu le faire dans un json
  // Les magic strings c'est le mal
  // Mais y a pas de typage en JS
  // J'adore les commentaires
  // Regardez j'en met encore un hehehehehhehehe
  switch (message.toLowerCase()) {
    case "help":
      return ["COMMANDES DISPONIBLES : ",
              " - help : Renvoie les informations affichées actuellement",
              " - about : En savoir plus sur cette IA (ou plutôt SANCHEZ Cédric)",
              " - why : Connaitre les motivations de cette IA",
              " - xp : Connaitre les expériences passés de cette IA",
              " - rickroll : Ne vous laissera pas tomber"];

    case "about":
      return ["FICHIER : IA_SANCHEZ_CEDRIC_180423", "Mon nom est SANCHEZ Cédric. Outre le fait que je sois une IA, je suis également développeur FullStack avec 6 ans d'expérience."];
    case "why":
      return ["Vous savez, je pense qu'il n'y a pas de bonnes ou de mauvaises candidatures. Postuler chez Waalaxy, c'est avant tout des rencontres...",
    "Votre entreprise m'a été conseillé par une amie, et après recherche sur cette dernière, votre stack technique et votre environnement me plait énormément !"];
    case "xp":
      return ["J'ai tout d'abord obtenu un diplôme en 3 ans de l'école EPITECH."]
    case "rickroll":
      return ["[LINK]https://www.youtube.com/watch?v=dQw4w9WgXcQ"]
    default:
      let answers = ["Je ne sais pas...", "Je ne suis pas sûr d'avoir compris...", "Étrange...", "Command not found : Please google it..."]
      return [answers[Math.floor(Math.random()*answers.length)]];
  }
}
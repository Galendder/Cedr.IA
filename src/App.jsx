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
              " - next : Et ensuite ?",
              " - rickroll : Ne vous laissera pas tomber"];

    case "about":
      return ["FICHIER : IA_SANCHEZ_CEDRIC_180423", "Mon nom est SANCHEZ Cédric. Outre le fait que je sois une IA, je suis également développeur FullStack avec 6 ans d'expérience.",
    "Je suis curieux de tout ce qui touche à la technologie globalement, que ça soit de la VR, aux technologies Web, en passant par la domotique, j'aime être au courant des nouvelles technologies !",
    "Je suis passionné par tout un tas de choses en dehors du travail, de la prestigitation, à la musique, en passant par l'esport (domaine dans lequel j'ai été journaliste bénévole pendant 7 ans), j'adore apprendre de nouvelles choses !",
    "ℂ𝔸ℝ𝔸ℂ𝕋Éℝ𝕀𝕊𝕋𝕀ℚ𝕌𝔼𝕊 𝔻𝕌 𝕊𝕌𝕁𝔼𝕋 :",
    "- Groupe préféré : Ling Tosite Sigure",
    "- Couleur préférée : Le violet",
    "- Jeu préféré : Sonic Adventure",
    "- IDE préféré : Visual Studio Code",
    "- Langage préféré : TypeScript"];

    case "why":
      return ["Vous savez, je pense qu'il n'y a pas de bonnes ou de mauvaises candidatures. Postuler chez Waalaxy, c'est avant tout des rencontres...",
    "Votre entreprise m'a été conseillé par une amie, et après recherche sur cette dernière, votre stack technique et votre environnement me plait énormément !",
    "L'ambiance de travail semble convenir parfaitement à ce que je recherche, je pense que l'esprit d'équipe et la camaraderie sont des éléments au travail ! Nous passons 7h+ par jour avec des gens, il est important que le côté social soit mis en avant !",
    "De plus ça me permettra de me lancer dans de nouveaux challenges sur de nouvelles technologies (tel que React que je connais mais que je n'ai pas pu expérimenter en milieu professionnel)",
    "(C'est aussi pour ça que cette IA est faite en React, pour me remettre le pied à l'étrier sur ce framework qui me plait beaucoup).",
    "De plus, les nombreux avantages (télétravail partiel, horaires variables, confort de travail...) que proposent Waalaxy sont un gros plus pour moi !"];

    case "xp":
      return ["Suite à un bac S, j'ai tout d'abord obtenu un diplôme en 3 ans de l'école EPITECH en 2016.",
    "Durant cette formation, j'ai notamment pu faire mes premières armes sur PHP, HTML et CSS, grâce à un stage de 4 mois dans une entreprise nommée Eoxia.",
    "À la fin de la formation, j'ai pu ensuite intégré Septeo Avocats (anciennement SECIB) qui m'a permis d'apprendre de nombreux langages et de nombreuses technologies.",
    "J'ai tout d'abord débuté sur du client lourd en VB6 (interopé avec du C#)/Winforms/SQL Server",
    "Mais dans un besoin de renouveau, j'ai proposé quelques années plus tard que l'on passe à du micro-service web.",
    "De ce fait, j'ai pu apprendre plus profondément HTML/CSS/SASS/SCSS/Typescript et Angular pour le côté front, et NodeJS/Asp.Net Core pour le côté Backend. J'ai également fait un peu de MongoDB sur notre premier projet.",
    "Cette expérience web aura duré 4 ans, et j'ai également pu découvrir les tenants et aboutissants du CI/CD, notamment sur le côté monitoring et pipeline de déploiement."];

    case "next":
      return ["Maintenant c'est à vous de jouer ! La force de cette IA arrive à sa fin, et le sort de l'humanité tout entière (ou en tout cas le mien) est entre vos mains !",
    "N'hésitez pas à me recontacter par mail ou par téléphone avec les informations présentes sur mon CV ! Je serai très heureux d'échanger avec vous de vive voix !",
    "En espérant que cette petite expérience vous aura plu",
    "SANCHEZ Cédric"];

    case "rickroll":
      return ["[LINK]https://www.youtube.com/watch?v=dQw4w9WgXcQ"];

    default:
      let answers = ["Je ne sais pas...", "Je ne suis pas sûr d'avoir compris...", "Étrange...", "Command not found : Please google it..."]
      return [answers[Math.floor(Math.random()*answers.length)]];
  }
}
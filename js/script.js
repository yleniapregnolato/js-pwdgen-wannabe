// RACCOLTA DATI E DICHIARAZIONE DI INFO CONOSCIUTE

// con un prompt chiedo all'utente il suo nome
let userName = prompt ("qual è il tuo nome?"); //string
console.log(userName, typeof userName);
// con un prompt chiedo all'utente il suo cognome
let userSurname = prompt ("qual è il tuo cognome?"); //string
console.log(userSurname, typeof userSurname);
// con un prompt chiedo all'utente il suo colore preferito
let userColor = prompt ("qual è il tuo colore preferito?"); //string
console.log(userColor, typeof userColor);

//STAMPA DELL'OUTPUT

//preparo il messaggio
const resultMessage = `${userName}${userSurname}${userColor}21`; //string
console.log(resultMessage);

//stampo il messagiio nella pagina
document.getElementById("result").innerHTML = resultMessage;


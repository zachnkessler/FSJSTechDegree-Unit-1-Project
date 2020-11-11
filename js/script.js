/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// These are five quotes to be used in the random quote generator
const quotes = [
  {
    quote: "Never tell me the odds!",
    source: "Han Solo",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },  
  {
    quote: "I'm just a simple man trying to make my way in the universe.",
    source: "Jango Fett",
    citation: "Star Wars: Episode II - Attack of the Clones",
    year: 2002
  },
  {
    quote: `Power! <em>Unlimited</em> power!`,
    source: "Darth Sidious",
    citation: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005
  },
  {
    quote: "I am one with the force. The force is with me.",
    source: "Chirut Îmwe",
    citation: "Rogue One: A Star Wars Story",
    year: 2016
  },
  {
    quote: "I guess every once in a while both suns shine on a womp rat's tail.",
    source: "Cobb Vanth",
    citation: 'The Mandalorian: Season 2, Episode 2 "Chapter 9: The Marshall"',
    year: 2020
  }
];
// console.log(quotes); SUCCESSFUL TEST
/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
// console.log(getRandomQuote()); SUCCESSFUL TEST
/***
 * `printQuote` function
***/
function printQuote () {
  let randomQuote = getRandomQuote ();
  let quote = `<p>"${randomQuote.quote}"</p>
               <p>${randomQuote.source}`
  if (randomQuote.citation) {
    quote += `, ` + `<span><em>${randomQuote.citation}</em></span>`;
  }
  if (randomQuote.year) {
    quote += `, ` + `<span>${randomQuote.year}</span>`;
  }
  quote += `</p>`;
  document.getElementById('quote-box').innerHTML = quote;
  return quote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
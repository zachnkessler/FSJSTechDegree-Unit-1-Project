/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Zachary Kessler
11/11/2020
******************************************/

// QUOTES ARRAY: These are five quotes to be used in the random quote generator.
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
    year: 2020,
    platform: "Disney+"
  }
];

/**
 * Returns quote from above array using random number as index value.
 * 
 * Generates random number between 0 and 4.
 */
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/**
 * Generates a random color and applies it to the page background upon button click. 
 * 
 * Each variable (r, g, and b) is a color value between 0 and 256. 
 * Code example sourced from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
 */
function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.background = rgb;
}

/**
 * Returns HTML string of property values from the quotes array.
 * 
 * Builds HTML string using object property values from the getRandomQuotes function.
 * Places built HTML string within HTML element with ID of #quote-box.
 * Applies a random background color to the page upon button click from randomColor function.
 */
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
  if (randomQuote.platform) {
    quote += `, ` + `<span>${randomQuote.platform}</span>`;
  }
  quote += `</p>`;
  document.getElementById('quote-box').innerHTML = quote;
  setTimeout(function(){
    location = ''
  }, 5000)
  randomColor ();
  return quote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// This is an Array of objects. Each object is a famous quote.
// Each quote object contains at least 2 properties: the actual quote itself and the source of the quote,
// but there are a few more properties for some of the objects like (citation, year and category)

var quotes = [

  {quote: "So many books, so little time.",
   source: "Frank Zappa",
   citation: "Woodstock",
   year: 1969,
   category: 'Reading'
  },
  {quote: "Get busy living or get busy dying",
   source: "Stephen King"
  },
  {quote: "Love all, trust a few, do wrong to none.",
   source: "William Shakespeare",
   citation: "All's Well That Ends Well",
   year: 1623,
   category: 'Inspirational'
  },
  {quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
   source: "Eleanor Roosevelt"
  },
  {quote: "Those who dare to fail miserably can achieve greatly.",
   source: "John F. Kennedy",
   category: 'Motivational'
  },
  {quote: "It does not do to dwell on dreams and forget to live.",
   source: "J.K. Rowling",
   citation: "Harry Potter and the Sorcerer's Stone",
   year: 1997,
   category: 'Reading'

  },
  {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
   source: "Albert Einstein",
   citation: "University of Zurich",
   year: 1925
  },
  {quote: "Be the change that you wish to see in the world.",
   source: "Mahatma Gandhi",
   citation: "Indian National Congress",
   year: 1922,
   category: 'Freedom'
  },
  {quote: "It had long since come to my attention that people of accomplishment rarely sat back and le things happen to them. They went out and happened to things",
   source: "Leonardo Da Vinci"
  },
  {quote: "Remember that the happiest people are not those getting more, but those giving more",
   source: "H. Jackson Brown, Jr.",
   category: 'Inspirational'}
];


// This function return a randomly selected quote object from our Array of Object 'quotes'
// I actually built the function with a parameter 'array' so to return a random object from the 'quotes' array
// we need to pass 'quotes' as the argument of the getRandomQuote function when calling it.

function getRandomQuote(array){
  var randomNum = Math.floor(Math.random()*10);
  var myObj = array[randomNum];
  return myObj;
}


/***
Inside the printQuote function the getRandomQuote function is called and its value is stored in a variable.
Our array of objects 'quotes' is passed as the argument.

From there using objects properties selection, objects methods,
conditional statements and string concatenation we build the string
that is going to be dispayed in the page and we set that string as the innerHTML of the div with id 'quote-box'
***/

function printQuote() {
  var myObj = getRandomQuote(quotes);
  var html = '';
  var myDiv;

  html += "<p class='quote'>" + myObj.quote + "</p>" +
          "<p class='source'>" + myObj.source

          if(myObj.hasOwnProperty('citation')) {
            html += "<span class='citation'>" + myObj.citation + "</span>";
          }
          if(myObj.hasOwnProperty('year')) {
            html += "<span class='year'>" + myObj.year + "</span>";
          }
          if(myObj.hasOwnProperty('category')) {
            html += "<br><span>" + myObj.category + "</span>";
          }
          + "</p>";

  myDiv = document.getElementById('quote-box');
  myDiv.innerHTML = html;


}


// This function return a random number from 0 to 255
// ( which will be used to generate a random rgb color )

function getRandomRgb() {
  return Math.floor(Math.random() * 256);
}


// This function calls the getRandomRgb and build and
// return an rbg color value in the form of a string

function buildColor() {
    var output = 'rgb(';

  output += getRandomRgb() + ',';
  output += getRandomRgb() + ',';
  output += getRandomRgb() + ')';

  return output;
}


// This function changes the background of the <body> in index.html
// with a random color everytime is called. We call the buildColor
// function to get the rgb color value

function changeBg() {
  var myBody = document.getElementsByTagName('BODY')[0];
  myBody.style.backgroundColor = buildColor();

}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call the `printQuote` and the
  'changeBg' functions.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBg, false);


// These last 2 lines make sure that the 'printQuote' and 'changeBg' functions
// will be called every 20 seconds

// window.setInterval(printQuote, 20000);
// window.setInterval(changeBg, 20000);

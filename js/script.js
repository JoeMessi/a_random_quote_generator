/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [

  {quote: "So many books, so little time.",
   source: "Frank Zappa",
   citation: "Woodstock",
   year: 1969
  },
  {quote: "Get busy living or get busy dying",
   source: "Stephen King"
  },
  {quote: "Love all, trust a few, do wrong to none.",
   source: "William Shakespeare",
   citation: "All's Well That Ends Well",
   year: 1623
  },
  {quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
   source: "Eleanor Roosevelt"
  },
  {quote: "Those who dare to fail miserably can achieve greatly.",
   source: "John F. Kennedy"
  },
  {quote: "It does not do to dwell on dreams and forget to live.",
   source: "J.K. Rowling",
   citation: "Harry Potter and the Sorcerer's Stone",
   year: 1997

  },
  {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
   source: "Albert Einstein",
   citation: "University of Zurich",
   year: 1925
  },
  {quote: "Be the change that you wish to see in the world.",
   source: "Mahatma Gandhi",
   citation: "Indian National Congress",
   year: 1922
  },
  {quote: "It had long since come to my attention that people of accomplishment rarely sat back and le things happen to them. They went out and happened to things",
   source: "Leonardo Da Vinci"
  },
  {quote: "Remember that the happiest people are not those getting more, but those giving more",
   source: "H. Jackson Brown, Jr."}
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

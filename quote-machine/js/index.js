$(document).ready(function(){
  
  const quotes = [
{ quote:"Life isn’t about getting and having, it’s about giving and being.",author:"Kevin Kruse"},
{ quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},
{quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},
{quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},
{quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},
{quote:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},
{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},
{quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"},
{quote:"Definiteness of purpose is the starting point of all achievement.",author:"W. Clement Stone"},
{quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},
{quote:"Life is what happens to you while you’re busy making other plans.",author:"John Lennon"},
{quote:"We become what we think about.",author:"Earl Nightingale"}
   ]

  var rndquote;
  var rndauthor;
  var rnd;
  getQuote();

  
  function getQuote() {
    
   rnd=Math.floor(Math.random()*quotes.length) ;
  
   rndquote=quotes[rnd].quote;
   rndauthor=quotes[rnd].author;
   $("#text").html( '"' + rndquote + '"');
   $("#author").html('- ' +rndauthor); 
  
  }
  
  
  $("#tweet-qoute").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text=" + '"'+ rndquote +'"' + '-' + rndauthor )
  })
   $("#facebook-qoute").on("click",function(){
    window.open("https://facebook.com/intent?text=" + '"'+ rndquote +'"' + '-' + rndauthor )
  })
  $("#new-qoute").on("click", function(){
    getQuote();
    getColor();
  });
  
  function getColor(){
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  
 var rndscolor=colors[Math.floor(Math.random()*colors.length)];
 
    
 $("html body").animate(
    {
      backgroundColor: rndscolor,
      color: rndscolor
    },
    1000
  );
  $(".btn").animate(
    {
      backgroundColor: rndscolor,
    },
    1000
  );
  }
  
});

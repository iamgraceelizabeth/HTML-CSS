var factList = [
  "It's estimated that about 75% of people who quit smoking relapse within the first six months.", "1 in 10 deaths of 20-24 year olds are due to alcohol.", "More than 38 million adults binge drink.", "According to SAMHSA, about 2 million people aged 12 years or older use meth in any given year.", "About 500 people each day try meth for the first time.", "Approximately 1 in 10 people who use marijuana will become addicted.", "People ages 18-25 have the highest rate of substance use.", "Cocaine causes nearly 1 in 5 overdose deaths." ];

var fact = document.getElementById("fact");
var generate = document.getElementById("generate");
var count = 0;

generate.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
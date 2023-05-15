
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics (){
  for (var x = 0; x < topics.length; x++){
    console.log(topics[x]);
  }
}

function selecTopics (){
  if (randomTopic === 'HTML') {
    console.log("let's study HTML");
  } else if (randomTopic === 'CSS') {
    console.log("let's study CSS");
  } else if (randomTopic === 'Git') {
    console.log("let's study Git");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript");
  } else {
    console.log('Please try again!');
  }
}


function helloworld (){
  console.log('Hello, world, I am a function');
}
console.log('Here are the topics we learned through Prework');
listTopics();
console.log('Which topic should we study first?')
selecTopics();


function addRandomGreeting(){
    const facts= ['Naruto’s favorite ramen shop “Ichiraku” exists in real life.', 'Shikamaru’s IQ is above 200.', 'The Legendary Sannin are a reference to an old novel.', 'Asuma’s cigarette is never lit in the official American version', 'Naruto wasn’t supposed to be a ninja.'];

    //Sorting a random fact from Naruto
    const fact =facts[Math.floor(Math.random() * facts.length)];

    //Implementing into the webpage
    const factContainer = document.getElementById('fact-container');
    factContainer.innerText = fact;
}
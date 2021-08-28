// load the quote from the 'https://api.kanye.rest/' server through API call 
function loadQuote() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showQuote(data));
}
// call the API load function 
loadQuote();
// show quote on our website through function call 
// function declaration 
function showQuote(data) {
    const quote = document.getElementById('quote');
    const p = document.createElement('p');
    p.innerText = data.quote;
    quote.appendChild(p);
    console.log(p);
}
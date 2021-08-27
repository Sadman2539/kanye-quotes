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
    const quote = data.quote;
    const div = document.getElementById('quote-div');
    const p = document.createElement('p');
    p.innerHTML = `
    <figure class="quote">
    <blockquote cite="https://kanye.rest/">
        <p>${quote}</p>
    </blockquote>
    <figcaption>—Kanye West</figcaption>
</figure>
    `
    div.appendChild(p);
}
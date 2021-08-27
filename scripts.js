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
    const section = document.getElementById('quote-section');
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>Today's Quote</h2>
    <figure class="quote">
    <blockquote  cite="https://kanye.rest/">
        <p >${data.quote}</p>
    </blockquote>
    <figcaption>—Kanye West</figcaption>
</figure>
    `
    section.appendChild(div);
}
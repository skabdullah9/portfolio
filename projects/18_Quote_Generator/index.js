const quoteText = document.querySelector('.quote__text')
const quoteAuthor = document.querySelector('.quote__author span')
const nextQuoteBtn = document.querySelector('.buttons__container button:last-child')
const copyQuoteBtn = document.querySelector('.buttons__container button:first-child')
const copyMsg = document.querySelector('.copy__msg');

let url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'

function getQuote() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            quoteText.textContent = data.data[0].quoteText;
            quoteAuthor.textContent = data.data[0].quoteAuthor;
            copyQuoteBtn.addEventListener('click', copyToClipboard)
        })
}

nextQuoteBtn.addEventListener('click', getQuote)

function copyToClipboard() {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(quoteText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    copyMsg.classList.add('copy__msg--active')
    copyMsg.addEventListener('animationend',()=>copyMsg.classList.remove('copy__msg--active'))
}


getQuote()

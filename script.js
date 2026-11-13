const languageSelect = document.getElementById('language');
const button = document.getElementById('show-button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const language = languageSelect.value;

    switch (language) {
        case 'html' :
            result.textContent = ('HTML structures web pages.');
            break;

        case 'css' :
            result.textContent = ('CSS styles web pages.');
            break;

        case 'javascript' :
            result.textContent = ('JavaScript adds interactivity.');
            break;

        default:
            result.textContent = ('Unknown language.');
    }
})
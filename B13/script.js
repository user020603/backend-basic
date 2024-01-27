// dark-mode.js
const currentMode = sessionStorage.getItem('mode');
if(currentMode) {
    const body = document.querySelector('body');
    body.classList.toggle(currentMode);
}

const buttonChangeMode = document.querySelector('#change-mode');
buttonChangeMode.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    const currentMode = sessionStorage.getItem('mode');
    if(currentMode === 'dark') {
        sessionStorage.setItem('mode', '');
    } else {
        sessionStorage.setItem('mode', 'dark');
    }
});

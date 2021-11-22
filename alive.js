/* Randomly set a URL to the footer link
 | Establece aleatoriamente una URL al enlace del footer */
const profiles = [
    'https://twitter.com/javaleriano2',
    'https://codepen.io/javiervaleriano',
    'https://github.com/javiervaleriano',
    'https://www.linkedin.com/in/javier-valeriano1508/',
    'https://devchallenges.io/portfolio/javiervaleriano'
],
    footerLink = document.querySelector('#footer__link');

footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];

/* Perform the process constantly
 | Realiza el proceso constantemente */
setInterval(function() {
    footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];
}, 5000);
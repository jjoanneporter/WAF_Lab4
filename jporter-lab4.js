// 1a. changing main headline
document.querySelector('.hero h1').textContent =
"Uplift Your Brand with Stellar Marketing";

// 1b. changing the subheadline text 
document.querySelector('.hero p').innerHTML =
"<strong><em>Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.</em></strong>";

// 1c. changing the hero background image
document.querySelector('.hero').style.backgroundImage =
"url('https://picsum.photos/id/683/1280/720')";

// 1d. remove "get started" button
document.querySelector('.hero a').remove();

// 1e. changing navbar background color to match footer
const footerColor = window.getComputedStyle(document.querySelector('footer')).backgroundColor;
document.querySelector('nav').style.backgroundColor = footerColor;

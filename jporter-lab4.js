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


// 2a. changing all service icons color
document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
    icon.style.color = '#47C714';
  });
  
  // 2b. changing the digital marketing icon to "ads_click"
  const icons = document.querySelectorAll('.material-symbols-outlined');
  if (icons[1]) {
    icons[1].textContent = 'ads_click';
  }


// 3a. Make tiles 4 across at >= 1024px
const style = document.createElement('style');
style.textContent = `
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}
`;
document.head.appendChild(style);

// 3b. changing musicians image
document.querySelectorAll('img').forEach(img => {
  if (img.alt && img.alt.toLowerCase().includes('musician')) {
    img.src = 'https://picsum.photos/id/453/400/300';
  }
});
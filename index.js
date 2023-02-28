const generateLinkButton = document.getElementById('generate-link');
const linkContainer = document.getElementById('link-container');

generateLinkButton.addEventListener('click', () => {
  // Replace 380230 with your own Linkvertise ID
  const link = `https://linkvertise.com/${Math.floor(Math.random() * 1000000) + 1}/my-link`;
  
  linkContainer.innerHTML = `
    <a href="${link}" target="_blank">${link}</a>
    <br>
    <p>Copy this link and paste it in the browser address bar to test.</p>
  `;
  
  linkvertise(380230, {whitelist: [], blacklist: ["D"]});
});

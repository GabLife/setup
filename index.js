const generateLinkButton = document.getElementById('generate-link');
const linkContainer = document.getElementById('link-container');

generateLinkButton.addEventListener('click', () => {
  const code = Math.floor(Math.random() * 1000000) + 1;
  const link = `https://linkvertise.com/${code}/my-link`;

  linkContainer.innerHTML = `
    <p>Copy this Linkvertise link:</p>
    <input type="text" value="${link}" readonly>
  `;

  linkvertise(code, {whitelist: [], blacklist: ["D"]});
});

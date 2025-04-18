// script.js
const projectContainer = document.getElementById('github-projects');

fetch('https://api.github.com/users/cloudcaptain9/repos')
  .then(response => response.json())
  .then(data => {
    projectContainer.innerHTML = '';
    data.slice(0, 5).forEach(repo => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || 'No description provided.'}</p>
      `;
      div.style.marginBottom = "1.5rem";
      projectContainer.appendChild(div);
    });
  })
  .catch(error => {
    projectContainer.innerHTML = 'Failed to load projects.';
    console.error(error);
  });

document.addEventListener('DOMContentLoaded', () => {
  const isRoot = !window.location.pathname.includes('/pages/');
  const root = isRoot ? '' : '../';

  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="nav">
      <div class="nav-container">
        <a href="${root}index.html" class="nav-title">HRMMMM</a>
        <ul class="nav-links">
          <li><a href="${root}pages/about.html">About</a></li>
          <li><a href="${root}pages/projects.html">Projects</a></li>>
          <li><a href="https://github.com/Gabs-L" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </nav>
  `);
});
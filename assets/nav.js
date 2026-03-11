document.addEventListener('DOMContentLoaded', () => {
  const isRoot = !window.location.pathname.includes('/pages/');
  const root = isRoot ? '' : '../';
  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="nav">
      <div class="nav-container">
        <a href="${root}index.html" class="nav-title">HRMMMM</a>
        <ul class="nav-links">
          <li><a href="${root}pages/about.html">About</a></li>
          <li class="dropdown">
            <a href="${root}pages/projects.html">Projects</a>
            <ul class="dropdown-menu">
              <li><a href="${root}pages/project1.html">Project 1</a></li>
              <li><a href="${root}pages/project2.html">Project 2</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="${root}pages/other.html">Other</a>
            <ul class="dropdown-menu">
              <li><a href="${root}pages/other1.html">Other 1</a></li>
              <li><a href="${root}pages/other2.html">Other 2</a></li>
            </ul>
          </li>
          <li style="border-left: 1px solid #dadada; padding-left: 1rem; margin-left: 1rem;">
          <li><a href="https://github.com/Gabs-L" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </nav>
  `);
});
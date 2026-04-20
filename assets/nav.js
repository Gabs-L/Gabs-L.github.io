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

              <li class="dropdown-submenu">
              <a href="#">Aero</a>
                <ul class="submenu">
                  <li><a href="${root}pages/aero1.html">AeroProj1</a></li>
                  <li><a href="${root}pages/aero2.html">AeroProj2</a></li>
                </ul>
              </li>

              <li class="dropdown-submenu">
              <a href="#">Computers</a>
                <ul class="submenu">
                  <li><a href="${root}pages/comp1.html">Optiplex Distributed Compute Cluster</a></li>
                  <li><a href="${root}pages/comp2.html">SupaNas V1.0</a></li>
                </ul>
              </li>

              <li class="dropdown-submenu">
                <a href="#">Programming</a>
                <ul class="submenu">
                  <li><a href="${root}pages/prog1.html">Programming Project 1</a></li>
                  <li><a href="${root}pages/prog2.html">Programming Project 2</a></li>
                </ul>
              </li>
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
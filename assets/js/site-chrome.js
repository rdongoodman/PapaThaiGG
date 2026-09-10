(function () {
  var config = window.PapaThaiNav;
  if (!config || !config.links) return;

  var active = document.body.getAttribute('data-page') || '';

  function buildNav() {
    var nav = document.createElement('nav');
    nav.className = 'site-scroll-nav';
    nav.setAttribute('aria-label', 'Site sections');

    var inner = document.createElement('div');
    inner.className = 'site-scroll-nav-inner';

    config.links.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
      if (link.id === active) {
        a.className = 'is-active';
        a.setAttribute('aria-current', 'page');
      }
      inner.appendChild(a);
    });

    nav.appendChild(inner);
    return nav;
  }

  function buildFooter() {
    var footer = document.createElement('footer');
    footer.id = 'site-footer';
    footer.setAttribute('role', 'contentinfo');

    var icons = document.createElement('ul');
    icons.className = 'icons';
    icons.innerHTML =
      '<li><a href="https://www.twitch.tv/papathaigg" target="_blank" rel="noopener" class="icon brands fa-twitch"><span class="label">Twitch</span></a></li>' +
      '<li><a href="https://www.youtube.com/@PapaThaiGG" target="_blank" rel="noopener" class="icon brands fa-youtube"><span class="label">YouTube</span></a></li>' +
      '<li><a href="https://kick.com/papathaigg" target="_blank" rel="noopener" class="icon solid fa-gamepad"><span class="label">Kick</span></a></li>' +
      '<li><a href="https://x.com/PapaThaiGG" target="_blank" rel="noopener" class="icon brands fa-twitter"><span class="label">X</span></a></li>' +
      '<li><a href="https://www.tiktok.com/@papathaigaminggg" target="_blank" rel="noopener" class="icon brands fa-tiktok"><span class="label">TikTok</span></a></li>' +
      '<li><a href="https://discord.gg/6BMPumRDBy" target="_blank" rel="noopener" class="icon brands fa-discord"><span class="label">Discord</span></a></li>' +
      '<li><a href="https://steamcommunity.com/id/PapaThaiGG/" target="_blank" rel="noopener" class="icon brands fa-steam"><span class="label">Steam</span></a></li>' +
      '<li><a href="https://www.instagram.com/papathaigg/" target="_blank" rel="noopener" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>' +
      '<li><a href="https://www.facebook.com/PapaThaiGG" target="_blank" rel="noopener" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>';

    var copy = document.createElement('ul');
    copy.className = 'copyright';
    copy.innerHTML = '<li>&copy; PapaThaiGG</li>';

    footer.appendChild(icons);
    footer.appendChild(copy);
    return footer;
  }

  var navSlot = document.querySelector('[data-site-chrome="nav"]');
  if (navSlot) {
    navSlot.replaceWith(buildNav());
  }

  var footerSlot = document.querySelector('[data-site-chrome="footer"]');
  if (footerSlot) {
    footerSlot.replaceWith(buildFooter());
  }
})();

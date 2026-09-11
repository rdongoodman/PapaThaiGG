(function () {
  var config = window.PapaThaiNav;
  if (!config || !config.links) return;

  var active = document.body.getAttribute('data-page') || '';
  var isHome = active === 'home';

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
        a.classList.add('is-active');
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
      '<li><a href="https://www.twitch.tv/papathaigg" target="_blank" rel="noopener" aria-label="Twitch"><i class="fab fa-twitch" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://www.youtube.com/@PapaThaiGG" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://kick.com/papathaigg" target="_blank" rel="noopener" aria-label="Kick"><i class="fas fa-gamepad" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://x.com/PapaThaiGG" target="_blank" rel="noopener" aria-label="X"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://www.tiktok.com/@papathaigaminggg" target="_blank" rel="noopener" aria-label="TikTok"><i class="fab fa-tiktok" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://discord.gg/6BMPumRDBy" target="_blank" rel="noopener" aria-label="Discord"><i class="fab fa-discord" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://steamcommunity.com/id/PapaThaiGG/" target="_blank" rel="noopener" aria-label="Steam"><i class="fab fa-steam" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://www.instagram.com/papathaigg/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>' +
      '<li><a href="https://www.facebook.com/PapaThaiGG" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>';

    var copy = document.createElement('ul');
    copy.className = 'copyright';
    copy.innerHTML = '<li>&copy; PapaThaiGG</li>';

    footer.appendChild(icons);
    footer.appendChild(copy);
    return footer;
  }

  var navSlot = document.querySelector('[data-site-chrome="nav"]');
  if (navSlot) {
    if (isHome) {
      navSlot.remove();
    } else {
      navSlot.replaceWith(buildNav());
    }
  }

  var footerSlot = document.querySelector('[data-site-chrome="footer"]');
  if (footerSlot) {
    footerSlot.replaceWith(buildFooter());
  }
})();

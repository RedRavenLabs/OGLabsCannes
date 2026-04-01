(function() {
  const style = document.createElement('style');
  style.id = '0g-ui-toolkit-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');
    
    @font-face { font-family: 'Regola Pro'; src: url('') format('woff2'); font-weight: 400; font-style: normal; }
    @font-face { font-family: 'Regola Pro'; src: url('') format('woff2'); font-weight: 700; font-style: normal; }

    :root, [data-0g-theme="light"] {
      --font-primary: 'Regola Pro', sans-serif;
      --font-code: 'Geist Mono', monospace;
      --color-primary: #9200E1;
      --color-primary-light: #E3C1FF;
      --bg-base: #F0F4F8;
      --text-main: #1A1A1A;
      --text-muted: #5A6A7A;
      --shadow-flat: 9px 9px 16px rgba(163, 177, 198, 0.4), -9px -9px 16px rgba(255, 255, 255, 0.9);
      --shadow-pressed: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
    }

    [data-0g-theme="dark"] {
      --bg-base: #1A1A1A;
      --text-main: #F8F8F8;
      --text-muted: #A1A1A1;
      --shadow-flat: 9px 9px 16px rgba(13, 13, 13, 0.8), -9px -9px 16px rgba(39, 39, 39, 0.8);
      --shadow-pressed: inset 6px 6px 10px 0 rgba(13, 13, 13, 0.8), inset -6px -6px 10px 0 rgba(39, 39, 39, 0.8);
    }

    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }
    
    code, pre { font-family: var(--font-code); }

    button {
      background-color: var(--bg-base);
      color: var(--color-primary);
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1rem;
      border: none;
      border-radius: 12px;
      padding: 12px 24px;
      cursor: pointer;
      box-shadow: var(--shadow-flat);
      transition: box-shadow 0.2s ease, background-color 0.3s ease, color 0.3s ease;
      outline: none;
    }

    button:active { box-shadow: var(--shadow-pressed); }

    input[type="text"], textarea {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-primary);
      font-size: 1rem;
      border: 1px solid transparent;
      border-radius: 12px;
      padding: 12px 16px;
      box-shadow: var(--shadow-pressed);
      transition: border 0.2s ease, background-color 0.3s ease, color 0.3s ease;
      outline: none;
      box-sizing: border-box;
      width: 100%;
    }

    input[type="text"]:focus, textarea:focus { border: 1px solid var(--color-primary); }

    .zg-card {
      background-color: var(--bg-base);
      border-radius: 24px;
      padding: 24px;
      box-shadow: var(--shadow-flat);
      box-sizing: border-box;
      transition: background-color 0.3s ease;
    }
  `;
  document.head.appendChild(style);

  // FIX: Using jsDelivr for the SVG so the browser recognizes it as an image
  window.init0GBranding = function(theme) {
    const logos = document.querySelectorAll('img.0g-logo');
    const logoSrc = 'https://cdn.jsdelivr.net/gh/RedRavenLabs/OGLabsCannes@main/0G-Logo-Purple_Hero.svg';
    
    logos.forEach(logo => {
      logo.src = logoSrc;
    });
  };

  const updateTheme = (isDark) => {
    const currentTheme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-0g-theme', currentTheme);
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => window.init0GBranding(currentTheme));
    } else {
      window.init0GBranding(currentTheme);
    }
  };

  // Initial setup based on OS
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  updateTheme(mediaQuery.matches);

  // Listen for OS changes
  mediaQuery.addEventListener('change', (e) => updateTheme(e.matches));
})();

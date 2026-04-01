(function() {
  // 1 & 2. Create style tag and import Geist Mono from Google Fonts
  const style = document.createElement('style');
  style.id = '0g-ui-toolkit-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');
    
    /* Font Faces Setup (Ready for URLs) */
    @font-face {
      font-family: 'Regola Pro';
      src: url('') format('woff2'); /* Add your Regola Pro URL here */
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Regola Pro';
      src: url('') format('woff2'); /* Add your Regola Pro Bold URL here */
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    :root, [data-0g-theme="light"] {
      /* Fonts */
      --font-primary: 'Regola Pro', sans-serif;
      --font-code: 'Geist Mono', monospace;
      
      /* Primary Brand & Accents */
      --color-primary: #9200E1;
      --color-primary-light: #E3C1FF;
      
      /* Background & Text */
      --bg-base: #F0F4F8; /* Lighter off-white background */
      --text-main: #1A1A1A; /* High contrast text */
      --text-muted: #5A6A7A;
      
      /* Neumorphic Shadows - Light Mode */
      --shadow-flat: 9px 9px 16px rgba(163, 177, 198, 0.4), -9px -9px 16px rgba(255, 255, 255, 0.9);
      --shadow-pressed: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.9);
      --shadow-hover: 12px 12px 20px rgba(163, 177, 198, 0.5), -12px -12px 20px rgba(255, 255, 255, 1);
    }

    [data-0g-theme="dark"] {
      /* Background & Text */
      --bg-base: #1A1A1A;
      --text-main: #F8F8F8; /* High contrast text */
      --text-muted: #A1A1A1;
      
      /* Neumorphic Shadows - Dark Mode */
      --shadow-flat: 9px 9px 16px rgba(13, 13, 13, 0.8), -9px -9px 16px rgba(39, 39, 39, 0.8);
      --shadow-pressed: inset 6px 6px 10px 0 rgba(13, 13, 13, 0.8), inset -6px -6px 10px 0 rgba(39, 39, 39, 0.8);
      --shadow-hover: 12px 12px 20px rgba(13, 13, 13, 0.9), -12px -12px 20px rgba(39, 39, 39, 0.9);
    }

    /* Apply base styles to document */
    body {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code, pre {
      font-family: var(--font-code);
    }

    /* Buttons */
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
      transition: box-shadow 0.2s ease;
      outline: none;
    }

    button:active {
      box-shadow: var(--shadow-pressed);
    }

    /* Inputs and Textareas */
    input[type="text"], textarea {
      background-color: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-primary);
      font-size: 1rem;
      border: 1px solid transparent;
      border-radius: 12px;
      padding: 12px 16px;
      box-shadow: var(--shadow-pressed);
      transition: border 0.2s ease;
      outline: none;
      box-sizing: border-box;
    }

    input[type="text"]:focus, textarea:focus {
      border: 1px solid var(--color-primary);
    }

    /* Utility Classes */
    .zg-card {
      background-color: var(--bg-base);
      border-radius: 24px;
      padding: 24px;
      box-shadow: var(--shadow-flat);
      box-sizing: border-box;
    }
  `;
  document.head.appendChild(style);

  // 3. Detect system preference for dark/light mode
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // 4. Branding and Logo Swap Functionality
  window.init0GBranding = function(theme) {
    const logos = document.querySelectorAll('img.0g-logo');
    
    // Updated to use the main branch URL so it always points to the correct logo
    const lightLogoSrc = 'https://raw.githubusercontent.com/RedRavenLabs/OGLabsCannes/main/0G-Logo-Purple_Hero.svg';
    const darkLogoSrc = 'https://raw.githubusercontent.com/RedRavenLabs/OGLabsCannes/main/0G-Logo-Purple_Hero.svg';
    
    logos.forEach(logo => {
      // Ensure the logo sets its source dynamically based

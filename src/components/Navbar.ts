class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  darkMode() {
  const toggle = document.querySelector('[icon="ion:toggle"]') as HTMLElement;
  const weatherNight = document.querySelector('[icon="mdi:weather-night"]') as HTMLElement;
  const icDictionary =  document.querySelector('[icon="fluent-mdl2:dictionary"]') as HTMLElement;
  const ligtColor = '#757575'
  if (toggle && weatherNight && icDictionary) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        weatherNight.style.color = '#A445ED'; 
        toggle.style.color = '#A445ED'; 
        icDictionary.style.color = '#fff'; 
      } else {
        weatherNight.style.color = ligtColor; 
        toggle.style.color = ligtColor; 
        icDictionary.style.color = ligtColor; 
      }
    });
  }
}

  
  connectedCallback() {
    this.render();
    this.darkMode()
  }
  
  render() {
    this.innerHTML = `<nav class="navbar">
        <div>
        <iconify-icon icon="fluent-mdl2:dictionary" width="32" height="36.5"></iconify-icon>
        </div>
        <div class="navbar-right">
        <iconify-icon icon="ion:toggle" style="cursor: pointer;"  width="20" height="20"></iconify-icon>
        <iconify-icon icon="mdi:weather-night"  width="20" height="20"></iconify-icon>
        </div>
        </nav>`;
  }
}

customElements.define("navbar-component", Navbar);

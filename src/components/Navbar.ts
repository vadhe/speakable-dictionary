class Navbar extends HTMLElement {
  constructor() {
    super();
    // Initialize your component here
  }

  // Define properties and methods here

  connectedCallback() {
    this.render();
    // Called when the component is added to the DOM
  }

  disconnectedCallback() {
    // Called when the component is removed from the DOM
  }

  // Other lifecycle callbacks and methods
  render() {
    this.innerHTML = `<nav class="navbar">
        <div>
        <iconify-icon icon="fluent-mdl2:dictionary" style="color: #757575;" width="32" height="36.5"></iconify-icon>
         
        </div>
        <div class="navbar-right">
        <p>Sans Serif</p>
        <hr/>
        <iconify-icon icon="ep:arrow-down-bold" style="color: #a445ed;" width="20" height="20"></iconify-icon>
        <iconify-icon icon="ion:toggle" style="color: #757575;" width="20" height="20"></iconify-icon>
        <iconify-icon icon="mdi:weather-night" style="color: #757575;" width="20" height="20"></iconify-icon>
        </div>
        </nav>`;
  }
}

customElements.define("navbar-component", Navbar);

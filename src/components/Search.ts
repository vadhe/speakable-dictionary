class SearchBar extends HTMLElement {
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
    this.innerHTML = `<div class="search-bar">
    <input></input>
    <iconify-icon icon="circum:search" style="color: #A445ED;" width="24" height="24"></iconify-icon>
    </div>`;
  }
}

customElements.define("search-bar-component", SearchBar);

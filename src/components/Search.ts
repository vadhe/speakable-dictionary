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
  async handleSearch(event: any) {
    console.log(event.target.value);
  }

  // Other lifecycle callbacks and methods
  render() {
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot !== null) {
      this.shadowRoot.innerHTML = `
      <style>
      .search-bar {
        margin-top: 2.813rem;
        padding: 0.5rem;
        justify-content: space-between;
        display: flex;
        border: 0.1rem solid rgb(244 244 244);
        border-radius: 1rem;
        background: rgb(244 244 244);
      }
      
      
      .search-bar input {
        border: none;
        width: 100%;
        background: transparent;
        outline: none;
        font-weight: bold;
        font-size: 0.125;
      }
          </style>
      <div class="search-bar">
    <input id="keyword"></input>
    <iconify-icon icon="circum:search" style="color: #A445ED;" width="24" height="24"></iconify-icon>
    </div>`;
      const keywordInput = this.shadowRoot!.getElementById("keyword");
      if (keywordInput !== null) {
        keywordInput.addEventListener("input", this.handleSearch.bind(this));
      }
    }
  }
}

customElements.define("search-bar-component", SearchBar);

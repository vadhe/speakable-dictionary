class SearchBar extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.render();
  }

  render() {
      this.innerHTML = `
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
  }
}

customElements.define("search-bar-component", SearchBar);

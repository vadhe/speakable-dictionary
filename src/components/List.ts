class List extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }



  render() {
    const title = this.getAttribute("title");
    const data = JSON.parse(this.getAttribute("data") || "[]");
    this.innerHTML = `<div class="list">
     <div>
     <h3>${title}</h3>
     <hr/>
     </div>
     <p>Meaning</p>
     <ul>
     ${data.map((item: string) => `<li>${item}</li>`)}
     </ul>
      </div>`;
  }
}

customElements.define("list-component", List);

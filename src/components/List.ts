class List extends HTMLElement {
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
    console.log(JSON.parse(this.getAttribute("data") || "[]"))
    const title = this.getAttribute("title");
    // const data = JSON.parse(JSON.stringify(this.getAttribute("data")))
    this.innerHTML = `<div class="list">
     <div>
     <h3>${title}</h3>
     <hr/>
     </div>
     <p>Meaning</p>
     <ul>
     </ul>
      </div>`;
  }
}

customElements.define("list-component", List);
// ${data.map((item: any) => `<li>${item}</li>`)}

class WordDetails extends HTMLElement {
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
      this.innerHTML = `<div>WordDetails</div>`;
    }
  }
  
  customElements.define("word-details-component", WordDetails);
  
class Pronoun extends HTMLElement {
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
    this.innerHTML = `<div class="pronoun">
      <div>
      <p>Keybord</p>
      <p>/ˈkiː.bɔːd/</p>
      </div>
      <iconify-icon icon="carbon:play-filled" style="color:#A445ED;" width="50" height="50"></iconify-icon>
      </div>`;
  }
}

customElements.define("pronoun-component", Pronoun);

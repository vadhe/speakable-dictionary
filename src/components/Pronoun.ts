class Pronoun extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    this.render();
  }
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

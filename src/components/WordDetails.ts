import "../components/List";
const data = [
  "(etc.) A set of keys used to operate a typewriter, computer etc.",
  "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
  "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
];
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
    this.innerHTML = `<div class="word-detail">
      <list-component title="noun" data='${JSON.stringify(data)}'></list-component>
      <list-component title="verb" data='${JSON.stringify(data)}'></list-component>
      </div>`;
  }
}

customElements.define("word-details-component", WordDetails);

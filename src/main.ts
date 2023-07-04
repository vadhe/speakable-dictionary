import './components/Navbar'
import './components/Search'
import './components/WordDetails'
import './components/Pronoun'
import './style.css'
// import { setKeyword, getKeyword } from './state'

class Home extends HTMLElement  {
    private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
    constructor() {
        super();
      }
    
    
      connectedCallback() {
        this.render();
        const keyword =  document.getElementById("keyword") as HTMLInputElement
        if (keyword) {
            keyword.addEventListener('input', () => {
                if (this.debounceTimeout) {
                  clearTimeout(this.debounceTimeout);
                }
                this.debounceTimeout = setTimeout(() => {
                  this.fetchWord(keyword.value);
                }, 500); // Debounce delay: 500ms
              });
          }
      }
     async fetchWord (keyword: string) {
       try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
        const data = response.json();
        console.log(data)
       } catch {

       }  
     }
      render() {
        this.innerHTML = `
        <navbar-component></navbar-component>
        <search-bar-component></search-bar-component>
        <pronoun-component></pronoun-component>
        <word-details-component></word-details-component>
        `
      }
}

customElements.define("home-component", Home);
const state = {
    keyword: "",
  };
  
  export function setKeyword(value: string) {
    state.keyword = value;
  }
  
  export function getKeyword() {
    return state.keyword;
  }
  
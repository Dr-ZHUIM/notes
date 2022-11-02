class ZhuimTitle extends HTMLElement{
  
  constructor(){
    super();
  }

  private connectedCallback(){
    this.innerHTML = "<h1>This is a custom element</h1>"
  }

}

customElements.define("zhuim-title",ZhuimTitle)

export{}
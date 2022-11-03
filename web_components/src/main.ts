class ZhuimTitle extends HTMLElement{
  
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = "<h1>This is a custom element</h1>"
  }

}

class ZhuimPopupInfo extends HTMLElement{

  constructor(){
    super();
  }

  connectedCallback(){
    // set a shadow dom root
    this.attachShadow({mode:"open"});
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class","wrapper");
    const icon = wrapper.appendChild(document.createElement("span"));
    icon.setAttribute("class","icon");
    icon.setAttribute("tabindex","0");
    const img = icon.appendChild(document.createElement("img"));
    img.src = this.hasAttribute("img") ? this.getAttribute("img") as string : "img/default.png";
    img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") as string : "";
    const info = wrapper.appendChild(document.createElement("span"));
    info.setAttribute("class","info");
    info.textContent = this.getAttribute("data-text");
    const style = document.createElement("style");
    style.textContent = `.wrapper {
      position: relative;
    }
    
    .info {
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid black;
      padding: 10px;
      background: white;
      border-radius: 10px;
      opacity: 0;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
    }
    
    img {
      width: 1.2rem;
    }
    
    .icon:hover + .info, .icon:focus + .info {
      opacity: 1;
    }`;
    this.shadowRoot?.append(style,wrapper);
  }

}


class ZhuimParagraph extends HTMLElement{
  constructor(){
    super();
    let template = document.getElementById("zhuim-paragraph") as HTMLElement & {content : HTMLElement};
    let templateContent = template && template.content;
    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}


customElements.define("zhuim-title",ZhuimTitle);
customElements.define("zhuim-popup-info",ZhuimPopupInfo);
customElements.define("zhuim-p",ZhuimParagraph);

export{}
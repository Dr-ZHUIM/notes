
class ElementDetails extends HTMLElement{
    constructor(){
        super();
        const templateTarget = document.getElementById("element-details-template") as HTMLElement & {content:HTMLElement};
        const template = templateTarget && templateTarget.content;
        const shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(template.cloneNode(true));
    };
}


customElements.define(
    'element-details',
    ElementDetails
)

export{}
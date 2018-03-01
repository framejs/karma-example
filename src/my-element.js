(() => {
    class MyElement extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
      
        connectedCallback() {
          this.shadowRoot.innerHTML = "Hello";
        }
      }
      
      window.customElements.define("my-element", MyElement);
})();
class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Proyecto Jose Eduardo Martinez Flores 5NV50.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

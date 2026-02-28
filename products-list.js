import { LitElement, html } from "lit";

export default class ProductsList extends LitElement {
  constructor() {
    super();
    this.products = [];
  }

  connectedCallback() {
    this.products = [
      {
        id: 1,
        name: "Product 1",
      },
      {
        id: 2,
        name: "Product 2",
      },
    ];
  }

  render() {
    const { products } = this;

    return html`
      <h1>Products List</h1>
      <ul>
        ${products.map((product) => {
          const { id, name } = product;

          return html`<li>${id}) ${name}</li>`;
        })}
      </ul>
    `;
  }
}

customElements.define('products-list', ProductsList);
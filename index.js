import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js'
import { html } from 'lit';
import './products-list.js';

globalThis.litSsrCallConnectedCallback = true;

const ssrResult = render(html`<products-list></products-list>`);
const contents = await collectResult(ssrResult);

console.log(contents);
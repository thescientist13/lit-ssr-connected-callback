# lit-ssr-connected-callback

A demonstration repo for testing Lit SSR w/ [`connectedCallback` support](https://github.com/lit/lit/releases/tag/%40lit-labs%2Fssr%403.3.0).

## Setup

1. Clone the repo
1. Have NodeJS LTS installed (or run `nvm use`)
1. Run `npm ci`

## Demo

To see the demo, run:

```sh
$ node .
```

See the list of products rendered in the output

```sh
<!--lit-part tnY8fpnM7aw=--><products-list><template shadowroot="open" shadowrootmode="open"><!--lit-part k+em+sM8JO4=-->
  <h1>Products List</h1>
  <ul>
    <!--lit-part--><!--lit-part 9/uX7TEHgAo=--><li><!--lit-part-->1<!--/lit-part-->) <!--lit-part-->Product 1<!--/lit-part--></li><!--/lit-part--><!--lit-part 9/uX7TEHgAo=--><li><!--lit-part-->2<!--/lit-part-->) <!--lit-part-->Product 2<!--/lit-part--></li><!--/lit-part--><!--/lit-part-->
  </ul>
<!--/lit-part--></template></products-list><!--/lit-part-->
```
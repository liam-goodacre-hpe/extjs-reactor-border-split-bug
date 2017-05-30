This is a clone of https://github.com/unional/reactor-typescript-boilerplate but with the example changed to demonstrate a bug.

## Reproduction

* Run the app with `npm start`
* Go to [http://localhost:8889](http://localhost:8889)
* Should see an east panel with a splitter on the left
* Wait five seconds (the state will change and component rerenders)
* See the splitter jump to the right of the east panel
* The west panel is unaffected


## Requirements

* Ext JS 6.2+
* Sencha Cmd 6.2+


## Quick Start

If you haven't already, download Ext JS 6.2+ and Sencha Cmd 6.2+ (and install it).

Then, run the following to clone and build the project:

```sh
git clone https://github.com/liam-goodacre-hpe/extjs-reactor-tab-bug

cd extjs-reactor-tab-bug
npm install
```

Copy your Ext JS SDK into ./ext.


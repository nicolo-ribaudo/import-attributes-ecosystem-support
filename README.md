# Import Attributes support in tools

Tools:

- [x] Webpack
- [x] Rollup
- [ ] Babel ([babel/babel#15536](https://github.com/babel/babel/pull/15536))
- [ ] SWC ([swc-project/swc#7179](https://github.com/swc-project/swc/issues/7179))
- [ ] ESLint
- [ ] TypeScript ([microsoft/TypeScript#53656](https://github.com/microsoft/TypeScript/issues/53656))

Engines:

- [ ] V8 (Chrome, Edge, Note.js, Deno)
- [ ] SpiderMonkey (Firefox)
- [ ] JSC (Safari)
- [ ] XS

Notes:
- V8 currently supports the `assert` syntax, whose removal is being investigated.
- Bun uses JSC, but supports import attributes by internally transpiling them.

## Webpack

Supported since version 5.48.0; make sure that its `acorn-import-assertions` dependency is at least version 1.9.0.

Run `npm ci` and `npm run webpack`; it will bundle `src/` to `dist/out.webpack.js`

## Rollup

Supported since v3.22.1.

Run `npm ci` and `npm run rollup`; it will bundle `src/` to `dist/out.rollup.js`

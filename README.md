Author: **Florent Catiau-Tristant**

## This is the source files of my personal resume!

> All the textual content writen in the HTML files are personal and must not be used in any other context.  
Nonetheless, you are free to inspire yourself from this repository as long as you don't keep the textual content for your personal usage.

# See the resume

Just open the `index.html` on any browser.

## Developping:

While developing:

```bash
yarn install

yarn dev
```

## Final build

By default, the final html is obfuscated.
That means every private data is removed, to avoid them being crawled by bots on internet.

Build once:

```bash
yarn build
# without obfuscation
yarn build:private
```

## Get the .pdf

Open the html on the browser, then **right click > Print > Export as PDF**

It's done :)
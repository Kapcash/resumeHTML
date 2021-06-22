Author: **Florent Catiau-Tristant**

## This is the source files of my personal resume!

> All the textual content writen in the HTML files are personal and must not be used in any other context.  
Nonetheless, you are free to inspire yourself from this repository as long as you don't keep the textual content for your personal usage.

# See the resume

1. Set env variables

```bash
# .env
PHONE="+33 6 00 00 00 00"
EMAIL=thisisnotmyemail@bots.js
ADDRESS="Highway to hell"
```

This values will be injected into the final html

2. Build the final bundle

```bash
yarn install

yarn build
```

3. Open the `index.html` on any browser.

> Note: The folders imgs/ and css/ must be at the same level as `index.html` in order to be loaded correctly.

## Obfuscated data

By default, the final html is obfuscated.
That means every private data is removed, to avoid them being crawled by bots on internet.

```bash
# without obfuscation
yarn build:private
```

## Developping:

While developping, scss files can be automatically compiled on save using:

```bash
yarn dev
```

## Get the .pdf

Open the html on the browser, then **right click > Print > Export as PDF**

It's done :)

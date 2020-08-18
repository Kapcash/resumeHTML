Author: **Florent Catiau-Tristant**

## This is the source files of my personal resume!

> All the textual content writen in the HTML files are personal and must not be used in any other context.  
Nonetheless, you are free to inspire your work from this repository as long as you don't keep the textual content for your personal usage.

# Open the page

Just open the `index.html` on any browser.

## Compile stylesheet:

Install the `sass` cli tool:

```bash
npm install -g sass
```

Then use

```bash
sass --watch ./index.scss dist/index.css
```

And all the `.scss` are merged and compiled into a single `.css` file.

## Get the .pdf

Open the html on the browser, then **right click > Print > Export as PDF**

It's done :)
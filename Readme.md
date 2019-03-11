# Quick copy for markdown reference(auto attach title when copy url)
## Introduction
Copy the url & the title to make it for reference via Popclip quickly.Pattern like below<br />
```
[use custom domain with hexo && how to reset to origin](https://alexzl5.github.io/use-custom-domain-with-hexo/)
```
![auto](media/auto.gif)


## Attention
XMLHttpRequest package required(as it's not distributed with Node).<br />
You could install it via following commands.
```
cd ~/Library/Application Support/PopClip/Extension/Markdown.popclipext
npm install xmlhttprequest
```
## Bugs
Some website's gonna be crazy. Like `https://www.regular-expressions.info/dot.html`
![terrible-regular-express](media/terrible-regular-express.png)
So just need to change the reg from `/(?<=\<h1.*\>).*(?=\<\/h1\>)/g` into `/(?<=\<h1.*\>).*(?=\<\/h1\>)/ig`

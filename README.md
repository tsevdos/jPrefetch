# jprefetch #

A jquery plugin for easier and more dynamic implementation implementing of the new HTML5 prefetch attribute. For more details regarding the HTML5 prefetch I strongly recommend to read my article [HTML5 prefetching](http://phrappe.com/markup/html5-prefetching/)

## Prefetching Notes ##

The below notes on how prefetcing works are written from   [David Walsh](http://davidwalsh.name/), and more specifically at his excellent article [HTML5 Link Prefetching](http://davidwalsh.name/html5-prefetch)

- Prefetching does work across domains, including pulling cookies from those sites.
- Prefetching can throw off website statistics as the user doesn't technically visit a given page.


## Browser Support ##

Firefox and Chrome are the browsers that currently support prefetching. Chrome doesn't use the web standard way, (prefetch attribute `<link rel="prefetch" href="http://phrappe.com">`) but you can make use the non-standard prerender prerender attribute (`<link rel="prerender" href="http://phrappe.com">`). The plugin supports both versions.

## Credits ##
This jQuery plugin was inspired by these articles:

- [Mastering HTML5 Prefetching](http://www.catswhocode.com/blog/mastering-html5-prefetching)
- [Link Prefetching with HTML 5 and jQuery](http://gavinmorrice.com/blog/posts/tagged/optimization)

## MIT License (MIT) ##

Copyright (C) 2013 John Tsevdos
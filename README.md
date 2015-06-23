# Blank image finder

Bit of js to find images with blank paths. This pain in the ass issue causes an additional request to the page itself.

Looks for:
- images with blank SRC
- background-image CSS attribute being blank. Checks every element on page as well as ```:before``` and ```:after``` on every element

Wtitten in ES6, compiled with browserify and babelify, bookmarklet generated with bookmarklet.
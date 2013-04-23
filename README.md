cispablackout.js
===============

This code was written for an event in the past, but may be useful to fork in the future for similar occasions.

The file `cispablackout.js` is now empty (to make it more efficients at sites where the webmasters still include that file).
the code is still available at `cispablackout-always.js` &mdash; a version that works regardless of date (for [demo](http://thedod.github.io/cispablackout) purposes).

------

### Original "pre-blackout" README
This is a Javascript utility to blackout websites on April 22, 2013. this utility will overlay a popup linking to [sitesnotspies.org](sitesnotspies.org)

If you have a non-SSL site, simply add this before your `</body>`:

`<script type="text/javascript" src="http://thedod.github.io/cispablackout/cispablackout.js"></script>`

At the moment, the only solution for SSL sites is to [download]() the code and serve it locally.
You'll also need to fix the url at `cispablackout.js` (search for <em>FIX THIS</em>).

Good luck.

License
-------

Opriginal sopa code: Copyright 2012 [Ian Li](http://ianli.com),
Licensed under [the MIT license](http://www.opensource.org/licenses/mit-license.php).

[The Dod](https://dubiousdod.org) mashed it up with ["Aaron's law"](http://fixthecfaa) code.
All rights perverse.

**Note:** This was done fast. If you find an error, either send a pull request, or tell me ([@TheRealDod](https://twitter.com/TheRealDod) or via Github).

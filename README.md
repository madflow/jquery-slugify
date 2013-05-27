[![Build Status](https://travis-ci.org/madflow/jquery-slugify.png?branch=master)](https://travis-ci.org/madflow/jquery-slugify)

# Slugify

Just another another (another) url slug creation plugin for jQuery.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/madflow/jquery-slugify/master/dist/slugify.min.js
[max]: https://raw.github.com/madflow/jquery-slugify/master/dist/slugify.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/slugify.min.js"></script>

<input type ="text" value="" id="slug-source" /> <!-- The text to be slugged -->
<input type ="text" value="" id="slug-target" /> <!-- The processed text as slug -->

<script>
jQuery(function($) {
  $.slugify("Ätschi Bätschi"); // "aetschi-baetschi"
  $('#slug-target').slugify('#slug-source'); // Type as you slug
});
</script>
```
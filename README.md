[![Build Status](https://travis-ci.org/madflow/jquery-slugify.png?branch=master)](https://travis-ci.org/madflow/jquery-slugify)

# jQuery Slugify

Just another another (another) url slug creation plugin for jQuery.

## Getting Started

You can install the plugin using Bower:

    bower install jquery-slugify

You can download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/madflow/jquery-slugify/master/dist/slugify.min.js
[max]: https://raw.github.com/madflow/jquery-slugify/master/dist/slugify.js

The plugin depends on [speakingurl][speakingurl].

[speakingurl]: https://github.com/pid/speakingurl

In your web page:

```html
<script src="jquery.js"></script>
<script src="speakingurl.min.js"></script>
<script src="slugify.min.js"></script>

<input type ="text" value="" id="slug-source" /> <!-- The text to be slugged -->
<input type ="text" value="" id="slug-target" /> <!-- The processed text as slug -->

<script>
jQuery(function($) {
  $.slugify("Ätschi Bätschi"); // "aetschi-baetschi"
  $('#slug-target').slugify('#slug-source'); // Type as you slug

  $("#slug-target").slugify("#slug-source", {
  	separator: '_' // If you want to change separator from hyphen (-) to underscore (_).
  });
});
</script>
```

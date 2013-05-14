/*
 * https://github.com/madflow/jquery-slugify
 *
 * Copyright (c) 2013 Florian Reiss
 * Licensed under the MIT license.
 */

;(function($) {

    $.fn.slugify = function(source, options) {
        return this.each(function() {
            var $target = $(this),
                $source = $(source);

            $source.on('keyup change ',function() {
                $target.val($.slugify($source.val(), options));
            });
        });
    };

    // Static method.
    $.slugify = function(sourceString, options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.slugify.options, options);
        sourceString = $.trim(sourceString); // Trim
        sourceString = sourceString.toLowerCase();  // Lower Case
        $.each(options.replaceMap, function(key, value) { // Special char map
            sourceString = sourceString.replace(new RegExp(key, 'g'), value);
        });
        return sourceString.toLowerCase()
                .replace(/\s+/g, options.whitespace) // Replace whitespace characters
                .replace(/[^a-z0-9 \-]/g, options.invalid); // Replace invalid characters
    };

    // Default options
    $.slugify.options = {
        maxLength: 999,
        whitespace: '-',
        invalid: '',
        replaceMap: {
            "ä" : "ae",
            "ö" : "oe",
            "ü" : "ue",
            "ß" : "ss",
            "ã" : "a",
            "à" : "a",
            "á" : "a",
            "â" : "a",
            "ẽ" : "e",
            "è" : "e",
            "é" : "e",
            "ê" : "e",
            "ë" : "e",
            "ì" : "i",
            "í" : "i",
            "ï" : "i",
            "î" : "i",
            "õ" : "o",
            "ò" : "o",
            "ó" : "o",
            "ô" : "o",
            "ù" : "u",
            "ú" : "u",
            "û" : "u",
            "ñ" : "n",
            "ç" : "c"
        }
    };
    
}(jQuery));

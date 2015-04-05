/*! jQuery Slugify - v1.0.4 - 2015-04-05
* https://github.com/madflow/jquery-slugify
* Copyright (c) 2015 madflow; Licensed MIT */
;(function($) {

    $.fn.slugify = function(source, options) {

        return this.each(function() {
            var $target = $(this),
                $source = $(source);

            $target.on('keyup change', function() {
                if ($target.val() !== '' && $target.val() !== undefined) {
                    $target.data('locked', true);
                } else {
                    $target.data('locked', false);
                }
            });

            $source.on('keyup change', function() {
                if (true === $target.data('locked')) {
                    return;
                }
                if ($target.is('input') || $target.is('textarea')) {
                    $target.val($.slugify($source.val(), options));
                } else {
                    $target.text($.slugify($source.val(), options));
                }
            });
        });
    };

    // Static method.
    $.slugify = function(sourceString, options) {

        // Override default options with passed-in options.
        options = $.extend({}, $.slugify.options, options);

        // Apply preSlug function - if exists
        if (typeof options.preSlug === 'function') {
            sourceString = options.preSlug(sourceString);
        }

        sourceString = options.slugFunc(sourceString, options);

        // Apply postSlug function - if exists
        if (typeof options.postSlug === 'function') {
            sourceString = options.postSlug(sourceString);
        }

        return sourceString;
    };

    // Default plugin options
    $.slugify.options = {
        preSlug: null,
        postSlug: null,
        slugFunc: function(input, opts) {
            return window.getSlug(input, opts);
        }
    };

}(jQuery));
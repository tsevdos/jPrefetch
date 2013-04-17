// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "jPrefetch",
        defaults = {};

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).

            this.findElements( this.element );

        },

        findElements: function(el){
            var $el     = $(el),
                tagName = $el.prop('tagName').toLowerCase(),
                prefetchURL;

            // test if element has data-prefetch attribute
            if ( $el.data('prefetch') === true ){

                if ( tagName === 'a' ) {
                    //It's a link
                    prefetchURL = $el.attr('href');
                } else if ( tagName === 'img'){
                    //It's an image
                    prefetchURL = $el.attr('src');
                }

                this.addPrefetchTags(prefetchURL);

            }

        },

        addPrefetchTags: function(url) {
            
            // For Firefox - create a link element with a prefect attribute (W3C standard)
            $("<link />", {
                // with rel=prefetch
                rel: "prefetch",
                href: url
            }).appendTo("head");

            // For Chrome -create a link element with a prerender attribute (non-standard, Chrome only). More info at http://phrappe.com/markup/html5-prefetching/
            $("<link />", {
                // with rel=prefetch
                rel: "prerender",
                href: url
            }).appendTo("head");

        }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
(function($){


    $.jPrefetch = function( prefetchURL ){

        if ( prefetchURL ) {
            // Prefetch the specific url
            addPrefetchTags(prefetchURL);
        } else {
            // Select all the links (a) elements with data attribute data-prefetch
            var url = $('a[data-prefetch="true"]').first().attr('href');
            addPrefetchTags(url);
        }

        function addPrefetchTags (url){
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

        return this;

    };

})(jQuery);
// @licence MIT © FinelySliced 2012
// @see https://github.com/FinelySliced/leanModal.js
// @usage http://leanmodal.finelysliced.com.au/
(function($){

    var leanModal = {
        defaults: {
            top: 100,
            overlay: 0.5,
            closeButton: null
        },
        open: function(selector, o) {
            $("#lean_overlay").click(function() { 
                leanModal.close(selector);                    
            });
            $(o.closeButton).click(function() { 
                leanModal.close(selector);                    
            });
            var modal_height = $(selector).outerHeight();
            var modal_width = $(selector).outerWidth();
            $('#lean_overlay').css({ 'display' : 'block', opacity : 0 });
            $('#lean_overlay').fadeTo(200,o.overlay);
            $(selector).css({ 
        	    'display' : 'block',
        	    'position' : 'fixed',
        	    'opacity' : 0,
        	    'z-index': 11000,
        	    'left' : 50 + '%',
        	    'margin-left' : -(modal_width/2) + "px",
        	    'top' : o.top + "px"
            });
            $(selector).fadeTo(200,1);
        },
        close: function(selector) {
            $("#lean_overlay").fadeOut(200);
            $(selector).css({ 'display' : 'none' });
        }
    };
 
    // Add to jQuery fn 
    $.fn.extend({ 

        leanModal: function(options) {
            // Add listener to all elements
            return this.each(function() {
                $(this).click(function(e) {
                    var modal_id = $(e.currentTarget).attr("href");
                    $.leanModal(modal_id, options);
                    e.preventDefault();
                });
             
            });
        } 

    });

    // Add to jQuery main (direct trigger)
    $.leanModal = function(selector, options) {
        var overlay = $("<div id='lean_overlay'></div>");
        $("body").append(overlay);
        options =  $.extend(leanModal.defaults, options);
        leanModal.open(selector, options);
    }
     
})(jQuery);

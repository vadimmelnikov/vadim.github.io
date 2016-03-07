$(document).ready(function() {
    $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').bPopup({
                position: [0, 20]
            });


            e.preventDefault();
        });
    });
    $.fn.replaceUrl = function() {
            var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
            this.each(function() {
                $(this).html(
                    $(this).html().replace(regexp, '<a href="$1" target="windowName">$1</a>'));
            });
            return $(this);
        }
        // например, ищем ссылки в див'е mydiv
    $('.popup').replaceUrl();

    // Filter

    //You can override any of these options and then call...
    	$('.portfolio-list').mixItUp();


});

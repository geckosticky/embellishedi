(function ($) {
  // All your code here
$(window).scroll(function () {
    $('#logo').each(function (i) {
        var wTop = $(window).scrollTop();
        var dirr = ((210 - wTop)/200);
            
            if (dirr > 1) dirr = 1;
            else if (dirr < 0) dirr = 0;

            $(this).css('opacity', dirr);
    });
});

}(jQuery));

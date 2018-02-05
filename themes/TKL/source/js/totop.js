(function ($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 800;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 450;

    function isElemShow() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > upperLimit) {
            $(scrollElem).css('bottom','50px');
        } else {
            $(scrollElem).css('bottom','-100px');            
        }
    }
    isElemShow();
    $(window).scroll(isElemShow);

    // Scroll to top animation on click
    $(scrollElem).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });
})(jQuery);
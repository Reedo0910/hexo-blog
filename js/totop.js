(function ($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 1000;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 450;

    // // Show and hide the scroll to top link based on scroll position
    // scrollElem.hide();

    function isElemShow() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > upperLimit) {
            $(scrollElem).stop().animate({bottom:'50px'});
        } else {
            $(scrollElem).stop().animate({bottom:'-100px'});
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
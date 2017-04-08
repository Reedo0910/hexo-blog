(function ($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 1000;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 450;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.hide();

    function isElemShow() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > upperLimit) {
            $(scrollElem).css("visibility", "visible");
            $(scrollElem).stop().fadeTo(100, 0.5); // fade back in
        } else {
            $(scrollElem).stop().fadeTo(100, 0); // fade out
            $(scrollElem).css("visibility", "hidden");
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
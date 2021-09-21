$(document).ready(function(){
    $nav = $('nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.$toggleCollapse('collapse');
    })

    // owl carousel
    $(".owl-carousel").owlCarousel();
});
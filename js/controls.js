$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
        $(".filtr-container .filtr-item").eq($(this).index()).show().siblings().hide();
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});

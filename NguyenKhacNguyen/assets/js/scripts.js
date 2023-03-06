$(document).ready(function (){
    $('.navbar-mobile').click(function (e) { 
        e.preventDefault();
        $('.mobile-bar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.mobile-bar').removeClass('active');
        $('.cover').removeClass('active');
    });
});
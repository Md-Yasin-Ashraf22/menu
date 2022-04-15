$(function(){

    $('#menu_toggle').on('click' , function(){
        $('.side_bar').toggleClass('active')
    })

    $('.mega_menu').slimScroll({
        height: '80vh !important',
    });


})
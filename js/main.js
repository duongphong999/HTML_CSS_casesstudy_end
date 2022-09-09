
$(document).ready(function(){
    $(window).scroll(function(){
        let otop= $('.section-2').offset().top - window.innerHeight;
        if($(window).scrollTop()>otop){
            $('.navbar').addClass('sticky');
    
        }else{
            $('.navbar').removeClass('sticky');
        }
        
    });
    $('.back-to-top').click(function(){
        $('html,body').animate({
            scrollTop:0},
            1400);
    });
});

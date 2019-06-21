$(document).ready(function(){
    $(window).scroll(function(){
      var scroled = $(this).scrollTop();
      if(scroled>100){
        $(".header-scroll").slideDown();
            }else{
                    $(".header-scroll").slideUp();
            }
          });
  
    $('section.home .header nav.navbar ul li a ').click(function(){
       $('html,body').animate(
            {
                scrollTop:$('#'+$(this).data('value')).offset().top
        
            },1500);
    });
});
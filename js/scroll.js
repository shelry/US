$(function(){
    
    var $win = $(window)
    var $top = $('.topBtn')
    var topPos = $('.topBtn').position().top
    //var $sns = $contact.find('h3')
    var $contact = $('#s1 .step')
     var nowScroll = $win.scrollTop()

    


    var ear1Top = $('#s1').position().top
    var ear2Top = $('#s2').position().top
    var ear3Top = $('#s3').position().top
    var ear4Top = $('#s4').position().top
    
    if(nowScroll >= ear2Top){
      $('.earPhone').animate({top:500},5000)}else{
      $('.earPhone').fadeOut(300)}
    
  /*  
       var snsPos = $contact.position().top-200
            if(nowScroll>=snsPos){
                $sns.each(snsEffect)
        function snsEffect(){
                    $(this).animate({
                        opacity:0,},500)
                }
            }
   */
        function top(){
    $('html,body').animate({scrollTop:0},300)
    }
    $('.topBtn').click(top)
    
    function scrollMove(){       
        if(nowScroll >= topPos-1){        
           $top.fadeIn(300)
        }else{
            $top.hide()
        }
        
    }
    
      $win.scroll(scrollMove)

})
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('nav').css('background-color', '#f8f9fa');
        } else {
            $('nav').css('background', 'none');
        }
    });
    $('.faq-list-item').click(function(){
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 1000; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});
function showThxMessage(){
   var email = document.myForm.emailAddress.value;
   if(email !== ''){
       var thxDiv = document.getElementById('thxMessage');
       thxDiv.getElementsByTagName('span')[0].innerHTML = email;
       document.myForm.reset();
       document.getElementById('formWrapper').style.display = 'none';
       thxDiv.style.display = 'block';
   }
}

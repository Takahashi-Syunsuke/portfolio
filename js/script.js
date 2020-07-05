$(document).ready(function(){

  // humburger-menue 
  $('.menu-trigger').on('click', function(){
    var winWidth  = $(window).width();
    $(this).toggleClass('active');
    $('#sns-box')
      .css('bottom', '0')
      .slideToggle();
  })

  // skills-circle
  $('.vba, .html, .js, .php, .ruby, .aws, .yt, .wp')
  .on('mouseover', function(){
    $(this)
      .css({ 'background-size': 40 + '%', transition: '.3s'  })
      .children().css({ opacity: .9, transition: '.3s' });
  })
  .on('mouseleave', function(){
    $(this)
      .css({ 'background-size': 30 + '%', transition: '.3s'  })
      .children().css({ opacity: 0, transition: '.3s' });
  })
  
  // scroll
  $(window).on('scroll', function(){
    var scTop     = $(window).scrollTop();
    var winHeight = $(window).height();
    var winWidth  = $(window).width();
    
    var scBottom      = scTop + winHeight;
    var menuBottom    = winHeight + 40;
    var skills1Bottom = menuBottom + winWidth / 3;
    var skills2Bottom = menuBottom + winWidth / 3 * 2;
    var skills3Bottom = menuBottom + winWidth;
    var messageBottom = skills3Bottom + winHeight;
    var bgPosition = scTop / 2;
    var bgPositionProfile = messageBottom + scTop / 2;

    // scroll for header
    $('.bg-img-header').css('background-position', 'center top +' + bgPosition + 'px');

    // scroll for skills
    if(winWidth > 576){
      if(scBottom > menuBottom + 100){
        $('.vba, .html, .js').css({ opacity: 1, marginTop: 0, transition: '1s' });
      }else{
        $('.vba, .html, .js').css({ opacity: 0, marginTop: 100, transition: '1s' });
      }

      if(scBottom > skills1Bottom + 100){
        $('.php, .ruby, .aws').css({ opacity: 1, marginTop: 0, transition: '1s' });
      }else{
        $('.php, .ruby, .aws').css({ opacity: 0, marginTop: 100, transition: '1s' });
      }

      if(scBottom > skills2Bottom + 100){
        $('.yt, .wp').css({ opacity: 1, marginTop: 0, transition: '1s' });
      }else{
        $('.yt, .wp').css({ opacity: 0, marginTop: 100, transition: '1s' });
      }
    }else{
      $('.vba, .html, .js, .php, .ruby, .aws, .yt, .wp').css({ opacity: 1, marginTop: 0, transition: '.1s' });
    }

    // scroll for message
    if(scBottom > messageBottom - 200){
      $('#message').css({ borderRadius: 0, transition: '.7s' })
      $('.bg-img-message').css( 'background-position', '50% 50%' )
    }else{
      $('#message').css({borderRadius: 50 + '%', transition: '.7s' })
      $('.bg-img-message').css( 'background-position', '50% 70%' )
    }

    // scroll for profile
    if(scBottom > messageBottom){
      $('.bg-img-profile').css('background-position', 'center top +' + bgPositionProfile + 'px');
    }

    if(scBottom > messageBottom + 130){
      $('.box-profile-1').css({ top: 30, opacity: 1, transition: '.7s' });
    }else{
      $('.box-profile-1').css({ top: 130, opacity: 0, transition: '.7s' });
    }

    if(scBottom > messageBottom + 340){
      $('.box-profile-2').css({ top: 240, opacity: 1, transition: '.7s' });
    }else{
      $('.box-profile-2').css({ top: 340, opacity: 0, transition: '.7s' });
    }

    if(scBottom > messageBottom + 584){
      $('.box-profile-3').css({ top: 484, opacity: 1, transition: '.7s' });
    }else{
      $('.box-profile-3').css({ top: 584, opacity: 0, transition: '.7s' });
    }
  });
})
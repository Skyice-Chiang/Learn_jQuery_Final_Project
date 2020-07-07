$(document).ready(function () {
    // 輪播效果
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 1000,
        effect : 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

    // 回到最上層
    $('.gotop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    //打開選單
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown-open').slideToggle();
    });

    //點擊後，次選單消失
    $('.dropdown-open').click(function (e) { 
        e.preventDefault();
        $(this).fadeOut();
    });

    //離開次選單後，次選單消失

    $('.dropdown-open').mouseleave(function () { 
        $(this).fadeOut();
    });
});
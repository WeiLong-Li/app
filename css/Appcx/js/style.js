var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
 var swiper = new Swiper('.swiper2', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
 // var swiper = new Swiper('.swiper-container', {
 //      spaceBetween: 30,
 //      centeredSlides: true,
 //      loop:true,
 //      autoplay: {
 //        delay: 2500,
 //        disableOnInteraction: false,
 //      },
 //      pagination: {
 //        el: '.swiper-pagination',
 //        clickable: true,
 //      },
 //    });
var Footer = document.getElementsByClassName('footer')[0];
var Li = Footer.getElementsByTagName('li');
var Span = Footer.getElementsByTagName("span");
  for(let i = 0;i<Li.length;i++){
    Li[i].onclick = function(){
      for(let i = 0;i<Li.length;i++){
        Li[i].style.color = "#ddd";
      }
      Li[i].style.color = "#38BFF7";
    }
  }
  for(let i = 0;i<Span.length;i++){
    Span[i].onclick = function(){
      for(let i = 0;i<Span.length;i++){
        Span[i].style.color = "#ddd";
      }
      Span[i].style.color = "#38BFF7";
    }
  }
document.querySelector('.contact-btn').addEventListener('click',function(){
    alert('dkfjk')
})
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
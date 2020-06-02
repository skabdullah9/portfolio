document.querySelector('.contact-btn').addEventListener('click',function(){
    alert('dkfjk')
})
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
window.onscroll = function() {progress()}
 function progress(){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop
  let height= document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrolled = (windowScroll/height)*100;
  document.getElementById('progress-bar').style.width=scrolled+"%";
 }
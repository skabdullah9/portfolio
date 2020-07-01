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
  
  
  if (windowScroll>=800){
    document.querySelector('.pageUp').style.display="inline-block"
  } else {
    document.querySelector('.pageUp').style.display="none"
  }
 }
 let texts=['A Creative Freelancer','A Full Stack Developer', 'A UI/UX Designer'];
 let count=0;
 let index=0;
 let currentText='';
 let letter=''
 function type(){
  if(count===texts.length){
    count=0
  }
  currentText=texts[count]
  letter=currentText.slice(0,index++)
  document.querySelector('.typewriter').textContent=letter
  if(letter.length===currentText.length){
    count++;
    index=0;
  }
  setTimeout(type,400)
 }
 type()
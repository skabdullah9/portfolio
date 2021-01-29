window.addEventListener('keydown',e=>{
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return
    play(audio)
})
function removeTransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('play')
}
let boxes=document.querySelectorAll('.box');
boxes.forEach(box=>{
    box.addEventListener('transitionend',removeTransition)
})

document.addEventListener('click',e=>{
    let audio = e.target.children[1] || e.target.parentElement.children[1];
    if(audio.classList.contains('key')) play(audio)
})

function play(audio) {
    audio.currentTime=0;
    audio.play()
    let box=audio.parentElement
    box.classList.add('play')
}
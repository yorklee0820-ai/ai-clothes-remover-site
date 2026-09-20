/* slider + nav — shared across all pages */
document.querySelectorAll('.slider').forEach(function(sl){
  var af=sl.querySelector('.after'),hd=sl.querySelector('.handle');
  if(!af||!hd)return;
  function set(x){var r=sl.getBoundingClientRect();var p=Math.min(Math.max((x-r.left)/r.width,0),1)*100;
    af.style.setProperty('--split',p+'%');hd.style.left=p+'%';}
  var drag=false;
  sl.addEventListener('pointerdown',function(e){drag=true;set(e.clientX);try{sl.setPointerCapture(e.pointerId)}catch(_){}});
  sl.addEventListener('pointermove',function(e){if(drag)set(e.clientX)});
  sl.addEventListener('pointerup',function(){drag=false});
  sl.addEventListener('pointercancel',function(){drag=false});
  hd.setAttribute('tabindex','0');
  hd.addEventListener('keydown',function(e){var r=sl.getBoundingClientRect(),c=parseFloat(hd.style.left)||50;
    if(e.key==='ArrowLeft'){set(r.left+r.width*(c-2)/100);e.preventDefault()}
    if(e.key==='ArrowRight'){set(r.left+r.width*(c+2)/100);e.preventDefault()}});
});
document.querySelectorAll('.burger').forEach(function(b){
  b.addEventListener('click',function(){
    var l=document.querySelector('header .nav-links');
    if(l) l.classList.toggle('open');
  });
});

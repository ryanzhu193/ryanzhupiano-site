// Opens and closes the full-screen menu (the three-line button).
(function(){
  var btn=document.querySelector('.menu-btn'),panel=document.getElementById('site-menu'),root=document.documentElement;
  if(!btn||!panel)return;
  function setOpen(open){
    if(open){
      // Start the colour sweep from the centre of the button.
      var r=btn.getBoundingClientRect();
      panel.style.setProperty('--mx',(r.left+r.width/2)+'px');
      panel.style.setProperty('--my',(r.top+r.height/2)+'px');
    }
    root.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
  }
  btn.addEventListener('click',function(){setOpen(btn.getAttribute('aria-expanded')!=='true')});
  document.addEventListener('keydown',function(e){
    if(btn.getAttribute('aria-expanded')!=='true')return;
    if(e.key==='Escape'){setOpen(false);btn.focus();return}
    // Keep keyboard focus inside the open menu.
    if(e.key==='Tab'){
      var links=panel.querySelectorAll('a'),last=links[links.length-1];
      if(!e.shiftKey&&document.activeElement===last){e.preventDefault();btn.focus()}
      else if(e.shiftKey&&document.activeElement===btn){e.preventDefault();last.focus()}
    }
  });
})();

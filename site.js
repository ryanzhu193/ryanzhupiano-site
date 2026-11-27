// Opens and closes the full-screen menu (the three-line button).
(function(){
  var btn=document.querySelector('.menu-btn'),panel=document.getElementById('site-menu'),root=document.documentElement;
  if(!btn||!panel)return;
  // Give each menu item an upright and an italic copy, so hovering can fade smoothly between them.
  panel.querySelectorAll('.wrap a').forEach(function(a){
    var t=a.textContent;a.textContent='';
    var w=document.createElement('span');w.className='t';
    var r=document.createElement('span');r.className='r';r.textContent=t;
    var i=document.createElement('span');i.className='i';i.textContent=t;i.setAttribute('aria-hidden','true');
    w.appendChild(r);w.appendChild(i);a.appendChild(w);
  });
  // Centre the colour circle on the button, sized to reach the far corner of the screen.
  function place(){
    var b=btn.getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,
        w=window.innerWidth,h=window.innerHeight,
        r=Math.hypot(Math.max(x,w-x),Math.max(y,h-y));
    panel.style.setProperty('--mx',x+'px');
    panel.style.setProperty('--my',y+'px');
    panel.style.setProperty('--md',Math.ceil(r*2+4)+'px');
  }
  place();
  window.addEventListener('resize',place);
  function setOpen(open){
    if(open)place();
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

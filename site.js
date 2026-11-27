// Opens and closes the full-screen menu (the three-line button).
(function(){
  var btn=document.querySelector('.menu-btn'),panel=document.getElementById('site-menu'),root=document.documentElement;
  if(!btn||!panel)return;
  // Give each menu item a plain copy and a coloured copy laid on top, so hovering can reveal the colour.
  panel.querySelectorAll('.wrap a').forEach(function(a){
    var t=a.textContent;a.textContent='';
    var w=document.createElement('span');w.className='t';
    var r=document.createElement('span');r.className='r';r.textContent=t;
    var i=document.createElement('span');i.className='i';i.textContent=t;i.setAttribute('aria-hidden','true');
    w.appendChild(r);w.appendChild(i);a.appendChild(w);
    // The colour spreads out from wherever the mouse enters the word, and shrinks back to where it leaves.
    function spot(e){
      var b=w.getBoundingClientRect();
      var x=Math.min(100,Math.max(0,(e.clientX-b.left)/b.width*100));
      i.style.transition='none';
      i.style.setProperty('--x',x+'%');
      i.getBoundingClientRect();
      i.style.transition='';
    }
    a.addEventListener('pointerenter',function(e){if(e.pointerType!=='mouse')return;spot(e);a.classList.add('lit')});
    a.addEventListener('pointerleave',function(e){
      if(!a.classList.contains('lit'))return;
      var b=w.getBoundingClientRect();
      i.style.setProperty('--x',Math.min(100,Math.max(0,(e.clientX-b.left)/b.width*100))+'%');
      a.classList.remove('lit');
    });
  });
  // Centre the colour circle on the button, sized to reach the far corner of the screen.
  function place(){
    var b=btn.getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,
        w=window.innerWidth,h=window.innerHeight,
        r=Math.hypot(Math.max(x,w-x),Math.max(y,h-y));
    panel.style.setProperty('--mx',x+'px');
    panel.style.setProperty('--my',y+'px');
    panel.style.setProperty('--md',Math.ceil(r*2+4)+'px');
    // Size of the small hover preview of the bloom (about 76px across), as a fraction of the full circle.
    panel.style.setProperty('--ps',(76/Math.ceil(r*2+4)).toFixed(4));
  }
  place();
  window.addEventListener('resize',place);
  // Re-measure when the mouse reaches the button, in case the page has scrolled.
  btn.addEventListener('pointerenter',place);
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

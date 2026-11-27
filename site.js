// Closes the Menu when you tap outside it or press Escape.
document.addEventListener('click',function(e){document.querySelectorAll('.menu[open]').forEach(function(m){if(!m.contains(e.target))m.open=false})});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.menu[open]').forEach(function(m){m.open=false;m.querySelector('summary').focus()})});

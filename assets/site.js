
(function(){
  var facades = document.querySelectorAll('.video-facade');
  for (var k = 0; k < facades.length; k++){
    facades[k].addEventListener('click', function(){
      var vid = this.getAttribute('data-vid');
      if (!vid) return;
      if (location.protocol === 'http:' || location.protocol === 'https:'){
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube.com/embed/' + vid + '?autoplay=1&rel=0';
        f.title = this.getAttribute('data-title') || 'YouTube video';
        f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        f.setAttribute('allowfullscreen', '');
        var frame = this.parentNode;
        frame.innerHTML = '';
        frame.appendChild(f);
      } else {
        window.open('https://www.youtube.com/watch?v=' + vid, '_blank', 'noopener');
      }
    });
  }
  var t = document.getElementById('navToggle'), n = document.getElementById('navLinks');
  if (t && n){
    t.addEventListener('click', function(){
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    var links = n.querySelectorAll('a');
    for (var j = 0; j < links.length; j++){
      links[j].addEventListener('click', function(){ n.classList.remove('open'); });
    }
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();


(function(){
  var input=document.getElementById('pubSearch'), select=document.getElementById('decadeFilter'), empty=document.getElementById('pubEmpty');
  if(!input||!select)return;
  function filterPubs(){
    var q=(input.value||'').trim().toLowerCase(), d=select.value, visible=0;
    document.querySelectorAll('.pub-decade').forEach(function(group){
      var groupVisible=0;
      group.querySelectorAll('.complete-pub').forEach(function(row){
        var okDecade=!d||group.getAttribute('data-decade')===d;
        var okText=!q||(row.getAttribute('data-search')||'').indexOf(q)>-1||(row.querySelector('.yr').textContent||'').indexOf(q)>-1;
        row.hidden=!(okDecade&&okText); if(!row.hidden){groupVisible++;visible++;}
      });
      group.hidden=groupVisible===0;
    });
    if(empty)empty.hidden=visible!==0;
  }
  input.addEventListener('input',filterPubs); select.addEventListener('change',filterPubs);
})();

(function(){var l=new URLSearchParams(location.search).get('lang');if(l==='en'||l==='zh'){var path=location.pathname;if(l==='en'&&!path.startsWith('/en/'))path='/en'+(path==='/'?'/':path);if(l==='zh'&&path.startsWith('/en/'))path=path.slice(3)||'/';if(path!==location.pathname)location.replace(path+location.hash);}})();

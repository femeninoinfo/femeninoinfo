(function() {
  var BADGE_LABELS = { apertura:'Argentino', seleccion:'Selección', internacional:'Internacional', mundial2027:'Mundial 2027' };

  function escapar(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function iniciarBuscador() {
    var toggle = document.getElementById('searchToggle');
    var bar    = document.getElementById('searchBar');
    var input  = document.getElementById('searchInput');
    var body   = document.getElementById('searchBody');
    var clearBtn = document.getElementById('searchClear');
    if(!toggle || !bar || !input) return;

    var isOpen = false;

    function cerrar() {
      isOpen = false;
      bar.classList.remove('open');
      toggle.classList.remove('active');
      input.value = '';
      if(clearBtn) clearBtn.classList.remove('visible');
      body.innerHTML = '<p class="search-hint">Escribí al menos 2 caracteres para buscar</p>';
    }

    function abrir() {
      isOpen = true;
      bar.classList.add('open');
      toggle.classList.add('active');
      setTimeout(function(){ input.focus(); }, 320);
    }

    toggle.addEventListener('click', function() {
      isOpen ? cerrar() : abrir();
    });

    if(clearBtn) {
      clearBtn.addEventListener('click', function() {
        input.value = '';
        clearBtn.classList.remove('visible');
        body.innerHTML = '<p class="search-hint">Escribí al menos 2 caracteres para buscar</p>';
        input.focus();
      });
    }

    input.addEventListener('input', function() {
      var q = input.value.trim().toLowerCase();
      if(clearBtn) clearBtn.classList.toggle('visible', q.length > 0);
      body.innerHTML = '';

      if(q.length < 2) {
        body.innerHTML = '<p class="search-hint">Escribí al menos 2 caracteres para buscar</p>';
        return;
      }

      if(typeof noticias === 'undefined' || noticias.length === 0) {
        body.innerHTML = '<p class="search-empty">No hay noticias cargadas</p>';
        return;
      }

      var filtradas = noticias.filter(function(n) {
        return n.titulo.toLowerCase().includes(q) ||
               (BADGE_LABELS[n.categoria] || '').toLowerCase().includes(q);
      });

      if(filtradas.length === 0) {
        body.innerHTML = '<p class="search-empty">No se encontraron noticias para "'+input.value+'"</p>';
        return;
      }

      var wrap = document.createElement('div');
      wrap.className = 'search-results-list';

      filtradas.slice(0, 8).forEach(function(n) {
        var a = document.createElement('a');
        a.className = 'search-result-item';
        a.href = n.pagina;
        var badgeLabel = BADGE_LABELS[n.categoria] || n.categoria;
        var re = new RegExp('('+escapar(q)+')', 'gi');
        var tituloHtml = n.titulo.replace(re, '<mark class="search-mark">$1</mark>');
        a.innerHTML =
          '<img class="search-result-img" src="'+n.imagen+'" alt="" onerror="this.style.background=\'#2a0044\';this.src=\'\'"/>'+
          '<div class="search-result-info">'+
            '<div class="search-result-titulo">'+tituloHtml+'</div>'+
            '<div class="search-result-meta">'+
              '<span class="search-badge badge-'+n.categoria+'">'+badgeLabel+'</span>'+
              '<span class="search-result-fecha">'+n.fecha+'</span>'+
            '</div>'+
          '</div>'+
          '<span class="search-arrow">&#8594;</span>';
        wrap.appendChild(a);
      });

      if(filtradas.length > 8) {
        var more = document.createElement('p');
        more.className = 'search-more';
        more.textContent = '+ '+(filtradas.length - 8)+' resultados más';
        wrap.appendChild(more);
      }

      body.appendChild(wrap);
    });

    document.addEventListener('keydown', function(e) {
      if(e.key === 'Escape' && isOpen) cerrar();
    });
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarBuscador);
  } else {
    iniciarBuscador();
  }
})();


window.onload = () => {
    const urlParams = new URLSearchParams(location.search);
    const ref = urlParams.get('ref');

    if (ref) {
      const cleanRef = ref.replace(/[^a-zA-Z0-9а-яА-ЯёЁ]/g, '');
      document.getElementById('tableNum').textContent = cleanRef;
      document.getElementById('tableIndicator').style.display = 'inline-flex';
    }

    const go = (lang) => {
      const query = ref ? `?lang=${lang}&ref=${encodeURIComponent(ref)}` : `?lang=${lang}`;
      document.body.style.opacity = '0';
      setTimeout(() => {
        location.href = `menu.html${query}`;
      }, 300);
    };

    document.getElementById('ruBtn').onclick = () => go('ru');
    document.getElementById('enBtn').onclick = () => go('en');

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.style.setProperty('--glass', 'rgba(255,250,240,0.7)');
    }
    
};

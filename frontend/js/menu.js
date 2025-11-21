    let lang = 'ru';
    let currentCategory = null;

    document.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(location.search);
      lang = params.get('lang') || 'ru';
      const ref = params.get('ref');

      if (ref) {
        const clean = ref.replace(/[^0-9a-zA-Zа-яА-ЯёЁ]/g, '');
        document.getElementById('tableNum').textContent = clean;
        document.getElementById('tableInfo').style.display = 'flex';
      }

      document.getElementById('changeLang').textContent = lang === 'ru' ? 'EN' : 'RU';
      document.documentElement.lang = lang;
      document.getElementById('breadcrumb').textContent = lang === 'ru' ? 'Меню' : 'Menu';

      renderCategories();
    });

    document.getElementById('changeLang').onclick = () => {
      lang = lang === 'ru' ? 'en' : 'ru';
      const url = new URL(location);
      url.searchParams.set('lang', lang);
      history.replaceState({}, '', url);
      document.getElementById('changeLang').textContent = lang === 'ru' ? 'EN' : 'RU';
      document.documentElement.lang = lang;
      document.getElementById('breadcrumb').textContent = lang === 'ru' ? 'Меню' : 'Menu';
      if (currentCategory) showCategory(currentCategory);
      else renderCategories();
    };

    document.getElementById('backToCats').onclick = () => {
      document.getElementById('itemsSection').style.display = 'none';
      document.getElementById('categories').style.display = 'grid';
      currentCategory = null;
      document.getElementById('breadcrumb').textContent = lang === 'ru' ? 'Меню' : 'Menu';
    };

    function renderCategories() {
      const container = document.getElementById('categories');
      container.innerHTML = '';
      menuData[lang].categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'category-card';
        div.innerHTML = `<i class="fas ${cat.icon}"></i><h3>${cat.name}</h3>`;
        div.onclick = () => showCategory(cat.id);
        container.appendChild(div);
      });
    }

    function showCategory(id) {
      currentCategory = id;
      const cat = menuData[lang].categories.find(c => c.id === id);
      document.getElementById('categoryTitle').textContent = cat.name;
      document.getElementById('breadcrumb').textContent = cat.name;

      const container = document.getElementById('items');
      container.innerHTML = '';
      const items = menuData[lang].items[id] || [];

      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-card' + (item.popular ? ' popular' : '');
        div.innerHTML = `
          ${item.popular ? '<span class="badge">Хит</span>' : ''}
          <h3>${item.name}</h3>
          ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
          <div class="price">${item.price}</div>
        `;
        container.appendChild(div);
      });

      document.getElementById('categories').style.display = 'none';
      document.getElementById('itemsSection').style.display = 'block';
    }





    

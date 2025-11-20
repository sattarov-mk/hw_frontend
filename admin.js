const BASE_URL = 'http://localhost:4000';

document.getElementById('addForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target); 


    try {
        const response = await fetch(`${BASE_URL}/add-product`, {
            method: 'POST',
            body: formData 
        });

        if (response.ok) {
            alert('Товар успешно добавлен!');
            e.target.reset(); 
            loadAll(); 
        } else {
            alert('Ошибка при добавлении. Проверьте сервер.');
        }
    } catch (error) {
        console.error(error);
        alert('Ошибка соединения с сервером');
    }
});

async function loadAdminCategory(category, containerId) {
    const container = document.getElementById(containerId);
    
    try {

        const response = await fetch(`${BASE_URL}/${category}`);
        
        if (!response.ok) {
            container.innerHTML = 'Ошибка загрузки';
            return;
        }

        const items = await response.json();

        container.innerHTML = ''; 
        
        if (items.length === 0) {
            container.innerHTML = '<p style="color:#999">Нет товаров</p>';
            return;
        }

        items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('admin-card');
            
            const imgSrc = item.image ? `${BASE_URL}${item.image}` : 'placeholder.png';

            div.innerHTML = `
                <div class="card-left">
                    <img src="${imgSrc}" alt="img" class="mini-thumb">
                    <div class="card-info">
                        <strong>${item.name}</strong>
                        <br>
                        <small>${item.cost} сом</small>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteItem('${category}', ${item.id})">❌</button>
            `;
            container.appendChild(div);
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = 'Ошибка сети';
    }
}

//Функция удаления тяжело, не могу чёт сделать 
async function deleteItem(category, id) {
    if (!confirm('Вы точно хотите удалить этот товар?')) return;

    try {
        const response = await fetch(`${BASE_URL}/delete-product/${category}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            
            loadAll(); 
        } else {
            alert('Ошибка удаления на сервере');
        }
    } catch (error) {
        console.error(error);
        alert('Не удалось соединиться с сервером');
    }
}
    
function loadAll() {
    loadAdminCategory('tea', 'adm-tea');
    loadAdminCategory('coffee', 'adm-coffee');
    loadAdminCategory('desserts', 'adm-desserts');
}

loadAll();
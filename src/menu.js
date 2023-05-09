export {menu};
import menuPic from "./menuPic.js"; 

function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDesc = ['Rye Bread', 'Loaf Bread', 'Croissant', 'Baguette', 'Pretzel', 'Classic Pain'];
    

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    for(let i = 0; i < 6; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');

        const img = new Image();
        img.src = menuPic[i];

        const parag = document.createElement('p');
        parag.textContent = menuDesc[i];

        menuItem.append(img, parag);
        menu.append(menuItem);
    }
    content.append(menu);
}


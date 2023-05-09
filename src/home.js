export {home};
import breadPic from './images/artur-rutkowski-unsplash.jpg'

function home() {
    const content = document.getElementById('content')
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = 'The authentic central European experience.';
    
    const img = new Image();
    img.src = breadPic;
    img.setAttribute('id', 'baker');
    
    const parag2 = document.createElement('p');
    parag2.textContent = 'Order online or visit our countryside bakery!';
    
    content.append(parag1, img, parag2);
}
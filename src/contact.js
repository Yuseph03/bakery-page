export {contact};
import mapLoc from './images/map-location.png'

function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const parag1 = document.createElement('p');
    parag1.textContent = '📞 123 456 789';

    const parag2 = document.createElement('p');
    parag2.textContent = 'TraRags Boulevard 42, Dunzledorf, Bayern, Deutschland';

    const img = new Image();
    img.src = mapLoc;
    img.setAttribute('class', 'map-pic');

    content.append(parag1, parag2, img);
}   
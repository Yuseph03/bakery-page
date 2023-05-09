import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import GitPic from './images/github-mark.svg'
import './styles.css';

header();
home();
footer();

// HEADER
function header() {
    const content = document.getElementById('content')

    const head = document.createElement('div');
    head.setAttribute('id','head');
    
    const mainLogo = document.createElement('nav');
    mainLogo.setAttribute('id', 'main-logo');
    mainLogo.textContent = 'Ludwig\'s';
    
    const headNavbar = document.createElement('div');
    headNavbar.setAttribute('class', 'head-navbar');
    
    const unorderedL = document.createElement('ul');
    
    const homeLi = document.createElement('li');
    homeLi.setAttribute('id', 'homeBtn');
    homeLi.textContent = 'Home';
    
    const menuLi = document.createElement('li');
    menuLi.setAttribute('id', 'menuBtn');
    menuLi.textContent = 'Menu';
    
    const contactLi = document.createElement('li');
    contactLi.setAttribute('id', 'contactBtn');
    contactLi.textContent = 'Contact';
    
    head.append(mainLogo, headNavbar);
    headNavbar.appendChild(unorderedL);
    unorderedL.append(homeLi, menuLi, contactLi);
    content.before(head);
}

// TAB SWITCH LOGIC
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.addEventListener('click', home);
menuBtn.addEventListener('click', menu);
contactBtn.addEventListener('click', contact);

// FOOTER
function footer() {
    const foot = document.createElement('footer')
    foot.setAttribute('class', 'footer')

    const footP = document.createElement('p')
    footP.textContent = 'Copyright '+new Date().getFullYear()+' © Yuseph03'

    const gitLink = document.createElement('a')
    gitLink.href = "https://github.com/Yuseph03"
    const gitLogo = document.createElement('i')
    const img = new Image();
    img.src = GitPic;
    img.setAttribute('class', 'fa-github');

    gitLogo.append(img)
    gitLink.append(gitLogo);
    foot.append(footP, gitLink);
    document.body.append(foot);
}
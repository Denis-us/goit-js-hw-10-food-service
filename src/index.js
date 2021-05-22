import menu from '../menu.json';
import menuComponents from './templates/menuComponents.hbs';


const buttonSwitchTheme = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkedTheme()

buttonSwitchTheme.addEventListener('change', changeTheme)

function changeTheme(event) {
    if (this.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
    }
    else { body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

const menuMarkup = menuComponents(menu)

function createMenuMarcup(menu) {
    return menuComponents(menu)
}

const menuList = document.querySelector('.js-menu')

menuList.insertAdjacentHTML('beforeend', menuMarkup)

function checkedTheme() {
    const savedTheme =  localStorage.getItem('theme')

    if (savedTheme !== null && savedTheme === Theme.DARK) {
        document.body.classList = savedTheme
        buttonSwitchTheme.checked = true
    }
}

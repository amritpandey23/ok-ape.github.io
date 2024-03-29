function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

const themeToggler = document.getElementById('themeToggler');
if (localStorage.getItem('theme') === 'theme-dark') {
    themeToggler.checked = true;
}

if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
} else {
    setTheme('theme-light');
}

const mySiema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => { },
    onChange: () => { },
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
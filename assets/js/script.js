const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;



function changeTheme() {
    //function para trocar o tema
    const currentTheme = rootHtml.getAttribute('data-theme');
    
    if (currentTheme === 'dark') rootHtml.setAttribute('data-theme', 'light');
    else rootHtml.setAttribute('data-theme', 'dark');

    //operador ternario
    //currentTheme === 'dark'? rootHtml.setAttribute('data-theme', 'light'): rootHtml.setAttribute('data-theme', 'dark');
    

    //mudar o icone
    toggleTheme.classList.toggle('bi-sun-fill')
    toggleTheme.classList.toggle('bi-moon-fill');
}

toggleTheme.addEventListener('click', changeTheme);

//accordion
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains('active');

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active');
    })
})

// menu active

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuLinks.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    })
})
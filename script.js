const menuSwitch = document.querySelector('.menu-btn input');
const target = document.querySelector('.topnav');

menuSwitch.addEventListener('click', () => {
    target.classList.toggle('slide');
});
const menuSwitch = document.querySelector('.menu-btn input');
const target = document.querySelector('.topnav');

menuSwitch.addEventListener('click', () => {
    target.classList.toggle('slide');
});

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwW20A1Zpkh6YwmwuNqp4lh0lu12bYttwf5Vif5nA-bSG6YxbUK2DnJkDpHB_h-NhTe6w/exec'
const form = document.forms['pf-computer-contact-form'];
const btnSend = document.querySelector('.btn-send');
const btnLoad = document.querySelector('.btn-load');
const thisalert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoad.classList.toggle('d-none');
    btnSend.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            btnLoad.classList.toggle('d-none');
            btnSend.classList.toggle('d-none');
            thisalert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
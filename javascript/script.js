const log_in_form = document.getElementById('log_in');

const sign_in_form = document.getElementById('sign_in');
let log_in_btn = document.getElementById('log_in_icon');
let sign_in_btn = document.getElementById('register_btn');





function show_login() {
    log_in_form.style.display = 'flex';

    document.getElementById('home').style.display = "none";
    document.getElementById('product__categories_container').style.display = "none";
}



function show_signin() {
    log_in_form.style.display = 'none';
    sign_in_form.style.display = 'flex';


    document.getElementById('home').style.display = "none";
    document.getElementById('product__categories_container').style.display = "none";
}


log_in_btn.addEventListener('click', show_login);

sign_in_btn.addEventListener('click', show_signin);



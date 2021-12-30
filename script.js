
let menuBtn = document.querySelector('#menu');
let menulist = document.querySelector('header ul');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    menulist.classList.toggle('active');
}

// let menuBtn = document.querySelector('#menubtn');
// let menulist = document.querySelector('.header nav');


// menuBtn.onclick = () =>{
//     menuBtn.classList.toggle('fa-times');
//     menulist.classList.toggle('active');
   
// } ;

// window.onscroll = () =>{
//     menuBtn.classList.remove('fa-times');
//     menulist.classList.remove('active');

//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active')
//     }else{
//         document.querySelector('.header').classList.remove('active')

//     }
// }

// let loginForm =document.querySelector('.login-form');

// document.querySelector('#loginbtn').onclick = () =>{
//     loginForm.classList.add('active');
// }
// document.querySelector('#close-login-form').onclick = () =>{
//     loginForm.classList.remove('active');
// }
window.onload = function () {
    const menuBtn = document.querySelector('.menu_burger');
    const mobileMenu = document.querySelector('.nav_menu_mobile');
    const menuLinks = document.querySelectorAll('.menu_items_link_mobile');
    const loginBtn = document.querySelector('.login_btn');
    const popup = document.querySelector('.login_popup');
    // const logInBtn = document.querySelector('.register_link_login');
    // const singUpPopup = document.querySelector('.sign_up_popup');
    const header = document.querySelector('.login_popup_header');
    const facebook = document.querySelector('.facebook');
    const google = document.querySelector('.google');
    const textOr = document.querySelector('.login_popup_text');
    const accountText = document.querySelector('.account_text');
    const registerBtn = document.querySelector('.register_link');
    const signInButton = document.querySelector('.sign_in_button');
    const forgotPassword = document.querySelector('.password_link');
    const images = document.querySelectorAll('.destination_item');
    const navigationButtons = document.querySelector('.carousel_nav');
    let numberOfImages = images.length;
    const accountLogin = document.querySelector('.account_login');
    
    accountLogin.addEventListener(
        'click', function () {
            popup.classList.toggle('is-active');
        }
    );

    
    
    function createNavigationButtons() {
        for (let i = 0; i < numberOfImages; i++) {
         const dot = document.createElement("div");
         dot.classList.add("carousel_item");
         navigationButtons.appendChild(dot);
        //  dot.addEventListener("click", () => {
        //    moveSlide(i);
        //  });
        }
        navigationButtons.children[1].classList.add("active");
     };

     createNavigationButtons();
 
   
    loginBtn.addEventListener(
        'click', function () {
            popup.classList.toggle('is-active');
        }
    );

    registerBtn.addEventListener(
        'click', function () {
            popup.style.width = "650px"
            popup.style.height = "436px"
            header.textContent = "Create account";
            facebook.style.display = 'none';
            google.style.display = 'none';     
            textOr.style.display = 'none'; 
            forgotPassword.style.display = 'none'; 
            signInButton.textContent = "Sign Up";
            accountText.textContent = "Already have an account?";
            registerBtn.textContent = "Log in"
        }
    );

    signInButton.addEventListener(
        'click', function () {
            let email = document.getElementById("login_email").value;
            let password = document.getElementById("login_password").value;
            alert(`Email: ${email} \n Password: ${password}`)
        }
    );


    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });


    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
        menuBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-active');
        });
    
    };

    
    window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.nav_menu_mobile') && !target.closest('.menu_burger') && !target.closest('.login_popup') && !target.closest('.login_btn')) { 
        mobileMenu.classList.remove('is-active');
        menuBtn.classList.remove('is-active');
        popup.classList.remove('is-active');
        // singUpPopup.classList.remove('is-active');
          }
        });


console.log("https://github.com/rolling-scopes-school/tasks/blob/master/tasks/travel/travel-part3.md\n");
console.log("Screenshot: https://ibb.co/XFY6KYX\n");
console.log("Deploy: https://rolling-scopes-school.github.io/carminesunset-JSFEPRESCHOOL2022Q2/travel/\n");
console.log("Done: 27.07.2022 / deadline 27.07.2022\n");
console.log("Score: 75\n");

}
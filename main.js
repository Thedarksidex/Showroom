let search =document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
}
window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Buttons
let signInBtn = document.getElementById("sign-in-btn");
let createAccBtn = document.getElementById("create-account-btn");

// Modals
let signInModal = document.getElementById("sign-in-modal");
let createAccModal = document.getElementById("create-account-modal");

// Close buttons
let closeSignIn = document.getElementById("close-sign-in");
let closeCreate = document.getElementById("close-create");

// Switch link
let switchToCreate = document.getElementById("switch-to-create");

// Open modals
signInBtn.onclick = () => signInModal.style.display = "flex";
createAccBtn.onclick = () => createAccModal.style.display = "flex";

// Close modals
closeSignIn.onclick = () => signInModal.style.display = "none";
closeCreate.onclick = () => createAccModal.style.display = "none";

// Click outside modal closes
window.onclick = (e) => {
  if(e.target === signInModal) signInModal.style.display = "none";
  if(e.target === createAccModal) createAccModal.style.display = "none";
};

// Switch from Sign In to Create Account
switchToCreate.onclick = () => {
  signInModal.style.display = "none";
  createAccModal.style.display = "flex";
};

// Dummy verify email
let verifyEmailBtn = document.getElementById("verify-email-btn");
let passwordSection = document.getElementById("password-section");

verifyEmailBtn.onclick = () => {
  alert("Dummy: Verification email sent!");
  passwordSection.style.display = "block";
};

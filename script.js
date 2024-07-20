document.addEventListener("DOMContentLoaded", function() {
    const loginSignup = document.getElementById("login-signup");
    const subscribe = document.getElementById("subscribe");
  
    loginSignup.addEventListener("click", function() {
      alert("Redirecting to Login/SignUp page...");
    });
  
    subscribe.addEventListener("click", function() {
      alert("Thank you for subscribing!");
    });
  
    const footer = document.querySelector("footer");
    footer.classList.add("footer-fixed");
  });
  
const galleryImage = document.querySelectorAll(".gallery-img");
galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});
AOS.init({
  once: true,
  duration: 2000
});

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 5, delay: 1.5, text: "Informatics Student | Kalbis Institute" });
gsap.from(".jumbotron img", { duration: 1, rotateY: 360, opacity: 0 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".display-4", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });

const scriptURL = "https://script.google.com/macros/s/AKfycbwZvzwpGN0ONnPArUaWrk-lAQUG1XxnRKje1PB5TtmHQkSFiLj-TRBaYBFyx0BtBzNH6g/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
form.addEventListener("submit", e => {
  e.preventDefault();
  // if submit button clicked
  // display button loading
  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch(error => console.error("Error!", error.message));
});

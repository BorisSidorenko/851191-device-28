var writeUsLink = document.querySelector(".write-us");
var contactPopup = document.querySelector(".modal-contact");
var modalClose = contactPopup.querySelector(".modal-close");
var contactForm = contactPopup.querySelector(".form-contact");
var feedbackName = contactPopup.querySelector(".feedback-name");
var feedbackEmail = contactPopup.querySelector(".feedback-email");
var feedbackLetter = contactPopup.querySelector(".feedback-letter");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("feedback-name");
  storageEmail = localStorage.getItem("feedback-email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt){
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackLetter.focus();
  } else {
    feedbackName.focus();
  }
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactForm.classList.add("modal-error");
});

contactForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
      if (!feedbackName.value) {
        feedbackName.classList.add("invalid");
      } else {
        feedbackName.classList.remove("invalid");
      }
      if (!feedbackEmail.value) {
        feedbackEmail.classList.add("invalid");
      } else {
        feedbackEmail.classList.remove("invalid");
      }
      if (!feedbackLetter.value) {
        feedbackLetter.classList.add("invalid");
      } else {
        feedbackLetter.classList.remove("invalid");
      }

  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback-name", feedbackName.value);
      localStorage.setItem("feedback-email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactForm.classList.add("modal-error");
    }
  }
});

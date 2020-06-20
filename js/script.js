var slider = document.querySelector(".slider");
var sliderList = slider.querySelector(".slider-list");
var slides = sliderList.querySelectorAll(".slide");
var sliderControls =  document.querySelector(".slider-controls");
var sliderButtons = sliderControls.querySelectorAll("button");

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    for (let j = 0; j < sliderButtons.length; j ++) {
      if (sliderButtons[j].classList.contains("current")) {
        sliderButtons[j].classList.remove("current");
        slides[j].classList.remove("slide-current")
      }
    }
    sliderButtons[i].classList.add("current");
    slides[i].classList.add("slide-current");
  });
}

var capabilitiesList = document.querySelector(".capabilities-list");
var capabilitiesItems = capabilitiesList.querySelectorAll(".capabilities-item");
var capabilityButtons = capabilitiesList.querySelectorAll(".button");
var descriptionList = document.querySelector(".description-list");
var descriptions = descriptionList.querySelectorAll(".description");

for (let i = 0; i < capabilityButtons.length; i++) {
  capabilityButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    for (let j = 0; j < capabilityButtons.length; j ++) {
      if (capabilityButtons[j].classList.contains("active-capability")) {
        capabilityButtons[j].classList.remove("active-capability");
        descriptions[j].classList.remove("active-description")
      }
    }
    capabilityButtons[i].classList.add("active-capability");
    descriptions[i].classList.add("active-description");
  });
}

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
  contactForm.classList.remove("modal-error");
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
      contactForm.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

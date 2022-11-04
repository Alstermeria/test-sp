// Видео
const videoBlock = document.querySelector(".video-block");
const videoImg = document.querySelector(".video-block img");
videoBlock.addEventListener("click", function () {
  let iframe = createIframe();
  videoImg.remove();
  videoBlock.appendChild(iframe);
});

function createIframe() {
  let iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/UALhvLWsdZE?autoplay=1"
  );
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  return iframe;
}

// Слайдер галерея
jQuery(document).ready(function ($) {
  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 500) {
      if ($(".slider-slick").hasClass("slick-initialized")) {
        $(".slider-slick").slick("unslick");
      }
    } else {
      $(".slider-slick").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
      });
    }
  });
});

// Галерея

const imgMore = document.querySelectorAll(".img__more");
const showBtns = document.querySelectorAll(".show-img");
for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", function () {
    imgMore.forEach((element) => {
      element.classList.remove("hidden");
    });
    showBtns[i].classList.add("hidden");
  });
}
// об организаторе
const TextMore = document.querySelector(".about__leader-text");
const BtnLeader = document.querySelector(".about__leader-link");

BtnLeader.addEventListener("click", function () {
  TextMore.classList.remove("hidden");
  BtnLeader.classList.add("hidden");
});
// об организаторе
const TextServices = document.querySelector(".about__services-text");
const BtnServices = document.querySelector(".about__services-link");

BtnServices.addEventListener("click", function () {
  TextServices.classList.remove("hidden");
  BtnServices.classList.add("hidden");
});

/* Yandex карта */

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.75897861, 37.6158744],
    zoom: 13,
    controls: [],
    behaviors: ["drag"],
  });
  var myPlacemark = new ymaps.Placemark(
    [55.75897861, 37.6158744],
    {
      balloonContent: "Встречаемся тут!",
    },
    {
      preset: "islands#redIcon",
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
// отзывы
const TextReview = document.querySelector(".review__item-hide");
const BtnReview = document.querySelector(".review__click");

BtnReview.addEventListener("click", function () {
  TextReview.classList.remove("hidden");
  BtnReview.classList.add("hidden");
});
// слайдер после карты
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("parag");
  var dots = document.getElementsByClassName("dotter-block__click");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("deystvuyus", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " deystvuyus";
}
//   форма

var modal = document.querySelector(".modal");
var body = document.querySelector("body");
var formBtn = document.querySelector(".open__form");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal__close");
var modalInput = document.querySelector('.modal [type="text"]');
var esc = 27;
// открытие формы

formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (modal.classList.contains("visually-hidden")) {
    modal.classList.remove("visually-hidden");
    overlay.classList.remove("visually-hidden");
    body.style.overflow = "hidden";
  } else {
    modal.classList.add("visually-hidden");
    overlay.classList.add("visually-hidden");
    body.style.overflow = "auto";
  }
});
//   закрытие формы

var closeModal = function closeModal(e) {
  modal.classList.add("visually-hidden");
  overlay.classList.add("visually-hidden");
  body.style.overflow = "auto";
};

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
window.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.code === "Escape" || e.keyCode === esc) {
    closeModal();
  }
});

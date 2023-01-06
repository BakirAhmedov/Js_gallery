"use strict";

let menu__item = document.querySelectorAll(".menu__item");
let gallery__img = document.querySelectorAll(".gallery__img");
for (let i = 0; i < menu__item.length; i++) {
  menu__item[i].addEventListener("click", function () {
    for (let j = 0; j < menu__item.length; j++) {
      menu__item[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < gallery__img.length; k++) {
      gallery__img[k].classList.remove("active");
      gallery__img[k].classList.add("hide");

      if (
        gallery__img[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        gallery__img[k].classList.remove("hide");
        gallery__img[k].classList.add("active");
      }
    }
  });
}

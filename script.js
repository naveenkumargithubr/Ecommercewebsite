const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

// here we add a hamburger nav list

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

// And here we remove a hamburger nav list

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// changing the images using function

var MainImage = document.getElementById("main-img");
var smallImage = document.getElementsByClassName("small-img");

smallImage[0].onclick = function () {
  MainImage.src = smallImage[0].src;
};
smallImage[1].onclick = function () {
  MainImage.src = smallImage[1].src;
};
smallImage[2].onclick = function () {
  MainImage.src = smallImage[2].src;
};

smallImage[3].onclick = function () {
  MainImage.src = smallImage[3].src;
};

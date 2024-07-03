function carousel(id) {
  let i = 0,
    x0 = null;

  function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  function lock(e) {
    x0 = unify(e).clientX;
  }

  function move(e) {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx);
      if (s > 0) {
        prevMove();
      } else {
        nextMove();
      }
      x0 = null;
    }
  }

  const carouselContainer = document.getElementById(id);
  if (!carouselContainer) return;

  const innerContainer =
    carouselContainer.getElementsByClassName("innerContainer")[0];

  innerContainer.addEventListener("mousedown", lock, false);
  innerContainer.addEventListener("touchstart", lock, false);

  innerContainer.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    false
  );

  innerContainer.addEventListener("mouseup", move, false);
  innerContainer.addEventListener("touchend", move, false);
  innerContainer.style.transition = "transform 300ms";
  const count = innerContainer.childElementCount;
  let pos = 0;
  const prev = carouselContainer.getElementsByClassName("prev")[0];
  const next = carouselContainer.getElementsByClassName("next")[0];

  function prevMove() {
    const width = innerContainer.lastElementChild.offsetWidth + 10;
    if (pos < 1) {
      const el = innerContainer.lastElementChild;
      innerContainer.prepend(el);
      innerContainer.style.transition = "none";
      const style = window.getComputedStyle(innerContainer);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const val = matrix.m41;
      innerContainer.style.transform = `translateX(${val - width}px)`;
      const timeout = setTimeout(() => {
        innerContainer.style.transition = "transform 300ms";
        const style = window.getComputedStyle(innerContainer);
        const matrix = new DOMMatrixReadOnly(style.transform);
        const val = matrix.m41;
        innerContainer.style.transform = `translateX(${val + width}px)`;
        clearTimeout(timeout);
      }, 50);
    } else {
      const style = window.getComputedStyle(innerContainer);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const val = matrix.m41;
      innerContainer.style.transform = `translateX(${val + width}px)`;
      pos--;
    }
  }

  function nextMove() {
    const width = innerContainer.lastElementChild.offsetWidth + 10;
    if (pos > count - 4) {
      const el = innerContainer.firstElementChild;
      innerContainer.append(el);
      innerContainer.style.transition = "none";
      const style = window.getComputedStyle(innerContainer);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const val = matrix.m41;
      innerContainer.style.transform = `translateX(${val + width}px)`;
      const timeout = setTimeout(() => {
        innerContainer.style.transition = "transform 300ms";
        const style = window.getComputedStyle(innerContainer);
        const matrix = new DOMMatrixReadOnly(style.transform);
        const val = matrix.m41;
        innerContainer.style.transform = `translateX(${val - width}px)`;
        clearTimeout(timeout);
      }, 50);
    } else {
      const style = window.getComputedStyle(innerContainer);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const val = matrix.m41;
      innerContainer.style.transform = `translateX(${val - width}px)`;
      pos++;
    }
  }

  prev.addEventListener("click", prevMove);
  next.addEventListener("click", nextMove);
}

function carouselSingle(id, timer = false) {
  let i = 0,
    x0 = null;

  function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  function lock(e) {
    x0 = unify(e).clientX;
  }

  function move(e) {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx);
      if (s > 0) {
        prevMove();
      } else {
        nextMove();
      }
      x0 = null;
    }
  }

  function click(index) {
    if (pos === index) return;
    switchPos(index);
  }

  function switchPos(index) {
    const dots = dotcontainer.getElementsByClassName("dot");
    const images = carousel.getElementsByClassName("carouselItem");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
      images[i].classList.remove("active");
    }
    dots[index].classList.add("active");
    images[index].classList.add("active");
    pos = index;
  }

  const carouselContainer = document.getElementById(id);
  if (!carouselContainer) return;
  const carousel = carouselContainer.getElementsByClassName("carousel")[0];
  carousel.addEventListener("mousedown", lock, false);
  carousel.addEventListener("touchstart", lock, false);

  carousel.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    false
  );

  carousel.addEventListener("mouseup", move, false);
  carousel.addEventListener("touchend", move, false);
  const count = carousel.childElementCount;
  let pos = 0;
  const dotcontainer = document.createElement("div");
  dotcontainer.classList.add("dots");
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => click(i));
    if (i === 0) dot.classList.add("active");
    dotcontainer.appendChild(dot);
  }
  carouselContainer.appendChild(dotcontainer);

  if (timer) {
    setInterval(() => {
      if (pos >= count - 1) pos = -1;
      pos++;
      switchPos(pos);
    }, timer);
  }

  function prevMove() {
    if (pos === 0) {
      pos = count;
    }
    pos--;
    switchPos(pos);
  }

  function nextMove() {
    if (pos >= count - 1) {
      pos = -1;
    }
    pos++;
    switchPos(pos);
  }
}

function carouselSingleArrows(id, timer = false) {
  let i = 0,
    x0 = null;

  function unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  function lock(e) {
    x0 = unify(e).clientX;
  }

  function move(e) {
    if (x0 || x0 === 0) {
      let dx = unify(e).clientX - x0,
        s = Math.sign(dx);
      if (s === -1) {
        prevMove();
      } else if (s === 1) {
        nextMove();
      }
      x0 = null;
    }
  }

  function click(index) {
    if (pos === index) return;
    switchPos(index);
  }

  function switchPos(index) {
    const dots = dotcontainer.getElementsByClassName("dot");
    const images = carousel.getElementsByClassName("image");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
      images[i].classList.remove("active");
    }
    dots[index].classList.add("active");
    images[index].classList.add("active");
    pos = index;
  }

  const carouselContainer = document.getElementById(id);
  if (!carouselContainer) return;

  const prev = carouselContainer.getElementsByClassName("prev")[0];
  const next = carouselContainer.getElementsByClassName("next")[0];
  const carousel = carouselContainer.getElementsByClassName("carousel")[0];
  carousel.addEventListener("mousedown", lock, false);
  carousel.addEventListener("touchstart", lock, false);

  carousel.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    false
  );

  carousel.addEventListener("mouseup", move, false);
  carousel.addEventListener("touchend", move, false);
  const count = carousel.childElementCount;
  let pos = 0;
  const dotcontainer = document.createElement("div");
  dotcontainer.classList.add("dots");
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => click(i));
    if (i === 0) dot.classList.add("active");
    dotcontainer.appendChild(dot);
  }
  carousel.appendChild(dotcontainer);

  if (timer) {
    setInterval(() => {
      if (pos >= count - 1) pos = -1;
      pos++;
      switchPos(pos);
    }, timer);
  }

  function prevMove() {
    if (pos === 0) {
      pos = count;
    }
    pos--;
    switchPos(pos);
  }

  function nextMove() {
    if (pos >= count - 1) {
      pos = -1;
    }
    pos++;
    switchPos(pos);
  }

  prev.addEventListener("click", prevMove);
  next.addEventListener("click", nextMove);
}

function initMap(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // Creating the map.
  var myMap = new ymaps.Map(id, {
    // The map center coordinates.
    // Default order: «latitude, longitude».
    // To not manually determine the map center coordinates,
    // use the Coordinate detection tool.
    center:
      id === "mapLenina" ? [44.563748, 38.080447] : [44.548937, 38.074294],
    // Zoom level. Acceptable values:
    // from 0 (the entire world) to 19.
    zoom: 17,
    controls: [],
  });
  const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="rounded-full size-[62px] bg-font2 relative">
      <div class="flex items-center justify-center h-full">
        <img src="./assets/icons/logo.svg" alt="logo">
      </div>
      <p class="bg-white text18 ${
        id === "mapLenina" ? "w-[130px]" : "w-[150px]"
      } whitespace-pre uppercase absolute top-[22px] left-full">${
      id === "mapLenina" ? "ул. ЛЕНИНА 30" : "ул. ЛЕСЕЛИДЗЕ 7"
    }</p>
    </div>`
  );
  const myPlacemark = new ymaps.Placemark(
    id === "mapLenina" ? [44.563748, 38.080447] : [44.548937, 38.074294],
    {},
    {
      /**
       * Options.
       * You must specify this type of layout.
       */
      // iconLayout: "default#image",
      // Custom image for the placemark icon.
      // iconImageHref: "./assets/icons/logo.svg",
      // The size of the placemark.
      iconContentLayout: MyIconContentLayout,
      /**
       * The offset of the upper left corner of the icon relative
       * to its "tail" (the anchor point).
       */
      iconImageOffset: [-100, -100],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

function openMenu() {
  const links = document.getElementById("links");
  const cross = document.getElementById("cross");
  if (!links) return;
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  cross.classList.toggle("active");
  links.classList.toggle("active");
}

function addTrainers() {
  const container = document.getElementById("addTrainers");
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const trainersCard = document.createElement("div");
    trainersCard.classList.add("trainersCard");
    const img = document.createElement("div");
    img.classList.add("image");
    img.style.backgroundImage = `url("./assets/photos/4.png")`;
    const text = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = `ДАРЬЯ <br />МАРКОВА`;
    const p = document.createElement("p");
    p.innerText = "Персональный тренер тренажёрного зала";
    text.appendChild(h1);
    text.appendChild(p);
    trainersCard.appendChild(img);
    trainersCard.appendChild(text);
    container.appendChild(trainersCard);
  }
}

function openOptions(el) {
  el.classList.toggle("active");
}

function changeDirection(el) {
  // console.log("@@@@@@@@ ", el.innerText);
  if (el === "all") {
    const title = document.getElementById("directionsSelectBtn");
    title.innerText = "направления";
    return;
  }
  const title = document.getElementById("directionsSelectBtn");
  title.innerText = el.innerText;
}

function openModal(state, event) {
  if (state === "open") {
    const modal = document.getElementById("modal");
    if (!modal) return;
    modal.style.width = "100dvw";
    modal.style.height = "100dvh";
    modal.classList.toggle("active");
  } else {
    if (!event.target.classList.contains("close")) return;
    const modal = document.getElementById("modal");
    if (!modal) return;
    modal.classList.toggle("active");
    const timeout = setTimeout(() => {
      modal.style.width = 0;
      modal.style.height = 0;
      clearTimeout(timeout);
    }, 350);
  }
}

// function generateModal(state) {
//   if (state === "open") {
//     const carouselContainer = document.getElementById(
//       "carouselSingleArrowsGallery"
//     );
//     if (!carousel) return;
//     const images = carouselContainer.getElementsByClassName("image");
//     let image;
//     for (let i = 0; i < images.length; i++) {
//       if (images[i].classList.contains("active")) {
//         image = images[i];
//       }
//     }
//     if (!image) return;
//     console.log("@@@@@@@@ ", image);
//     const style = image.currentStyle || window.getComputedStyle(image, false);
//     const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
//     const modal = document.createElement("div");
//     modal.id = "galleryModal";
//     const inside = `<img src="${url}" alt="popup" />`;
//     modal.innerHTML = inside;
//     modal.style.width = "100dvw";
//     modal.style.height = "100dvh";
//     modal.classList.add("modal");
//     modal.classList.add("active");
//     const body = document.querySelector("body");
//     body.appendChild(modal);
//   } else {
//     if (!event.target.classList.contains("close")) return;
//     const modal = document.getElementById("modal");
//     if (!modal) return;
//     modal.classList.toggle("active");
//     const timeout = setTimeout(() => {
//       modal.style.width = 0;
//       modal.style.height = 0;
//       clearTimeout(timeout);
//     }, 350);
//   }
// }

document.addEventListener("DOMContentLoaded", function (event) {
  carousel("mainCarousel");
  carouselSingle("carouselMainLeselidze", 5000);
  carouselSingleArrows("carouselSingleArrowsGallery", 5000);
  ymaps.ready(() => initMap("mapLenina"));
  ymaps.ready(() => initMap("mapLeselidze"));
  addTrainers();
});

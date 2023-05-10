let itemKey = document.querySelector(".box__item");
let idx = 0;
let idY = 0;
console.log(idx, idY);

document.addEventListener("keydown", (e) => {
  let keyValue = e.key;
  if (keyValue == "d") {
    idx++;
    if (idx >= 43) {
      idx = 43;
    }
    itemKey.style.transform = `translate(${idx * 8}px,${idY * 8}px)`;
  } else if (keyValue == "a") {
    idx--;
    if (idx <= 0) {
      idx = 0;
    }
    itemKey.style.transform = `translate(${idx * 8}px,${idY * 8}px)`;
  } else if (keyValue == "s") {
    idY++;
    if (idY >= 43) {
      idY = 43;
    }
    itemKey.style.transform = `translate(${idx * 8}px,${idY * 8}px)`;
  } else if (keyValue == "w") {
    idY--;
    if (idY <= 0) {
      idY = 0;
    }
    itemKey.style.transform = `translate(${idx * 8}px,${idY * 8}px)`;
  }
});

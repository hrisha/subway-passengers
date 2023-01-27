let inc = document.querySelector(".inc");
let topNum = document.querySelector(".people-num");
let save = document.querySelector(".save");
let sNume = document.querySelector(".save-num");
let count = 0;
inc.onclick = function () {
  count += 1;
  topNum.innerHTML = count;
  bottom.innerHTML = count;
};

save.onclick = function () {
  if (sNume.innerHTML === "") {
    sNume.innerHTML += topNum.innerHTML;
  } else {
    sNume.innerHTML += ` - ${topNum.innerHTML}`;
  }
  topNum.innerHTML = 0;
  count = 0;
};

document.querySelector(".reset").onclick = function () {
  sNume.innerHTML = "";
  topNum.innerHTML = 0;
  count = 0;
};

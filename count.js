let inc = document.querySelector(".inc");
let peopleNumber = document.querySelector(".people-num");
let save = document.querySelector(".save");
let savedCohorts = document.querySelector(".save-num");
let count = 0;
inc.onclick = function () {
  count += 1;
  peopleNumber.innerHTML = count;
};

save.onclick = function () {
  if (savedCohorts.innerHTML === "") {
    savedCohorts.innerHTML += peopleNumber.innerHTML;
  } else {
    savedCohorts.innerHTML += ` / ${peopleNumber.innerHTML}`;
  }
  peopleNumber.innerHTML = 0;
  count = 0;
};

document.querySelector(".reset").onclick = function () {
  savedCohorts.innerHTML = "";
  peopleNumber.innerHTML = 0;
  count = 0;
};

function getRandomColor(){
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  return  randomColor;
}

setInterval(function () {
  let randomC = getRandomColor();
  document.querySelector(".main-box").style.backgroundColor = "#" + randomC;
}, 3000);


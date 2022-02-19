function mousebtn(event) {
  /*
  document.getElementsByClassName("tindog")[0].style.filter = "blur(4px)";
  document.getElementsByClassName("visitbtn")[0].style.display = "block";
  document.getElementsByClassName("simon-game")[0].style.filter = "blur(4px)";
  document.getElementsByClassName("visitbtn1")[0].style.display = "block";
  document.getElementsByClassName("RCG")[0].style.filter = "blur(4px)";
  document.getElementsByClassName("visitbtn2")[0].style.display = "block";
*/
  if (!event) {
    return;
  }
  event.target.closest(".contents").querySelector(".imgss").style.filter =
    "blur(4px)";
  event.target.closest(".contents").querySelector(".img-btn").style.display =
    "block";

  console.log("212");
}
function mouseout(event) {
  /*
  document.getElementsByClassName("tindog")[0].style.filter = "blur(0)";
  document.getElementsByClassName("visitbtn")[0].style.display = "none";
  document.getElementsByClassName("simon-game")[0].style.filter = "blur(0)";
  document.getElementsByClassName("visitbtn1")[0].style.display = "none";
  document.getElementsByClassName("RCG")[0].style.filter = "blur(0)";
  document.getElementsByClassName("visitbtn2")[0].style.display = "none";
  */
  if (!event) {
    return;
  }
  event.target.closest(".contents").querySelector(".imgss").style.filter =
    "blur(0)";
  event.target.closest(".contents").querySelector(".img-btn").style.display =
    "none";
  console.log("212");
}

var text = "Hello I am Keshav ☺ ";
var i = 0;
var j = text.length - 1;
const forwardLoop = () => {
  setTimeout(function () {
    var element = document.getElementById("name");
    var value = text.substring(0, i);
    element.innerHTML = value;
    console.info("Value 1 :", value);
    i++;
    if (i < text.length) forwardLoop();
    else {
      i = 0;
      reverseLoop();
    }
  }, 150);
};

const reverseLoop = () => {
  setTimeout(function () {
    var element = document.getElementById("name");
    var value = text.slice(0, j);
    element.innerHTML = value;
    console.info("Value 2 :", j, value);
    j--;
    if (j > 0) reverseLoop();
    else {
      j = text.length;
      forwardLoop();
    }
  }, 150);
};

forwardLoop();

const Star = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.size = 25;
};

var context = document.querySelector("canvas").getContext("2d");

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

var stars = new Array();

var max_depth = 7500;

for (let index = 0; index < 400; index++)
  stars[index] = new Star(
    Math.random() * width,
    Math.random() * height,
    index * (max_depth / 200)
  );

function loop() {
  window.requestAnimationFrame(loop);

  height = document.documentElement.clientHeight;
  width = document.documentElement.clientWidth;

  context.canvas.height = height;
  context.canvas.width = width;

  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);

  for (let index = stars.length - 1; index > -1; index--) {
    let star = stars[index];

    star.z -= 5;

    if (star.z < 0) {
      stars.push(stars.splice(index, 1)[0]);
      star.z = max_depth;
      continue;
    }

    let translate_x = width * 0.5;
    let translate_y = height * 0.5;

    let field_of_view = (height + width) * 0.5;

    let star_x =
      (star.x - translate_x) / (star.z / field_of_view) + translate_x;
    let star_y =
      (star.y - translate_y) / (star.z / field_of_view) + translate_y;

    let scale = field_of_view / (field_of_view + star.z);

    let color = Math.floor(scale * 256);

    context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
    context.fillRect(star_x, star_y, star.size * scale, star.size * scale);
  }
}

loop();

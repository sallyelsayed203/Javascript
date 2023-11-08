const valueElement = document.querySelector("#value");
const btnElement = document.querySelectorAll(".btn");
let count = 0;

btnElement.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      valueElement.style.color = "green";
    }
    if (count < 0) {
      valueElement.style.color = "red";
    }
    if (count == 0) {
      valueElement.style.color = "black";
    }
    valueElement.textContent = count;
  });
});

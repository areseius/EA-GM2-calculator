const [display, buttons, equal, percent, ac, del] = [
  document.querySelector("#inputDisplay"),
  document.querySelectorAll(".btn"),
  document.querySelector(".equal"),
  document.querySelector(".percent"),
  document.querySelector(".ac"),
  document.querySelector(".del"),
];

// add to display buttons's contents

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    display.value += x.textContent;
  })
);

// calculate

equal.addEventListener("click", (e) => {
  try {
    display.value != "" &&
      (display.value = eval(
        display.value.replaceAll("x", "*").replaceAll("÷", "/")
      ));
  } catch (error) {
    display.value = "syntactic error";
  }
});

// ac button

ac.addEventListener("click", (e) => {
  display.value = "";
});

// del button

del.addEventListener("click", (e) => {
  display.value = display.value.slice(0, -1);
});

// percent button

percent.addEventListener("click", (e) => {
  display.value = +display.value / 100;
});

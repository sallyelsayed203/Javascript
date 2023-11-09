const password = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "=",
    "+",
    "<",
    ">",
    "/",
    "?",
    "~",
  ];
  // set variable
  const inptLengthEl = document.getElementById("inpt-length");
  const inptPassEl = document.getElementById("inpt-pass");
  const generateBtEl = document.getElementById("generate-bt");
  const alertContainerEl = document.querySelector(".alert-container");
  const copyBtEl = document.getElementById("copy-bt");
  
  //generate button
  generateBtEl.addEventListener("click", createPassWord);
  // get random number
  function getRandomNumber() {
    let randomPass = Math.floor(Math.random() * password.length);
    return password[randomPass];
  }
  // generation function
  function createPassWord() {
    let newPassword = "";
    let passwordLength = inptLengthEl.value;
    for (let i = 0; i < passwordLength; i++) {
      newPassword += getRandomNumber();
    }
    inptPassEl.value = newPassword;
  }
  // copy button
  copyBtEl.addEventListener("click", add);
  
  function add() {
    alertContainerEl.innerHTML = inptPassEl.value;
    inptLengthEl.value = "";
    inptPassEl.value = "";
  }
  
var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let numberA = parseFloat(document.getElementById("number1").value);
  let numberB = parseFloat(document.getElementById("number2").value);
  if (numberA % numberB === 0) {
    document.getElementById("result").innerHTML =
      numberA + " chia hết cho " + numberB;
  } else {
    document.getElementById("result").innerHTML =
      numberA + " không chia hết cho " + numberB;
  }
}



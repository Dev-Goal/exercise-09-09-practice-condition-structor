var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let number_1 = parseFloat(document.getElementById("number1").value);
  let number_2 = parseFloat(document.getElementById("number2").value);
  let number_3 = parseFloat(document.getElementById("number3").value);
  let message = "";

  if (number_1 > number_3) {
    if (number_1 > number_2) {
      message = "Số thứ 1 có giá trị lớn nhât";
    } else {
      message = "Số thứ 2 có giá trị lớn nhất";
    }
  } else {
    if (number_2 > number_3) {
      message = "Số thứ 2 có giá trị lớn nhât";
    } else {
      message = "Số thứ 3 có giá trị lớn nhất";
    }
  }
  document.getElementById("result").innerHTML = message;
}

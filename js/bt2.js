var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let Age = parseInt(document.getElementById("age1").value);
  let message = "";
  if (Age < 16 || Age > 18) {
    message = "Bạn " + Age + " tuổi. Bạn không đủ điều kiện để vào lớp 10";
  } else {
    message = "Bạn " + Age + " tuổi. Bạn đủ điều kiện để vào lớp 10";
  }
  document.getElementById("result").innerHTML = message;
}

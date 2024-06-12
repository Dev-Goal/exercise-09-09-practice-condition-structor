var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let diligentPoint = parseFloat(document.getElementById("diligent").value);
  let exercisePoint = parseFloat(document.getElementById("exercise").value);
  let oldlessonPoint = parseFloat(document.getElementById("oldlesson").value);
  let checkPoint = (diligentPoint + exercisePoint + oldlessonPoint) / 3;
  let midtermPoint = parseFloat(document.getElementById("midterm").value);
  let finaltermPoint = parseFloat(document.getElementById("finalterm").value);
  let checkTatol = checkPoint * 0.1 + midtermPoint * 0.3 + finaltermPoint * 0.6;
  let message = "";
  if (checkTatol >= 8.0 && checkTatol < 10) {
    message = "Bạn xếp loại giỏi";
  } else if (checkTatol >= 6.5 && checkTatol < 8) {
    message = "Bạn xếp loại khá";
  } else if (checkTatol >= 5.0 && checkTatol < 6.5) {
    message = "Bạn xếp loại trung bình";
  } else if (checkTatol >= 3.5 && checkTatol < 5.0) {
    message = "Bạn xếp loại yếu";
  } else if (checkTatol >= 0 && checkTatol < 3.5) {
    message = "Bạn xếp loại kém";
  } else {
    message = "Vui lòng nhập điểm phù hợp";
  }
  //   if (checkTatol >= 9.0) {
  //     message = "giỏi";
  //   } else if (checkTatol >= 8.0) {
  //     message = "khá";
  //   } else if (checkTatol >= 6.5) {
  //     message = "TB";
  //   } else if (checkPoint >= 5.0) {
  //     message = "yếu";
  //   } else {
  //     message = "kém";
  //   }
  document.getElementById("result1").innerHTML = message;
  document.getElementById("result").innerHTML = "Tổng điểm: " + checkTatol;
}

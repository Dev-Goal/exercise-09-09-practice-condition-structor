var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let inputSales = parseFloat(document.getElementById("sales1").value);
  let bonus = 1.0;
  let commissionMoney;
  let wages;
  let notify = "";
  let message = "";

  if (inputSales < 5.0) {
    commissionMoney = inputSales * 0.08;
    wages = 5.0 + commissionMoney;
    notify = "Bạn nhận được 8% hoa hồng";
    message = "Lương của bạn là " + wages + " triệu VNĐ";
  } else if (inputSales >= 5.0 && inputSales < 10.0) {
    commissionMoney = inputSales * 0.1;
    wages = 5.0 + commissionMoney;
    notify = "Bạn nhận được 10% hoa hồng";
    message = "Lương của bạn là " + wages + " triệu VNĐ";
  } else if (inputSales >= 10.0 && inputSales < 20.0) {
    commissionMoney = inputSales * 0.12;
    wages = 5.0 + commissionMoney;
    notify = "Bạn nhận được 12% hoa hồng";
    message = "Lương của bạn là " + wages + " triệu VNĐ";
  } else if (inputSales >= 20.0 && inputSales < 25.0) {
    commissionMoney = inputSales * 0.15;
    wages = 5.0 + commissionMoney;
    notify = "Bạn nhận được 15% hoa hồng";
    message = "Lương của bạn là " + wages + " triệu VNĐ";
  } else {
    commissionMoney = inputSales * 0.2;
    wages = 5.0 + commissionMoney + bonus;
    notify = "Bạn nhận được 20% hoa hồng, được thưởng thêm 1.000.000 VNĐ";
    message = "Lương của bạn là " + wages + " triệu VNĐ";
  }
  document.getElementById("result").innerHTML = notify;
  document.getElementById("result1").innerHTML = message;
}

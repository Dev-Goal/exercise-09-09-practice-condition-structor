var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let phoneCharges = parseFloat(document.getElementById("phone_charges").value);
  let mandatoryFee = 220.0;
  let Tatol;

  if (phoneCharges <= 50) {
    Tatol = mandatoryFee + phoneCharges * 6.0;
  } else if (phoneCharges > 50 && phoneCharges <= 200) {
    Tatol = mandatoryFee + ((phoneCharges - 50) * 4.0 + 50 * 6.0);
  } else {
    Tatol = mandatoryFee + ((phoneCharges - 200) * 2.0 + 150 * 4.0 + 50 * 6.0);
  }
  document.getElementById("result").innerHTML =
    "Số cước của hộ gia đình là " + Tatol + ".000 VNĐ";
}

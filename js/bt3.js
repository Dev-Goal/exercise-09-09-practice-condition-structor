var btnCheck = document.getElementById("btn1");
btnCheck.addEventListener("click", getCheck);
function getCheck(){
    let number = parseInt(document.getElementById("number1").value);
    let message = '';
    if(number>0){
        message = "Số bạn vừa nhập lớn hơn 0";
    }else if(number<0){
        message = "Số bạn vừa nhập nhỏ hơn 0";
    }else{
        message = "Số bạn vừa nhập bằng 0";
    }
    document.getElementById("result").innerHTML = message;
}
function init(){
	var num = document.getElementById("num");
	num.value = 0;
	num.disabled = "disabled"
	var objButton = document.getElementsByTagName("button");
	var btn_num1;
	var symbol;

	for(var i = 0; i < objButton.length; i++){
		objButton[i].onclick = function(){
			if(isNumber(this.value)){
				if(isNull(num.value)){
					num.value = this.value;
				}
				else{
					num.value += this.value;
				}
			}
			else{
				var btn_num = this.value;
				switch(btn_num){
					case "+":
						btn_num1 = Number(num.value);
						num.value = 0;
						symbol = "+";
						break;
					case "-":
						btn_num1 = Number(num.value);
						num.value = 0;
						symbol = "-";
						break;
					case "*":
						btn_num1 = Number(num.value);
						num.value = 0;
						symbol = "*";
						break;
					case "/":
						btn_num1 = Number(num.value);
						num.value = 0;
						symbol = "/";
						break;
					case ".":
						num.value = dec_number(num.value);
						break;
					case "+/-":
						num.value = plusMinus(num.value);
						break;
					case "AC":
						num.value = "0";
						break;
					case "<——":
						num.value = back(num.value);
						break;
					case "=":
						switch(symbol){
							case "+":
								num.value = btn_num1 + Number(num.value);
								break;
							case "-":
								num.value = btn_num1 - Number(num.value);
								break;
							case "*":
								num.value = btn_num1 * Number(num.value);
								break;
							case "/":
								if(Number(num.value) == 0){
									num.value = "除数不能是0!";
								}
								else{
									num.value = btn_num1 / Number(num.value); 
								}
								break;
						}
						break;
					case "M":
						window.location.href = 'http:www.imooc.com/';
						break;
				}
			}
		}
	}
}

// 正负号
function plusMinus(n){
	// n = Number(n) * (-1);
	if(n.indexOf("-") == -1){
		n = "-" + n;
	}
	else{
		n = n.substr(1, n.length);
	}
	return n;
}

//退位键
function back(n){
	if(n.length > 1){
		n = n.substr(0, n.length - 1);
	}
	else{
		n = 0;
	}
	return n;
}

//小数点
function dec_number(n){
	if(n.indexOf(".") == -1){
		n = n + ".";
	}
	return n;
}

function isNull(n){
	if(n == "0" || n.length == 0){
		return true;
	}
	else{
		return false;
	}
}
 
function isNumber(n){
	return !isNaN(n);
}
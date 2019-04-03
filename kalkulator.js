function insert(num) {
	document.querySelector('#layar-text').value = document.querySelector('#layar-text').value+num;
}

function hitung() {
	var exp = document.querySelector('#layar-text').value;
	if(exp){
		document.querySelector('#layar-text').value = eval(exp);
	}
}

function c() {
	document.querySelector('#layar-text').value = '';
}

function back() {
	var exp = document.querySelector('#layar-text').value;
	document.querySelector('#layar-text').value = exp.substring(0,exp.length-1);
}
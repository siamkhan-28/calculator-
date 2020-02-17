function dis(num){
	$('.calc-display').val($('.calc-display').val()+num);
}
function equl(){
	$('.calc-display').val(eval($('.calc-display').val()));
}

function ddl(){
	$('.calc-display').val('');
}
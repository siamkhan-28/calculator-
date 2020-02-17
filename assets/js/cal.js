function inp(num){
	$('.calc-input').val($('.calc-input').val() +num);
}

function  equl(){
	$('.calc-input').val(eval($('.calc-input').val()));
}
function C(){
	$('.calc-input').val('');
}
function del(){
	value = $('.calc-input').val();
	$('.calc-input').val(value.substring(0, value.lenght - 1));
}
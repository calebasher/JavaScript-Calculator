$(document).ready(function(){

	var working = [];
	var toEvaluate;
	var answer;

	$('.keys').click(function(){
		working.push($(this).text());
		toEvaluate = (working.join('').toString());
		$('#result').html('<h3>'+toEvaluate+'</h3>')		
	});

	$('#equals').click(function(){
		answer = eval(toEvaluate);
		$('#result').html('<h3>'+answer+'</h3>')
		working = [];
	});

	$('#aclear').click(function(){
		$('#result').empty();
		working = [];
	});

	$('#cclear').click(function(){
		working.pop();
		toEvaluate = (working.join('').toString());
		$('#result').html('<h3>'+toEvaluate+'</h3>')
	});

	$('#percent').click(function(){
		
	});

});


		
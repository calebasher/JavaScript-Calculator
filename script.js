$(document).ready(function(){
	var keys = [];
	var keyString;
	var operators =[];
	var working = [];
	var toEvaluate;
	var answer;

	$('h1').hide().fadeIn('3000');

	$('.keys').click(function(){
		working.push($(this).text());
		keys.push($(this).text());
		keyString = keys.join('').toString();
		toEvaluate = (working.join('').toString());
		$('#result').html('<p>'+keyString+'<p>')		
	});

	$('.operator').click(function(){
		keys = [];
		working.push($(this).text());
		toEvaluate = (working.join('').toString());
		$('#result').html('<p>'+$(this).text()+'<p>')		
	});

	$('#equals').click(function(){
		answer = eval(toEvaluate).toString().substr(0,13);
		$('#result').html('<p>'+answer+'<p>')
		working = [answer];
		keys=[];
	});

	$('#aclear').click(function(){
		$('#result').empty();
		working = [];
		keys=[];
	});

	$('#cclear').click(function(){
		working.pop();
		toEvaluate = (working.join('').toString());
		$('#result').html('<p>'+toEvaluate+'<p>')
	});

	$('#percent').click(function(){
		var keyLength = (keyString * 100).toString();
		var noDec = keyString.replace(".", "");
		var dec;
		if(keyLength.length < 4) {
			dec = ".0"+noDec;
			toEvaluate = dec;
		}
		else {
			dec = "."+noDec;
			toEvaluate = dec;
		}
		for (i=0;i<keyString.length;i++){
			working.pop();
		}
		working.push(dec);
		answer = eval(toEvaluate);
		$('#result').html('<p>'+answer+'<p>')
	});

});


		
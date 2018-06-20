$(document).ready(function() {
	$('#whiteButton').click(function() {
		$('#whiteReqs').toggleClass('collapse');
	});
	$('#whiteCollapse').click(function() {
		$('#whiteReqs').addClass('collapse');
	});
	$('#yellowButton').click(function() {
		$('#yellowReqs').toggleClass('collapse');
	});
	$('#yellowCollapse').click(function() {
		$('#yellowReqs').toggleClass('collapse');
	});
	$('#orangeButton').click(function() {
		$('#orangeReqs').toggleClass('collapse');
	});
	$('#orangeCollapse').click(function() {
		$('#orangeReqs').toggleClass('collapse');
	});
	$('#greenButton').click(function() {
		$('#greenReqs').toggleClass('collapse');
	});
	$('#greenCollapse').click(function() {
		$('#greenReqs').toggleClass('collapse');
	});
	$('#blueButton').click(function() {
		$('#blueReqs').toggleClass('collapse');
	});
	$('#blueCollapse').click(function() {
		$('#blueReqs').toggleClass('collapse');
	});
	$('#purpleButton').click(function() {
		$('#purpleReqs').toggleClass('collapse');
	});
	$('#purpleCollapse').click(function() {
		$('#purpleReqs').toggleClass('collapse');
	});
	$('#brown3rdButton').click(function() {
		$('#brown3rdReqs').toggleClass('collapse');
	});
	$('#brown3rdCollapse').click(function() {
		$('#brown3rdReqs').toggleClass('collapse');
	});
	$('#brown2ndButton').click(function() {
		$('#brown2ndReqs').toggleClass('collapse');
	});
	$('#brown2ndCollapse').click(function() {
		$('#brown2ndReqs').toggleClass('collapse');
	});
	$('#brown1stButton').click(function() {
		$('#brown1stReqs').toggleClass('collapse');
	});
	$('#brown1stCollapse').click(function() {
		$('#brown1stReqs').toggleClass('collapse');
	});
	$('#black1stButton').click(function() {
		$('#black1stReqs').toggleClass('collapse');
	});
	$('#black1stCollapse').click(function() {
		$('#black1stReqs').toggleClass('collapse');
	});
	
	
	var btnTxt;
	var btnCall;
	
	var yellowBtn = document.getElementById('yellowButton');	
	yellowBtn.addEventListener('click', function(){
		btnCall = yellowBtn;
		btnTxt = yellowBtn.innerHTML;
		buttonUpdate;
	})
	yellowBtn.addEventListener('click', buttonUpdate)
	
	var orangeBtn = document.getElementById('orangeButton');	
	orangeBtn.addEventListener('click', function(){
		btnCall = orangeBtn;
		btnTxt = orangeBtn.innerHTML;
		buttonUpdate;
	})
	orangeBtn.addEventListener('click', buttonUpdate)
	
	var greenBtn = document.getElementById('greenButton');	
	greenBtn.addEventListener('click', function(){
		btnCall = greenBtn;
		btnTxt = greenBtn.innerHTML;
		buttonUpdate;
	})
	greenBtn.addEventListener('click', buttonUpdate)
	
	var blueBtn = document.getElementById('blueButton');	
	blueBtn.addEventListener('click', function(){
		btnCall = blueBtn;
		btnTxt = blueBtn.innerHTML;
		buttonUpdate;
	})
	blueBtn.addEventListener('click', buttonUpdate);
	
	var purpleBtn = document.getElementById('purpleButton');	
	purpleBtn.addEventListener('click', function(){
		btnCall = purpleBtn;
		btnTxt = purpleBtn.innerHTML;
		buttonUpdate;
	})
	purpleBtn.addEventListener('click', buttonUpdate);
	
	var brown3rdBtn = document.getElementById('brown3rdButton');	
	brown3rdBtn.addEventListener('click', function(){
		btnCall = brown3rdBtn;
		btnTxt = brown3rdBtn.innerHTML;
		buttonUpdate;
	})
	brown3rdBtn.addEventListener('click', buttonUpdate);
	
	var brown2ndBtn = document.getElementById('brown2ndButton');	
	brown2ndBtn.addEventListener('click', function(){
		btnCall = brown2ndBtn;
		btnTxt = brown2ndBtn.innerHTML;
		buttonUpdate;
	})
	brown2ndBtn.addEventListener('click', buttonUpdate);
	
	var brown1stBtn = document.getElementById('brown1stButton');	
	brown1stBtn.addEventListener('click', function(){
		btnCall = brown1stBtn;
		btnTxt = brown1stBtn.innerHTML;
		buttonUpdate;
	})
	brown1stBtn.addEventListener('click', buttonUpdate);
	
	var black1stBtn = document.getElementById('black1stButton');	
	black1stBtn.addEventListener('click', function(){
		btnCall = black1stBtn;
		btnTxt = black1stBtn.innerHTML;
		buttonUpdate;
	})
	black1stBtn.addEventListener('click', buttonUpdate);	
	
	function buttonUpdate() {
		
		if (btnTxt === 'Show'){
			btnCall.innerHTML = 'Hide';
		}
		else {
			btnCall.innerHTML = "Show";
		}
	}
});

/*   
$('#whiteButton').onClick.toggleClass('collapse');

<div class="col-md-1 btn-style position-left"><button class="whiteCon topButtons position-left">White Contrast</button></div>

$('#blackxxButton').click(myFunction);
	
	function myFunction() {
		var x = document.getElementById('blackxButton').value;
		var btn = document.getElementById('blackxButton').innerHTML;
		
		if (btn === 'Show'){
			document.getElementById(x + 'Button').innerHTML = "Hide";
		}
		else {
			document.getElementById(x + 'Button').innerHTML = "Show";
		}
		
		$('#' + x + 'Reqs').toggleClass('collapse');
}

*/
function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}

$(".container").click(function(){
	$(this).addClass('active');
	$(this).children().addClass('green');

	// Collapse others
	$('.container').not(this).removeClass('active');
	$('.container').not(this).children().removeClass('green');
})
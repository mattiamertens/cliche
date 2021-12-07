$(document).ready(function(){
	$('.container > .title').addClass('hide'); // hide horizontal title = collapsed card
	$('.container').addClass('test');
})

$(".container").click(function(){
	$(this).addClass('active');
	$(this).children(":first").addClass('green');

	// Collapse others
	$('.container').not(this).removeClass('active');
	$('.container').not(this).children().removeClass('green');
	// $('.container').not(this).children().addClass('hide');
})
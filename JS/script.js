$(document).ready(function(){
	$('.container > .title').addClass('hide-title'); // hide horizontal title = collapsed card
})

$(".container").click(function(){
	$(this).addClass('active');
	$(this).children(":first").addClass('hide-ghost'); // hide vertical title
	$(this).children('.content-section').addClass('show-title'); //show horizontal = open card

	// Collapse others
	$('.container').not(this).removeClass('active');
	$('.container').not(this).children().removeClass('show-title hide-ghost'); // show vertical title again and hide horizontal
})

// Mouse hover detection
let isMouseHover = false
let hoverCheck = $('.container');

hoverCheck.on('mouseenter', function(){
	if (!$(this).hasClass('active')) {
		$(this).addClass('focus')
	}
})
hoverCheck.on('mouseleave', function(){
	$(this).removeClass('focus')
})


// hoverCheck.addEventListener("mouseleave", function (event) {
//   isMouseHover = false
//   console.log(isMouseHover)
// }, false);
// hoverCheck.addEventListener("mouseover", function (event) {
//   isMouseHover = true
//   console.log(isMouseHover)
// }, false);


// categories card generation
data = d3.json("assets/data/img.json");

// Select the container where we will put our HTML elements
let boxes = d3.select("#bookworm-box");

data.then(function(data) {
	function filterJSON(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	
	var filtered = filterJSON(data, 'name', 'CD01_P01');
	// console.log(filtered);

	// console.log(data);
    let box = boxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/' + d.render + '_' + d.type + d.index + '.jpg'
	}); // Add an attribute to the HTML element. In this case, the src attribute sets the URL of the image we need to display.
	

	$('.box').on('click', function(){
		$(this).children().addClass('test');
		$('.modal-wrapper').removeClass('visibility-toggle');

		$(this).children().each(function (index) {
			$(this).attr('onclick');
			var src = $(this).attr("src");
			var srcR = src.replace('.jpg', 'R.png');
			ShowLargeImage(srcR);
		});

		$('.close-context').on('click', function () {
			$('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
			var removed = document.getElementsByClassName('modal-img');
			$(removed[0]).remove();
		});
		
		function ShowLargeImage(imagePath) {
			// $('.img-wrapper').append('<div class="modal-img"><img src="' + imagePath + '" /></div>');
			$('.img-wrapper').css('background-image', "url('" + imagePath + "')");
		}
	})
});


// window.onclick = e => {
//     // console.log(e.target);  // to get the element
//     console.log(e.target.className);  // to get the element tag name alone
// 	// $(e.target).addClass('ccc');
// } 

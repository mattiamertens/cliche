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


// categories card generation
bookworm = d3.json("assets/data/img.json");

// Select the container where we will put our HTML elements
let boxes = d3.select("#bookworm-box");

// Load data
bookworm.then(function(data) {
    let box = boxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(data)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { return d.url }); // Add an attribute to the HTML element. In this case, the src attribute sets the URL of the image we need to display.


	$('.box').on('click', function(){
		console.log('daje')
		$(this).children().addClass('test')

		$(this).children().each(function (index) {
			if ($(this).attr('onclick') == null) {                    
                     
				$(this).click(function () {
					$(this).attr('onclick');
					var src = $(this).attr("src");
					ShowLargeImage(src);

					console.log('first event')
				});
				
			}
			// else {                    
			// 	$(this).click(function () {    
			// 		$(this).attr('onclick');                    
			// 		var src = $(this).attr("src");
			// 		ShowLargeImage(src);

			// 		console.log('second event')
			// 	});
			// }
		});
		
		$('.title').on('click', function () {
			$('.modal-img').remove();
			console.log('remove img')
		});
		
		function ShowLargeImage(imagePath) {
			$('body').append('<div class="modal-img"><img src="' + imagePath.replace("small","large") + '" /></div>');
		}
		

	})
});

// window.onclick = e => {
//     // console.log(e.target);  // to get the element
//     console.log(e.target.className);  // to get the element tag name alone
// 	// $(e.target).addClass('ccc');
// } 

$('.close-context').on('click', function(){
	$('.modal-wrapper').toggleClass('visibility-toggle');
})
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
data = d3.json("assets/data/img.json");

// Select the container where we will put our HTML elements
const boxes = d3.select("#categories-box");

// Load data
data.then(function(data) {

	// We create a single "card". It can be named as you prefer.
    let box = boxes.selectAll("div") // Inside our selection, select the available div elements
    .data(data) // Bind the selection to the data
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true) // Add a class

    box.append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { return d.url }); // Add an attribute to the HTML element. In this case, the src attribute sets the URL of the image we need to display.
});
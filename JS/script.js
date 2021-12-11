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

// categories card generation
data = d3.json("assets/data/data.json");

// Select the container where we will put our HTML elements
let businessBoxes = d3.select("#business-box");
let squadBoxes = d3.select("#squad-box");
let loveyBoxes = d3.select("#lovey-box");
let familyBoxes = d3.select("#family-box");
let fridayBoxes = d3.select("#friday-box");
let fashionBoxes = d3.select("#fashion-box");
let enthusiastBoxes = d3.select("#enthusiast-box");
let socksBoxes = d3.select("#socks-box");
let freshmenBoxes = d3.select("#freshmen-box");
let gymBoxes = d3.select("#gym-box");
let childBoxes = d3.select("#child-box");
let hustlerBoxes = d3.select("#hustler-box");
let shopaholicBoxes = d3.select("#shopaholic-box");
let treehuggerBoxes = d3.select("#treehugger-box");
let bookwormBoxes = d3.select("#bookworm-box");
let olderBoxes = d3.select("#older-box");
let soundcloudBoxes = d3.select("#soundcloud-box");
let petaBoxes = d3.select("#peta-box");
let futuristicBoxes = d3.select("#futuristic-box");

data.then(function(data) {
	function filterJSONBusiness(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONBusiness(data, 'stereotype', 'S05');

    var box = businessBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	
	// SQUAD
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S09');

    box = squadBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	
	// LOVEY DOVEY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S06');

    box = loveyBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	
	// FAMILY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S08');

    box = familyBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});

	// FRIDAY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S02');

    box = fridayBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	
	// FASHION
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S07');

    box = fashionBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	



	// OPEN MODAL WINDOW
	$('.box').on('click', function(){
		$(this).addClass('in-focus')
		$('.modal-wrapper').removeClass('visibility-toggle');

		var city = $(this).children().attr('data-city');
		var project = $(this).children().attr('data-project');

		$(this).children().each(function (index) {
			$(this).attr('onclick');
			var src = $(this).attr("src");
			console.log(this)
			var srcR = src.replace('.png', 'R.png');
			ShowLargeImage(srcR);
		});
		
		function ShowLargeImage(imagePath) {
			$('.img-wrapper').prepend('<img class="modal-img" src="' + imagePath + '" />');
			$('.city').text(city);
			$('.project').text(project);
			// $('.img-wrapper').css('background-image', "url('" + imagePath + "')");
		}
		
		//CLOSE MODAL WINDOW
		$('.close-context').on('click', function () {
			$('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
			$('.box').removeClass('in-focus')
			var removed = document.getElementsByClassName('modal-img');
			$(removed[0]).remove();
		});
		$(document).on('keyup',function(evt) {
			if (evt.keyCode == 27) {
			   $('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
				$('.box').removeClass('in-focus')
				var removed = document.getElementsByClassName('modal-img');
				$(removed[0]).remove();
			}
		});

	})
});

// window.onclick = e => {
//     // console.log(e.target);  // to get the element
//     console.log(e.target.className);  // to get the element tag name alone
// 	// $(e.target).addClass('ccc');
// } 

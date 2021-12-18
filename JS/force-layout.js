// Show navbar
window.addEventListener('scroll',function(){
  var lastScrollTop;
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop)
  
  if(scrollTop > 400){ 
    $('.topnav').removeClass('hidden-nav')
  }
  
  else{
    $('.topnav').addClass('hidden-nav')
    console.log('no')
  }
  
  lastScrollTop = scrollTop;
});


//show names of projects
$('#sd_vitae').on('mouseover', function(){
    $('#n_vitae').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_vitae').addClass('mapitem_hidden');
})


$('#sd_aria').on('mouseover', function(){
    $('#n_aria').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_aria').addClass('mapitem_hidden');
})


$('#sd_loreto_open_community').on('mouseover', function(){
    $('#n_loreto_open_community').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_loreto_open_community').addClass('mapitem_hidden');
})


$('#sd_linnesto').on('mouseover', function(){
    $('#n_linnesto').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_linnesto').addClass('mapitem_hidden');
})


$('#sd_green_between').on('mouseover', function(){
    $('#n_green_between').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_green_between').addClass('mapitem_hidden');
})


$('#sd_co-inventing_doria').on('mouseover', function(){
    $('#n_co-inventing_doria').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_co-inventing_doria').addClass('mapitem_hidden');
})


$('#sd_torre_botanica').on('mouseover', function(){
    $('#n_torre_botanica').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_torre_botanica').addClass('mapitem_hidden');
})


$('#sd_milano_city_door').on('mouseover', function(){
    $('#n_milano_city_door').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_milano_city_door').addClass('mapitem_hidden');
})


$('#sd_seimilano').on('mouseover', function(){
    $('#n_seimilano').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_seimilano').addClass('mapitem_hidden');
})


$('#sd_scalo_di_porta_romana').on('mouseover', function(){
    $('#n_scalo_di_porta_romana').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_scalo_di_porta_romana').addClass('mapitem_hidden');
})


$('#sd_lambrate_streaming').on('mouseover', function(){
    $('#n_lambrate_streaming').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_lambrate_streaming').addClass('mapitem_hidden');
})


$('#sd_molecola').on('mouseover', function(){
    $('#n_molecola').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_molecola').addClass('mapitem_hidden');
})


//show private projecs
$('#private_projects').on('mouseover', function(){
    $('#sd_scalo_di_porta_romana').addClass('focus');
    $('#n_scalo_di_porta_romana').removeClass('mapitem_hidden');
    $('#sd_seimilano').addClass('focus');
    $('#n_seimilano').removeClass('mapitem_hidden');
    $('#sd_torre_botanica').addClass('focus');
    $('#n_torre_botanica').removeClass('mapitem_hidden');
    $('#sd_milano_city_door').addClass('focus');
    $('#n_milano_city_door').removeClass('mapitem_hidden');
})
.on('mouseleave', function(){
    $('#sd_scalo_di_porta_romana').removeClass('focus');
    $('#n_scalo_di_porta_romana').addClass('mapitem_hidden');
    $('#sd_seimilano').removeClass('focus');
    $('#n_seimilano').addClass('mapitem_hidden');
    $('#sd_torre_botanica').removeClass('focus');
    $('#n_torre_botanica').addClass('mapitem_hidden');
    $('#sd_milano_city_door').removeClass('focus');
    $('#n_milano_city_door').addClass('mapitem_hidden');
})


//show c40 projects
$('#reinventing_cities').on('mouseover', function(){
    $('#sd_molecola').addClass('focus');
    $('#n_molecola').removeClass('mapitem_hidden');
    $('#sd_lambrate_streaming').addClass('focus');
    $('#n_lambrate_streaming').removeClass('mapitem_hidden');
    $('#n_lambrate_streaming').addClass('move_n_lambrate_streaming');
    $('#sd_linnesto').addClass('focus');
    $('#n_linnesto').removeClass('mapitem_hidden');
    $('#sd_loreto_open_community').addClass('focus');
    $('#n_loreto_open_community').removeClass('mapitem_hidden');
    $('#sd_green_between').addClass('focus');
    $('#n_green_between').removeClass('mapitem_hidden');
    $('#sd_aria').addClass('focus');
    $('#n_aria').removeClass('mapitem_hidden');
    $('#sd_vitae').addClass('focus');
    $('#n_vitae').removeClass('mapitem_hidden');
    $('#sd_co-inventing_doria').addClass('focus');
    $('#n_co-inventing_doria').removeClass('mapitem_hidden');
    $('#n_co-inventing_doria').addClass('move_n_co-inventing_doria');
})
.on('mouseleave', function(){
    $('#sd_molecola').removeClass('focus');
    $('#n_molecola').addClass('mapitem_hidden');
    $('#sd_lambrate_streaming').removeClass('focus');
    $('#n_lambrate_streaming').addClass('mapitem_hidden');
    $('#n_lambrate_streaming').removeClass('move_n_lambrate_streaming');
    $('#sd_linnesto').removeClass('focus');
    $('#n_linnesto').addClass('mapitem_hidden');
    $('#sd_loreto_open_community').removeClass('focus');
    $('#n_loreto_open_community').addClass('mapitem_hidden');
    $('#sd_green_between').removeClass('focus');
    $('#n_green_between').addClass('mapitem_hidden');
    $('#sd_aria').removeClass('focus');
    $('#n_aria').addClass('mapitem_hidden');
    $('#sd_vitae').removeClass('focus');
    $('#n_vitae').addClass('mapitem_hidden');
    $('#sd_co-inventing_doria').removeClass('focus');
    $('#n_co-inventing_doria').addClass('mapitem_hidden');
    $('#n_co-inventing_doria').removeClass('move_n_co-inventing_doria');
})



const repelForce = d3.forceManyBody().strength(-15).distanceMin(100);
const attractForce = d3.forceManyBody().strength(15).distanceMin(200);


const width = d3.select("#wall").node().offsetWidth
const height = d3.select("#wall").node().offsetHeight 
const svg = d3.select("#wall").append("svg").attr("viewBox", `0 0 ${width} ${height}`)
const g = svg.append("g").attr("transform", `translate(${width/2}, ${height/2})`)
const radius = 20;

const simulation = d3.forceSimulation()
    // .force("x", d3.forceX())
    // .force("y", d3.forceY())
    // .force("collide", d3.forceCollide().radius(d => -10))
    .force('charge', d3.forceManyBody().strength(-10))
    .force("repelForce", repelForce)
    .force("attractForce", attractForce)
    .on("tick", ticked);

function ticked() {
    node.attr("transform", d=>`translate(${d.x}, ${d.y})`);
}


// positions
// const xScale = d3.scalePoint().range([0,width])



let node = g.selectAll(".node")


function update(data) {

    node = node.data(data, d=>d.id)
    node.exit().remove()
    node = node.enter().append("g").merge(node)
    node.append("image")
        .attr("width","20")
        .attr("height","20")
        .attr("href", d=>"./assets/data/SPRITE/"+d.name+".png")

    simulation.nodes(data)
    simulation.alpha(1)
    simulation.restart()
    
}

// function dragsubject(d) {
//     var subject = simulation.find(event.x, event.y);
//     // return subject
//     return simulation.find(event.x, event.y);
// }

// function dragstarted(d) {
//     console.log('start')
//     if (!event.active) simulation.alphaTarget(0.3).restart();
//     d.fx = d.x;
//     d.fy = d.y;
// }

// function dragged(d) {
//     console.log('progress')
//     // console.log(event.x)
//     // d3.select(node).attr('class', 'draggg')
//     .attr("cx", d.x = d.x).attr("cy", d.y = d.y);
//     d.fx = d.x;
//     d.fy = d.y;
// }

// function dragended(d) {
//     console.log('end')
//     if (!d3.event.active) simulation.alphaTarget(0);
//     d.fx = null;
//     d.fy = null;
// }

// svg.call(
//     d3.drag()
//         .subject(dragsubject)
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended)
// );


d3.json("./assets/data/data-id.json").then(data=>{
    // const xScaleDomain = data.map(d=>d.stereotype).sort()
    // xScale.domain(xScaleDomain)
    update(data);   
})


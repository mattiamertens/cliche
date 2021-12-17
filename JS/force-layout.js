// File for Homepage

$('#name_aria').on('mouseover', function(){
    $("#point_aria").addClass("map_point_hover");
})
.on('mouseleave', function(){
    $("#point_aria").removeClass("map_point_hover");
});


$('#name_co-inventing_doria').on('mouseover', function(){
    $("#point_co-inventing_doria").addClass("map_point_hover");
});

$('#name_co-inventing_doria').on('mouseleave', function(){
    $("#point_co-inventing_doria").removeClass("map_point_hover");
});


$('#name_green_between').on('mouseover', function(){
    $("#point_green_between").addClass("map_point_hover");
});

$('#name_green_between').on('mouseleave', function(){
    $("#point_green_between").removeClass("map_point_hover");
});


$('#name_l_innesto').on('mouseover', function(){
    $("#point_l_innesto").addClass("map_point_hover");
});

$('#name_l_innesto').on('mouseleave', function(){
    $("#point_l_innesto").removeClass("map_point_hover");
});


$('#name_lambrate_streaming').on('mouseover', function(){
    $("#point_lambrate_streaming").addClass("map_point_hover");
});

$('#name_lambrate_streaming').on('mouseleave', function(){
    $("#point_lambrate_streaming").removeClass("map_point_hover");
});


$('#name_loreto_open_community').on('mouseover', function(){
    $("#point_loreto_open_community").addClass("map_point_hover");
});

$('#name_loreto_open_community').on('mouseleave', function(){
    $("#point_loreto_open_community").removeClass("map_point_hover");
});


$('#name_milano_city_door').on('mouseover', function(){
    $("#point_milano_city_door").addClass("map_point_hover");
});

$('#name_milano_city_door').on('mouseleave', function(){
    $("#point_milano_city_door").removeClass("map_point_hover");
})


$('#name_molecola').on('mouseover', function(){
    $("#point_molecola").addClass("map_point_hover");
})

$('#name_molecola').on('mouseleave', function(){
    $("#point_molecola").removeClass("map_point_hover");
})


$('#name_scalo_di_porta_romana').on('mouseover', function(){
    $("#point_scalo_di_porta_romana").addClass("map_point_hover");
})

$('#name_scalo_di_porta_romana').on('mouseleave', function(){
    $("#point_scalo_di_porta_romana").removeClass("map_point_hover");
})


$('#name_sei_milano').on('mouseover', function(){
    $("#point_sei_milano").addClass("map_point_hover");
})

$('#name_sei_milano').on('mouseleave', function(){
    $("#point_sei_milano").removeClass("map_point_hover");
})


$('#name_torre_botanica').on('mouseover', function(){
    $("#point_torre_botanica").addClass("map_point_hover");
})

$('#name_torre_botanica').on('mouseleave', function(){
    $("#point_torre_botanica").removeClass("map_point_hover");
})


$('#name_vitae').on('mouseover', function(){
    $("#point_vitae").addClass("map_point_hover");
})

$('#name_vitae').on('mouseleave', function(){
    $("#point_vitae").removeClass("map_point_hover");
})



const repelForce = d3.forceManyBody().strength(-90).distanceMin(10);
const attractForce = d3.forceManyBody().strength(54).distanceMin(60);


const width = d3.select("#wall").node().offsetWidth
const height = d3.select("#wall").node().offsetHeight 
const svg = d3.select("#wall").append("svg").attr("viewBox", `0 0 ${width} ${height}`)
const g = svg.append("g").attr("transform", `translate(${width/2}, ${height/2})`)
const radius = 20;

const simulation = d3.forceSimulation()
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    // .force("collide", d3.forceCollide().radius(d => 10))
    .force('charge', d3.forceManyBody().strength(-16))
    // .force("repelForce", repelForce)
    // .force("attractForce", attractForce)
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

function dragsubject(d) {
    var subject = simulation.find(event.x, event.y);
    // return subject
    return simulation.find(event.x, event.y);
}

function dragstarted(d) {
    console.log('start')
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    console.log('progress')
    // console.log(event.x)
    // d3.select(node).attr('class', 'draggg')
    .attr("cx", d.x = d.x).attr("cy", d.y = d.y);
    d.fx = d.x;
    d.fy = d.y;
}

function dragended(d) {
    console.log('end')
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

svg.call(
    d3.drag()
        .subject(dragsubject)
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
);


d3.json("./assets/data/data-id.json").then(data=>{
    const xScaleDomain = data.map(d=>d.stereotype).sort()
    // xScale.domain(xScaleDomain)
    update(data);   
})


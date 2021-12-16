// const repelForce = d3.forceManyBody().strength(-90).distanceMin(10);
// const attractForce = d3.forceManyBody().strength(54).distanceMin(60);


const width = d3.select("#force-layout").node().offsetWidth
const widthC = d3.select("#force-layout").node().offsetWidth / 1.3
const height = d3.select("#force-layout").node().offsetHeight
const svg = d3.select("#force-layout").append("svg").attr("viewBox", `0 0 ${width} ${height}`)

const simulation_t = d3.forceSimulation()
    .force("x", d3.forceX())
    // .force("y", d3.forceManyBody().strength(-40))
    .force("y", d3.forceY())
    // .force("collide", d3.forceCollide().radius(d => -1))
    .force('charge', d3.forceManyBody().strength(-40))
    // .force("repelForce", repelForce)
    // .force("attractForce", attractForce)
    // .force('center', d3.forceCenter(window.innerWidth / 2.4, window.innerHeight/3))
    .on("tick", ticked)
    
    //.stop()

function ticked() {
    // console.log(simulation.alpha())
    node.attr("transform", d=>`translate(${d.x}, ${d.y})`);
}

// positions
const cluster = d3.scalePoint().range([300,widthC])
let node = svg.selectAll(".sprite")

function update(data) {

    node = node.data(data, d=>d.id)
    node.exit().remove()
    node = node.enter().append("g").merge(node)
    node.append("image")
        .attr("width","20")
        .attr("height","20")
        .attr("href", d=>"./assets/data/SPRITE/"+d.name+".png")
        
    node.append('text')
        .text(d => d.id)
        .classed('label', true)
        .style("font-size", '10px')
        .style("font-family", "sans-serif")
        .style("text-anchor", "middle")
        .style("dominant-baseline", "hanging")

    

    simulation_t.nodes(data)
    simulation_t.force("x").x(d=>cluster(d.stereotype))
    // simulation_t.force("x").x(d=>d._x)
    simulation_t.force("y").y(d => d._y)
    // simulation_t.force("y").y(d => cluster(d.stereotype))
    simulation_t.alpha(1)
    simulation_t.restart() 
}

data = d3.json("./assets/data/data-id.json").then(data=>{
    const xScaleDomain = data.map(d=>d.stereotype).sort()
    console.log(xScaleDomain)
    cluster.domain(xScaleDomain)
    .padding(-4)
    data = data.map(d=>{
        
        const obj = {...d, _x: width/2, _y: height/2}
        return obj
        
    })
    update(data);    

    // setTimeout(()=>{
    //     console.log("timer") 
    //     update(data.slice(0,50))
    // }, 5000)
})
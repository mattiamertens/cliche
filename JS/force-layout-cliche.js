// File for comparing

// const repelForce = d3.forceManyBody().strength(-90).distanceMin(10);
// const attractForce = d3.forceManyBody().strength(54).distanceMin(60);

const width = d3.select("#force-layout").node().offsetWidth;
const widthC = d3.select("#force-layout").node().offsetWidth / 1.3;
const height = d3.select("#force-layout").node().offsetHeight;
const svg = d3
  .select("#force-layout")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`);

const simulation_t = d3
  .forceSimulation()
  .force("x", d3.forceX())
  // .force("y", d3.forceManyBody().strength(-40))
  .force("y", d3.forceY())
  // .force("collide", d3.forceCollide().radius(d => -1))
  .force("charge", d3.forceManyBody().strength(-30))
  // .force("repelForce", repelForce)
  // .force("attractForce", attractForce)
  // .force('center', d3.forceCenter(window.innerWidth / 2.4, window.innerHeight/3))
  .on("tick", ticked);

//.stop()

function ticked() {
  // console.log(simulation.alpha())
  node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
}

// positions
const cluster = d3.scalePoint().range([300, widthC]);
const _positions = function (c, xORy) {
  const positions = {
    S00: { x: 0.0*width, y: 0.0*height },
    S01: { x: 0.5*width, y: 0.0*height },
    S02: { x: 0.10*width, y: 0.0*height },
    S03: { x: 0.15*width, y: 0.0*height },
    S04: { x: 0.20*width, y: 0.0*height },
    S05: { x: 0.25*width, y: 0.0*height },
    S06: { x: 0.30*width, y: 0.0*height },
    S07: { x: 0.0*width, y: 0.10*height },
    S08: { x: 0.0*width, y: 0.0*height },
    S09: { x: 0.0*width, y: 0.0*height },
    S10: { x: 0.0*width, y: 0.0*height },
    S11: { x: 0.0*width, y: 0.0*height },
    S12: { x: 0.0*width, y: 0.0*height },
    S13: { x: 0.0*width, y: 0.0*height },
    S15: { x: 0.0*width, y: 0.0*height },
    S16: { x: 0.0*width, y: 0.0*height },
    S17: { x: 0.0*width, y: 0.0*height },
    S19: { x: 0.0*width, y: 0.0*height },
    S20: { x: 0.85*width, y: 0.80*height },
    S21: { x: 0.90*width, y: 0.90*height },
  };
  return positions[c][xORy]
};

let node = svg.selectAll(".sprite");

function update(data) {
  node = node.data(data, (d) => d.id);
  node.exit().remove();
  node = node.enter().append("g").merge(node);
  node
    .append("image")
    .attr("width", "20")
    .attr("height", "20")
    .attr("href", (d) => "./assets/data/SPRITE/" + d.name + ".png");

  node
    .append("text")
    .text((d) => d.id)
    .classed("label", true)
    .style("font-size", "10px")
    .style("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .style("dominant-baseline", "hanging");

  simulation_t.nodes(data);
  simulation_t.force("x").x((d) => _positions(d.stereotype,"x"));
  // simulation_t.force("x").x(d=>d._x)
  simulation_t.force("y").y((d) => _positions(d.stereotype,"y"));
  // simulation_t.force("y").y(d => cluster(d.stereotype))
  simulation_t.alpha(1);
  simulation_t.restart();
}

data = d3.json("./assets/data/data-id.json").then((data) => {
  const xScaleDomain = data.map((d) => d.stereotype).sort();

  cluster.domain(xScaleDomain).padding(-4);

  console.log(cluster.domain());

  data = data.map((d) => {
    const obj = { ...d, _x: width / 2, _y: height / 2 };
    return obj;
  });
  function filterJSONBusiness(data, key, value) {
    var result = [];

    for (var indicator in data) {
      if (data[indicator][key] === value) {
        result.push(data[indicator]);
      }
    }
    return result;
  }
  var filtered = filterJSONBusiness(data, "stereotype", "S05");
  console.log(filtered);
  update(data);

//   setTimeout(() => {
//     update(filtered);
//   }, 5000);
});

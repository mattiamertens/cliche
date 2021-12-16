// File for comparing

$('#project_label').on('click', function () {
  $('#project_filters').toggleClass('closed')
});

$('#position_label').on('click', function () {
  $('#position_filters').toggleClass('closed')
});

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
  .force("y", d3.forceY())
  // .force("collide", d3.forceCollide().radius(d => 10))
  .force("charge", d3.forceManyBody().strength(-10))
  // .force("repelForce", repelForce)
  // .force("attractForce", attractForce)
  .on("tick", ticked);

//.stop()

function ticked() {
  // console.log(simulation.alpha())
  node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
}

// positions
const cluster = d3.scalePoint().range([0, width]);
const _positions = function (c, xORy) {
  const positions = {
    S00: { x: 0.17*width, y: 0.65*height },
    S01: { x: 0.15*width, y: 0.25*height },
    S02: { x: 0.25*width, y: 0.30*height },
    S03: { x: 0.35*width, y: 0.65*height },
    S04: { x: 0.20*width, y: 0.50*height },
    S05: { x: 0.60*width, y: 0.50*height },
    S06: { x: 0.35*width, y: 0.45*height },
    S07: { x: 0.60*width, y: 0.30*height },
    S08: { x: 0.40*width, y: 0.30*height },
    S09: { x: 0.80*width, y: 0.40*height },
    S10: { x: 0.50*width, y: 0.75*height },
    S11: { x: 0.85*width, y: 0.20*height },
    S12: { x: 0.65*width, y: 0.75*height },
    S13: { x: 0.75*width, y: 0.75*height },
    S15: { x: 0.85*width, y: 0.65*height },
    S16: { x: 0.45*width, y: 0.60*height },
    S17: { x: 0.47*width, y: 0.45*height },
    S19: { x: 0.75*width, y: 0.65*height },
    S20: { x: 0.70*width, y: 0.65*height },
    S21: { x: 0.85*width, y: 0.80*height },
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
  simulation_t.force("y").y((d) => _positions(d.stereotype,"y"));
  // simulation_t.force("x").x(d=>d._x)
  // simulation_t.force("y").y(d => cluster(d.stereotype))
  simulation_t.alpha(1);
  simulation_t.restart();
}

data = d3.json("./assets/data/data-id.json").then((data) => {
  // const xScaleDomain = data.map((d) => d.stereotype).sort();

  // console.log(cluster.domain());

  // data = data.map((d) => {
  //   const obj = { ...d, _x: width / 2, _y: height / 2 };
  //   return obj;
  // });

  update(data)

  function filterJSON(data, key, value) {
    var result = [];

    for (var indicator in data) {
      if (data[indicator][key] === value) {
        result.push(data[indicator]);
      }
    }
    return result;
  }

  // Aria
  var filteredAria = filterJSON(data, "project", "Aria");

  $('#button_aria').on('click', function () {
    update(filteredAria)
    console.log('Aria')
  })

  // Co-inventing Doria
  var filteredDoria = filterJSON(data, "project", "Co-inventing Doria");

  $('#button_co-inventing_doria').on('click', function () {
    update(filteredDoria)
  })
  
  // GB Crescenzago
  var filteredCrescenzago = filterJSON(data, "project", "Green Between");

  $('#button_green_between').on('click', function () {
    update(filteredCrescenzago)
  })
  
  // Innesto
  var filteredInnesto = filterJSON(data, "project", "L'innesto");

  $('#button_l_innesto').on('click', function () {
    update(filteredInnesto)
  })

  //Lambrate
  var filteredLambrate = filterJSON(data, "project", "Lambrate Streaming");

  $('#button_lambrate_streaming').on('click', function () {
    update(filteredLambrate)
  })
  
  //Loreto
  var filteredLoreto = filterJSON(data, "project", "Loreto Open Community");

  $('#button_loreto_open_community').on('click', function () {
    update(filteredLoreto)
  })
 
  //City Door
  var filteredCityD = filterJSON(data, "project", "Milano City Door");

  $('#button_milano_city_door').on('click', function () {
    update(filteredCityD)
  })
  
  //Molecola
  var filteredMolecola = filterJSON(data, "project", "MoLeCoLa");

  $('#button_molecola').on('click', function () {
    update(filteredMolecola)
  })
  
  // P. Romana
  var filteredPRomana = filterJSON(data, "project", "Scalo di Porta Romana");

  $('#button_scalo_di_porta_romana').on('click', function () {
    update(filteredPRomana)
  })
 
  // Sei Milano
  var filtered6Milano = filterJSON(data, "project", "Sei Milano");

  $('#button_sei_milano').on('click', function () {
    update(filtered6Milano)
  })
  
  // Torre Botanica
  var filteredTorre = filterJSON(data, "project", "Torre Botanica");

  $('#button_torre_botanica').on('click', function () {
    update(filteredTorre)
  })
  
  // Vitae
  var filteredVitae = filterJSON(data, "project", "Vitae");

  $('#button_vitae').on('click', function () {
    update(filteredVitae)
  })
  
  // Background
  var filteredBg = filterJSON(data, "disposition", 3);

  $('#button_background').on('click', function () {
    update(filteredBg)
  })

  // Middle ground
  var filteredMg = filterJSON(data, "disposition", 2);

  $('#button_middleground').on('click', function () {
    update(filteredMg)
  })
  
  // Foreground
  var filteredFg = filterJSON(data, "disposition", 1);

  $('#button_foreground').on('click', function () {
    update(filteredFg)
  })
  
  // Reset all filters
  $('#reset_filters').on('click', function(){
    update(data)
  })

});

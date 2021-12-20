// File for comparing
// $(document).ready(function () {
//   if (localStorage.getItem('wasVisited') == null) {
//       alert('non vis')
//   } else {
//       localStorage.setItem('wasVisited', 1);
//       alert('ah sì sì')
//   }
// });

if (!localStorage.getItem('previouslyVisited')) {
  function runTour(){
  alert('sss')
  }
  localStorage.setItem('previouslyVisited', 'true');
}




$('#project_label').on('click', function () {
  $(this).toggleClass('on-focus')
  $('.project_filters').toggleClass('closed')
  $('.arrow1').toggleClass('rotate')
});

$('#position_label').on('click', function () {
  $(this).toggleClass('on-focus')
  $('.position_filters').toggleClass('closed')
  $('.arrow2').toggleClass('rotate')
});
$('.tut-button, .close-info').on('click', function(){
  $('.tutorial').toggleClass('closed')
})

// Multi choice filtering
const project = ['Aria', 'Co-Inventing Doria', 'Green Between', "L'innesto", 'Lambrate Streaming', 'Loreto Open Community', 'Milano City Door', 'MoLeCoLa', 'Scalo di Porta Romana', 'Sei Milano', 'Torre Botanica', 'Vitae']
const plane = [1, 2, 3]

const width = d3.select("#force-layout").node().offsetWidth;
const height = d3.select("#force-layout").node().offsetHeight;
const svg = d3.select("#force-layout")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet") // nel caso cancellare
  .attr("viewBox", `0 0 ${width} ${height}`)

const simulation_t = d3
  .forceSimulation()
  .force("x", d3.forceX())
  .force("y", d3.forceY())
  .force("collide", d3.forceCollide().radius(d => 10))
  .force("charge", d3.forceManyBody().strength(-25))
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
    S00: { x: -2*width, y: -2*height },
    S01: { x: 0.40*width, y: 0.65*height },
    S02: { x: 0.15*width, y: 0.67*height },
    S03: { x: 0.15*width, y: 0.35*height },
    S04: { x: 0.18*width, y: 0.50*height },
    S05: { x: 0.79*width, y: 0.65*height },
    S06: { x: 0.38*width, y: 0.47*height },
    S07: { x: 0.40*width, y: 0.30*height },
    S08: { x: 0.50*width, y: 0.57*height },
    S09: { x: 0.63*width, y: 0.30*height },
    S10: { x: 0.70*width, y: 0.49*height },
    S11: { x: 0.82*width, y: 0.25*height },
    S12: { x: 0.50*width, y: 0.38*height },
    S13: { x: 0.60*width, y: 0.50*height },
    S15: { x: 0.78*width, y: 0.45*height },
    S16: { x: 0.27*width, y: 0.60*height },
    S17: { x: 0.27*width, y: 0.45*height },
    S19: { x: 0.72*width, y: 0.27*height },
    S20: { x: 0.28*width, y: 0.33*height },
    S21: { x: 0.65*width, y: 0.65*height },
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
    .attr("width", "25")
    .attr("height", "25")
    .attr("href", (d) => "./assets/data/SPRITE/" + d.name + ".png")
    .attr("data-project", d => d.project)
    .attr('data-name', d => d.name)
    .attr('data-stereotype', d => d.stereotype)
    

  // OPEN MODAL WINDOW
	$('g').on('mouseover', function(){
    var project = $(this).children().attr('data-project')
    var stereotype = $(this).children().attr('data-stereotype')

    $('.info-display').removeClass('visibility-toggle')
    if(stereotype == 'S01'){
      $('.info-stereotype').text('Shopaholic')
    }
    if(stereotype == 'S02'){
      $('.info-stereotype').text('Fridays for future')
    }
    if(stereotype == 'S03'){
      $('.info-stereotype').text('5g enthusiast')
    }
    if(stereotype == 'S04'){
      $('.info-stereotype').text('Bookworm cutie')
    }
    if(stereotype == 'S05'){
      $('.info-stereotype').text('Wolf of Wall Street')
    }
    if(stereotype == 'S06'){
      $('.info-stereotype').text('Lovey Dovey')
    }
    if(stereotype == 'S07'){
      $('.info-stereotype').text('Fashion diva')
    }
    if(stereotype == 'S08'){
      $('.info-stereotype').text('F is for family')
    }
    if(stereotype == 'S09'){
      $('.info-stereotype').text('#Squad')
    }
    if(stereotype == 'S10'){
      $('.info-stereotype').text('Socks and sandals')
    }
    if(stereotype == 'S11'){
      $('.info-stereotype').text('Place-older')
    }
    if(stereotype == 'S12'){
      $('.info-stereotype').text('Find me on Soundcloud')
    }
    if(stereotype == 'S13'){
      $('.info-stereotype').text('Tree-hugger')
    }
    if(stereotype == 'S15'){
      $('.info-stereotype').text('A child')
    }
    if(stereotype == 'S16'){
      $('.info-stereotype').text('Freshmen')
    }
    if(stereotype == 'S17'){
      $('.info-stereotype').text('Something futuristic')
    }
    if(stereotype == 'S19'){
      $('.info-stereotype').text('PETA')
    }
    if(stereotype == 'S20'){
      $('.info-stereotype').text('Hustler')
    }
    if(stereotype == 'S21'){
      $('.info-stereotype').text('No pain, no gain')
    }
    $('.info-project').text(project)

  });
  $('g').on('mouseleave', function(){
    $('.info-display').addClass('visibility-toggle')
  })


  simulation_t.nodes(data);
  simulation_t.force("x").x((d) => _positions(d.stereotype,"x"));
  simulation_t.force("y").y((d) => _positions(d.stereotype,"y"));
  // simulation_t.force("x").x(d=>d._x)
  // simulation_t.force("y").y(d => cluster(d.stereotype))
  simulation_t.alpha(1);
  simulation_t.restart();
}

// var zoom = d3.zoom()
//       .scaleExtent([1, 4])
//       .on('zoom', function(event) {
//           svg.attr('transform', event.transform);
//       console.log('AAA')
// });
// svg.call(zoom);


data = d3.json("./assets/data/data-id.json").then((data) => {
  
  update(data)

  function filterJSON(data, key, value) {
    var result = [];

    for (var i in data) {
      if (data[i][key] === value) {
        result.push(data[i]);
      }
    }
    return result;
  }



  var ariaC = false;
  var doriaC = false;
  var greenbC = false;
  var innestoC = false;
  var lambrateC = false;
  var loretoC = false;
  var citydC = false;
  var molecolaC = false;
  var romanaC = false;
  var seimC = false;
  var torrebC = false;
  var vitaeC = false;

  // Aria
  var filteredAria = filterJSON(data, "project", "Aria")
  
  $('#button_aria').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    ariaC = true;
    console.log(ariaC)
    update(filteredAria)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })

  // Co-inventing Doria
  var filteredDoria = filterJSON(data, "project", "Co-inventing Doria");

  $('#button_co-inventing_doria').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    doriaC = true;
    update(filteredDoria)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // GB Crescenzago
  var filteredCrescenzago = filterJSON(data, "project", "Green Between");

  $('#button_green_between').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    greenbC = true;
    update(filteredCrescenzago)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // Innesto
  var filteredInnesto = filterJSON(data, "project", "L'innesto");

  $('#button_l_innesto').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    innestoC = true;
    update(filteredInnesto)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })

  //Lambrate
  var filteredLambrate = filterJSON(data, "project", "Lambrate Streaming");

  $('#button_lambrate_streaming').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    lambrateC = true;
    update(filteredLambrate)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  //Loreto
  var filteredLoreto = filterJSON(data, "project", "Loreto Open Community");

  $('#button_loreto_open_community').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    loretoC = true;
    update(filteredLoreto)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  //City Door
  var filteredCityD = filterJSON(data, "project", "Milano City Door");
  
  $('#button_milano_city_door').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    citydC = true;
    update(filteredCityD)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  //Molecola
  var filteredMolecola = filterJSON(data, "project", "MoLeCoLa");
  
  $('#button_molecola').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    molecolaC = true;
    update(filteredMolecola)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // P. Romana
  var filteredPRomana = filterJSON(data, "project", "Scalo di Porta Romana");
  
  $('#button_scalo_di_porta_romana').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    romanaC = true;
    update(filteredPRomana)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // Sei Milano
  var filtered6Milano = filterJSON(data, "project", "Sei Milano");
  
  $('#button_sei_milano').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    seimC = true;
    update(filtered6Milano)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // Torre Botanica
  var filteredTorre = filterJSON(data, "project", "Torre Botanica");
  
  $('#button_torre_botanica').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    torrebC = true;
    update(filteredTorre)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  
  // Vitae
  var filteredVitae = filterJSON(data, "project", "Vitae");
  
  $('#button_vitae').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    vitaeC = true;
    update(filteredVitae)
    $('.html-change-project').text($(this).text())
    $('.html-change-position').text('Position')
  })
  


  // Background
  var filteredBg = filterJSON(data, "disposition", 3);
  $('#button_background').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Vitae')
      update(mioArray)
    }

    else{
      update(filteredBg)
      $('.html-change-position').text($(this).text())
    }
  })

  // Middle ground
  var filteredMg = filterJSON(data, "disposition", 2);
  $('#button_middleground').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Vitae')
      update(mioArray)
    }
    else{
      update(filteredMg)
    }
  })
  
  // Foreground
  var filteredFg = filterJSON(data, "disposition", 1);
  $('#button_foreground').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Vitae')
      update(mioArray)
    }
    else{
      update(filteredFg)
    }
  })
  


  // Reset all filters
  $('#reset_filters').on('click', function(){
    update(data)
    $('.filter_button').removeClass('in-focus')
    $('.project_filters').addClass('closed')
    $('.html-change-project').text('Project')
    $('.html-change-position').text('Position')

   ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
  })
});

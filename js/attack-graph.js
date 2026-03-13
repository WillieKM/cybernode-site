const nodes = [
  { id: "domain", label: "domain.com" },
  { id: "api", label: "API Server" },
  { id: "db", label: "Database" },
  { id: "cdn", label: "CDN" },
  { id: "storage", label: "Cloud Storage" }
];

const links = [
  { source: "domain", target: "api" },
  { source: "api", target: "db" },
  { source: "domain", target: "cdn" },
  { source: "cdn", target: "storage" }
];

const width = document.getElementById("graph").clientWidth;
const height = 420;

const svg = d3.select("#graph")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(120))
  .force("charge", d3.forceManyBody().strength(-200))
  .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .style("stroke", "#3b82f6");

const node = svg.append("g")
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 10)
  .style("fill", "#3b82f6");

simulation.on("tick", () => {

link
  .attr("x1", d => d.source.x)
  .attr("y1", d => d.source.y)
  .attr("x2", d => d.target.x)
  .attr("y2", d => d.target.y);

node
  .attr("cx", d => d.x)
  .attr("cy", d => d.y);

});

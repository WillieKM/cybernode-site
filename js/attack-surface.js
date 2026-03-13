function runDiscovery(){

const domain = document.getElementById("domainInput").value;

if(!domain){
alert("Enter a domain");
return;
}

document.getElementById("securityScore").innerText = "78";
document.getElementById("openPorts").innerText = "3";
document.getElementById("sslStatus").innerText = "Valid Certificate";
document.getElementById("dnsRecords").innerText = "Detected";
document.getElementById("techStack").innerText = "Nginx, PHP";
document.getElementById("riskLevel").innerText = "Medium";

/* NETWORK MAP */

const nodes = new vis.DataSet([
{ id:1, label:domain },
{ id:2, label:"Web Server" },
{ id:3, label:"Database" },
{ id:4, label:"Mail Server" },
{ id:5, label:"Open Port 443" },
{ id:6, label:"Open Port 22" }
]);

const edges = new vis.DataSet([
{ from:1, to:2 },
{ from:2, to:5 },
{ from:2, to:6 },
{ from:2, to:3 },
{ from:2, to:4 }
]);

const container = document.getElementById("networkMap");

const data = {
nodes:nodes,
edges:edges
};

const options = {
nodes:{
color:"#2D8FE3",
font:{color:"#ffffff"}
},
edges:{
color:"#7ea3ff"
},
physics:{
enabled:true
}
};

new vis.Network(container, data, options);

}

async function scanDomain(){

let domain=document.getElementById("domainInput").value;

if(!domain){
alert("Enter a domain");
return;
}

document.getElementById("results").innerHTML="Scanning domain...";

try{

let response = await fetch(`http://localhost:3000/scan?domain=${domain}`);

let data = await response.json();

document.getElementById("results").innerHTML=

`<h3>Security Report</h3>

<p><strong>Domain:</strong> ${data.domain}</p>

<p><strong>SSL Status:</strong> ${data.ssl}</p>

<p><strong>Security Headers:</strong> ${data.headers}</p>

<p><strong>Open Ports:</strong> ${data.ports}</p>

<button onclick="generateReport('${domain}')"
class="btn-primary">
Download Full Report </button>

`;

}

catch{

document.getElementById("results").innerHTML=
"Scan failed. Try again.";

}

}

function generateReport(domain){

window.open(`http://localhost:3000/report?domain=${domain}`);

}

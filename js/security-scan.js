async function scanDomain(){

let domain = document.getElementById("domainInput").value;

if(!domain){
alert("Enter a domain");
return;
}

document.getElementById("results").innerHTML="Scanning...";

try{

let ssl = await fetch(`https://api.ssllabs.com/api/v3/analyze?host=${domain}`);

let sslData = await ssl.json();

let status = sslData.status || "Unknown";

document.getElementById("results").innerHTML=

`<h3>Security Report</h3>

<p><strong>Domain:</strong> ${domain}</p>

<p><strong>SSL Status:</strong> ${status}</p>

<p><strong>Recommendation:</strong> Run full vulnerability testing.</p>

<button onclick="captureLead('${domain}')" class="btn-primary">
Get Full Report
</button>

`;

}

catch{

document.getElementById("results").innerHTML=
"Scan failed. Try another domain.";

}

}


function captureLead(domain){

let email = prompt("Enter email for full report");

if(email){

alert("Report request sent for "+domain);

}

}

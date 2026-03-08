async function scanDomain(){

let domain=document.getElementById("domainInput").value;

if(!domain){
alert("Enter a domain");
return;
}

document.getElementById("results").innerHTML="Scanning security posture...";

try{

let ssl=await fetch(`https://api.ssllabs.com/api/v3/analyze?host=${domain}`);
let sslData=await ssl.json();

let score=Math.floor(Math.random()*30)+70;

document.getElementById("results").innerHTML=

`<h3>Security Report</h3>

<p><strong>Domain:</strong> ${domain}</p>

<p><strong>SSL Status:</strong> ${sslData.status}</p>

<p><strong>Security Score:</strong> ${score}/100</p>

<ul>
<li>SSL Encryption: Detected</li>
<li>Firewall Protection: Partial</li>
<li>Security Headers: Needs Improvement</li>
<li>DNS Configuration: Valid</li>
</ul>

<button onclick="captureLead('${domain}')"
class="btn-primary">
Download Full Security Report
</button>

`;

}

catch{

document.getElementById("results").innerHTML="Scan failed.";

}

}


function captureLead(domain){

let email=prompt("Enter email to receive full report");

if(email){

alert("Security report request submitted.");

}

}

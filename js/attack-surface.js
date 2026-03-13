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

}

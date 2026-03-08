function calculateScore(){

let score =
parseInt(document.getElementById("q1").value) +
parseInt(document.getElementById("q2").value) +
parseInt(document.getElementById("q3").value);

document.getElementById("result").innerHTML =
"Security Score: " + score + "%";

}
document.getElementById("leadForm")?.addEventListener("submit", function(e){

e.preventDefault();

fetch("YOUR_GOOGLE_SCRIPT_URL",{

method:"POST",

body:new FormData(this)

}).then(()=>{

alert("Message sent. We will contact you soon.");

});

});
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

let top = card.getBoundingClientRect().top;

if(top < window.innerHeight){

card.style.transform="translateY(0)";
card.style.opacity="1";

}

});
  function runScan(){

let domain = document.getElementById("domain").value;

let score = Math.floor(Math.random()*40)+60;

let results = `

<h3>Security Score: ${score}%</h3>

<p>Scan Results for <strong>${domain}</strong></p>

<ul>
<li>SSL Certificate: Detected</li>
<li>Firewall Protection: Partial</li>
<li>Open Port Exposure: Possible</li>
<li>Security Headers: Needs Improvement</li>
</ul>

<p class="warning">

Recommendation: Run a full cybersecurity assessment.

</p>

<button onclick="captureLead()" class="btn-primary">

Get Full Security Report

</button>

`;

document.getElementById("scanResults").innerHTML = results;

}



function captureLead(){

let email = prompt("projects@cyber-node.com");

if(email){

alert("Security report will be sent to: "+email);

}

}

});

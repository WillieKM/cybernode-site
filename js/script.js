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

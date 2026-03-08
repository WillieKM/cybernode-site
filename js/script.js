function calculateScore(){

let score =
parseInt(document.getElementById("q1").value) +
parseInt(document.getElementById("q2").value) +
parseInt(document.getElementById("q3").value);

document.getElementById("result").innerHTML =
"Security Score: " + score + "%";

}

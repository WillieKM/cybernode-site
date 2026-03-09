function runScheduledScan(){

let scans = JSON.parse(localStorage.getItem("scans") || "[]")

scans.forEach(scan=>{

let newScore = Math.floor(Math.random()*20)+80

scan.score = newScore
scan.date = new Date().toLocaleDateString()

})

localStorage.setItem("scans",JSON.stringify(scans))

alert("Automated security scan completed")

}

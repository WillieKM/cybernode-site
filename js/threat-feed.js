function updateThreatFeed(){

let feed=document.getElementById("threatFeed")

let alerts=[

"New CVE vulnerability affecting Apache servers",

"Suspicious traffic spike detected",

"New malware campaign targeting web apps",

"Phishing infrastructure discovered"

]

let random=alerts[Math.floor(Math.random()*alerts.length)]

let li=document.createElement("li")

li.innerText=random

feed.prepend(li)

}

setInterval(updateThreatFeed,10000)

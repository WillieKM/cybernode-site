firebase.auth().onAuthStateChanged(user=>{

if(!user){

window.location="login.html"

}

})

function logout(){

firebase.auth().signOut().then(()=>{

window.location="index.html"

})

}
function saveScan(domain,score){

let scans = JSON.parse(localStorage.getItem("scans") || "[]")

scans.push({
domain:domain,
score:score,
date:new Date().toLocaleDateString()
})

localStorage.setItem("scans",JSON.stringify(scans))

}

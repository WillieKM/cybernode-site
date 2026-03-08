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

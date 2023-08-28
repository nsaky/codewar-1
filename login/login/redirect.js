firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
    } else{
        window.location.replace('../Dashboard/dashboard.html');
    }
})

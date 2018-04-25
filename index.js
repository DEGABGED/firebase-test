var sid = document.getElementById("sid");
var submitBtn = document.getElementById("submit");
var id = 0;

var database = firebase.database();
var user_email = "fzqdlc69+firebase@gmail.com";
var ard_email = "smnorth-males@ardui.no";
var password = "sudsidy";

firebase.auth().signInWithEmailAndPassword(ard_email, password).catch(function (error) {
    window.alert(error.message);
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user.uid);
        database.ref('/userRewards/76CbXOr9QqfCU9QCkc6PrWTpOc22/').on('child_changed', function (s) {
            console.log(s.val());
        });
        database.ref('/userRewards/76CbXOr9QqfCU9QCkc6PrWTpOc22/').update({
            'rewards': 99
        });
    } else {
        // No user is signed in.
    }
});

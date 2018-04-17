var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCM8s8LG1maY7lZC8sDPft5n7gOaTpd5P8",
   authDomain: "productionapp-96303.firebaseapp.com",
   databaseURL: "https://productionapp-96303.firebaseio.com",
   projectId: "productionapp-96303",
   storageBucket: "productionapp-96303.appspot.com",
   messagingSenderId: "488585576112",
 };

 firebase.initializeApp(config);


 var signInBtn = document.getElementById('signInBtn');
 var signUpBtn = document.getElementById('signUpBtn');

 signUpBtn.addEventListener('click',function() {
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function(){
        alert("User created!!!!");
      }).catch(function(error){
        if(error != null){
          console.log(error.message);
          return;
        }
      });
    });




   signInBtn.addEventListener('click',function() {
      var emailField = document.getElementByid('email').value;
      var passwordField = document.getElementByid('password').value;
      firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function(){
        document.location.href = 'index.html';
        }).catch(function(error){
          if(error != null){
            console.log(error.message);
            return;
          }
        });
      });

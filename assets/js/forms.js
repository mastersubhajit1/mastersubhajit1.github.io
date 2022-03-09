
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCNdO6sJC-tN4wAZgGfRD-xIBIZpbH47Oc",
    authDomain: "oneup-8c6e3.firebaseapp.com",
    databaseURL: "https://oneup-8c6e3-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "oneup-8c6e3",
    storageBucket: "oneup-8c6e3.appspot.com",
    messagingSenderId: "466719084717",
    appId: "1:466719084717:web:d0a85a0efc5d28d711f624",
    measurementId: "G-DHJ7XLDVF1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
  
}).catch(function (error){
  var errorcode = error.code;
  var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  const promise = auth.signInWithEmailAndPassword(email,password);
  promise.catch( e => alert(e.msg));
  window.open("https://www.startups.courses","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
      name: getId('name'),
      email : getId('email'),
      mobile : getId('mobile'),
      password : getId('password')
  });
  alert("Successfully Signed Up");
  console.log("sent");
  document.getElementById('form').reset();
});
function  getId(id){
  return document.getElementById(id).value;
}
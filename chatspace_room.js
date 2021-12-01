const firebaseConfig = {
  apiKey: "AIzaSyCFy0wICTK1EfDR6EGK3ogsjpFQPPB4P9g",
  authDomain: "social-media-project-73b4e.firebaseapp.com",
  databaseURL: "https://social-media-project-73b4e-default-rtdb.firebaseio.com",
  projectId: "social-media-project-73b4e",
  storageBucket: "social-media-project-73b4e.appspot.com",
  messagingSenderId: "973613904705",
  appId: "1:973613904705:web:fdf4b3eba7a2bbdd8727c0",
  measurementId: "G-JMNDZM9LF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();





var firebaseConfig = {
  apiKey: "AIzaSyADh5Ni-uJL2PfS3Dn-GPEyfx2ZY1h2auE",
  authDomain: "project-94-6f52c.firebaseapp.com",
  databaseURL: "https://project-94-6f52c-default-rtdb.firebaseio.com",
  projectId: "project-94-6f52c",
  storageBucket: "project-94-6f52c.appspot.com",
  messagingSenderId: "778849994640",
  appId: "1:778849994640:web:ee90e1fe8bb908b7a85515"
};
firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";
  
  function addRoom(){
        room_name= document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update
        ({purpose: "adding room name"});
  
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - "+Room_names);
    row= "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
   });});}
getData();

redirectToRoomName(name);
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
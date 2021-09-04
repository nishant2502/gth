var firebaseConfig = {
  apiKey: "AIzaSyB9mFKeKzzeoMj9clWYFzoEw5pNiuoceLY",
  authDomain: "lets-chat-web-app-c3c8f.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-c3c8f-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-c3c8f",
  storageBucket: "lets-chat-web-app-c3c8f.appspot.com",
  messagingSenderId: "103447594120",
  appId: "1:103447594120:web:c55bdeac1cf4a232cf8b3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
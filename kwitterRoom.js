
const firebaseConfig = {
  apiKey: "AIzaSyCCtDmAPUpYDTTD9GD14iGX2yfBol789dQ",
  authDomain: "vamosconversar-797d0.firebaseapp.com",
  projectId:"vamosconversar-797d0",
  storageBucket: "vamosconversar-797d0.appspot.com",
  messagingSenderId: "438828286196",
  appId:"1:438828286196:web:c4cd0510ff78af92355ea1"
}; 
//ADICIONE SEUS LINKS FIREBASE
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

 

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName=document.getElementById("roomName").Value;

  firebase.database().ref("/").child(roomName).update({
    purpose:"adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName); 
  window.location = "kwitterPage.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

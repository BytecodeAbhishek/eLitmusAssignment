let btn = document.getElementById('claimBtn');
var button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
    // Action to be performed when Button 2 is clicked
    window.location.href = 'LeaderBoard.html';
  });
btn.onclick = function () {
    document.querySelector('img').src = 'images/img4.webp';
    
    setTimeout(function () {
        firebase.auth().signOut().then(() => {
            alert('You have been signed out. Thank you for playing this game');
            window.location.href = 'index.html';
        }).catch((error) => {

        });
    }, 5000);
}
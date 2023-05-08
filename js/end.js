let btn = document.getElementById('claimBtn');
btn.onclick = function () {
    document.querySelector('img').src = 'images/img4.webp';

    setTimeout(function () {
        firebase.auth().signOut().then(() => {
            alert('You have been signed out. Thank you for playing this game');
            window.location.href = 'LeaderBoard.html';
        }).catch((error) => {

        });
    }, 5000);
}
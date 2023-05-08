document.querySelector('a').onclick = function () {
    window.location.href = 'signup.html';
}

const firebaseConfig = {
    apiKey: "AIzaSyC1by5VWpon3Whxv2-sd2oVZXq0-M17G_A",
    authDomain: "puzzle-project-new.firebaseapp.com",
    projectId: "puzzle-project-new",
    storageBucket: "puzzle-project-new.appspot.com",
    messagingSenderId: "257248310085",
    appId: "1:257248310085:web:ed27ada8f28faed89f442c",
    databaseURL: "https://puzzle-project-new-default-rtdb.firebaseio.com"
  };

firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();8
    var password = document.getElementById('password').value.toString().trim();

    if(email=='admin@gmail.com'){
        if(password=='admin'){
            window.location.href = 'admin.html';
        }else{
            alert('wrong password');
        }
        return;
    }

    // create user
    loginUser(email, password);
}


// Save message to firebase
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Clear form
            document.getElementById('contactForm').reset();

            window.location.href='start.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}
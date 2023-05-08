document.querySelector('a').onclick = function(){
    window.location.href='index.html';  
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

// Reference credentials collection
var credRef = firebase.database().ref('credentials');

console.log('ref created');
// Listen for form submit
document.querySelector('button').addEventListener('click', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.toString().trim();
    var password = document.getElementById('password').value.toString().trim();
    var name = document.getElementById('name').value.toString().trim();
    console.log('data fetched...save message called');

    // create user
    createUser(email, password, name);
}


// Save message to firebase
function createUser(email, password, name) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            // Show alert
            document.querySelector('.alert').style.display = 'block';

            // Hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector('.alert').style.display = 'none';
            }, 5000);

            // Clear form
            document.getElementById('contactForm').reset();

            //upload credentials
            var newMessageRef = credRef.push();
            newMessageRef.set({
                email: email,
                password: password
            });

            //upload name and email
            uploadData(email,name);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}


function uploadData(email,name){
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid).set({
                name:name,
                email:email
            })

        } else {
            alert('data not uploaded');
        }
    });
}
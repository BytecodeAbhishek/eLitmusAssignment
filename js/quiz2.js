let input = document.querySelector('input');
let btn = document.querySelector('button');

let correct = 0, total = 0;
let accuracy = 0.0;

btn.onclick = function () {

    var ok = false;

    let answerString = input.value.toString().toLowerCase();
    total++;
    if (answerString.length == 0) {
        alert('Invalid input');
    }
    else if (answerString == "10".toLowerCase().trim()) {
        ok = true;
        correct++;
    } else {
        alert('Oops! wrong answer');
    }
    accuracy = (correct / total) * 100;
    uploadData(accuracy, ok);

}


function uploadData(accuracy, ok) {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid + '/clue2').set({
                accuracy: accuracy
            })

            if (ok) {
                window.location.href = ('quiz3.html');
            }
        } else {
            alert('data not uploaded');
        }
    });
}
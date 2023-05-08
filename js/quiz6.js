let btn1 = document.getElementById('first-btn');
let btn2 = document.getElementById('second-btn');
let input1 = document.getElementById('first-input');
let input2 = document.getElementById('second-input');

let total=0,correct=0;

btn2.onclick = function(){
    let answerString = input2.value.toString().toLowerCase().trim();
    total++;
    if(answerString.length==0){
        alert('Invalid input');
    }
    else if(answerString=="7"){
        correct++;
        document.getElementById('clickhere').style.visibility='visible';
    }else{
        alert('wrong answer');
    }
    accuracy = (correct/total)*100;
    console.log(accuracy);

    uploadData(accuracy);
}

btn1.onclick = function(){
    let answerString = input1.value.toString().toLowerCase().trim();
    total++;
    var ok = false;

    if(answerString.length==0){
        alert('Invalid input');
    }
    else if(answerString=="flufy"){
        correct++;
        ok = true;
    }else{
        alert('wrong answer');
    }
    accuracy = (correct/total)*100;
    console.log(accuracy);
    
    uploadData(accuracy,ok);
}

function uploadData(accuracy,ok) {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            var uid = user.uid;
            await firebase.database().ref('data/' + uid + '/clue6').set({
                accuracy: accuracy
            })

            if(ok){
                window.location.href = 'end.html';
            }

        } else {
            alert('data not uploaded');
        }
    });
}
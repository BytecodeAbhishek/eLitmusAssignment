window.onload = async () => {
    let obj = await firebase.database().ref('data');
    let table = document.getElementById('table');

    obj.on('value', (snapshot) => {
        let data = snapshot.val();

        for (uid in data) {
            let currUserObj = firebase.database().ref('data/'+uid);            
            var newTr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML=uid;

            console.log(uid);
            newTr.appendChild(td);

            currUserObj.on('value',(snapshot)=>{
                let currUserData = snapshot.val();

                var td = document.createElement('td');
                td.innerHTML = currUserData.name;
                newTr.appendChild(td);

                var td = document.createElement('td');
                td.innerHTML = currUserData.email;
                newTr.appendChild(td);

                let count=0;

                for(clue in currUserData){
                    if(count==6){
                        continue;
                    }    
                    let clueDataObj = firebase.database().ref('data/'+uid+'/'+clue);

                    clueDataObj.on('value',(snapshot)=>{
                        let currClueData = snapshot.val();
                        var accuracy = currClueData.accuracy;

                        var td = document.createElement('td');
                        td.innerHTML=accuracy;
                        newTr.appendChild(td);
                    })
                    count++;

                }
               
            })
            table.appendChild(newTr);
        }

    })
}
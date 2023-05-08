let c1 = 0, c2 = 0, c3 = 0, c4 = 0;
let btnArray = document.querySelectorAll('a');
let btn1 = btnArray[0], btn2 = btnArray[1], btn3 = btnArray[2], btn4 = btnArray[3];

btn1.onclick = function () {
    c1++;
    clicked();
}
btn2.onclick = function () {
    c2++;
    clicked();
}
btn3.onclick = function () {
    c3++;
    clicked();
}
btn4.onclick = function () {
    c4++;
    clicked();
}


clicked = () => {
    if (c1 && c2 && c3 && c4) {
        document.getElementById('show').style.visibility = 'visible';
    }
    console.log(c1, c2, c3, c4);
}

window.onload = function () {

    slider1()
}

var c = 3000;
function slider1() {
    document.getElementById('comerci').src = './img/1.jpg';
    setTimeout('slider2()', c);
}
function slider2() {
    document.getElementById('comerci').src = './img/2.jpg';
    setTimeout('slider3()', c);
}
function slider3() {
    document.getElementById('comerci').src = './img/3.jpg';
    setTimeout('slider4()', c);
}
function slider4() {
    document.getElementById('comerci').src = './img/4.jpg';
    setTimeout('slider5()', c);
}
function slider5() {
    document.getElementById('comerci').src = './img/5.png';
    setTimeout('slider1()', c);
}


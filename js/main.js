const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.ul_nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

var progress = document.getElementById('pBar');
var tHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    var progressHeight = (window.pageYOffset / tHeight) * 100;
    progress.style.height = progressHeight + "%";
}
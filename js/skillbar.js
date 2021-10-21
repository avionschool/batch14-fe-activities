const progText = document.querySelectorAll(".progText");
const progSkills = document.querySelectorAll(".progSkills");
const container = document.querySelectorAll(".container");

let bol = false;

window.addEventListener("scroll", function(){
    if(pageYOffset > container.offsetTop - 500 && bol === false) {
        for(let i = 0; i < progText.length; i++) {
            progText[i].innerText = 0;
            count = 0;
            progSkills[i].style.bottom = "100%";
            progSkills[i].style.bottom = progText[i].dataset.count - 100 + "%";

            function updCount() {
                target = parseInt(progText[i].dataset.count);

                if (count < target) {
                    count++;
                    progText[i].innerText = count;
                    setTimeout(updCount, 50);
                }
                else {
                    progText[i].innerText = target + "%";
                }
            }
            updCount();
            bol = true;
        };
    };
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let bar = document.getElementById("header")
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("git").style.opacity = 0;
        document.getElementById("eye1").style.opacity = 1;
        document.getElementById("eye2").style.opacity = 1;
        document.getElementById("brow1").style.opacity = 1;
        document.getElementById("brow2").style.opacity = 1;
        document.getElementById("nose").style.opacity = 1;
        document.getElementById("hid").style.opacity = 0;
    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        document.getElementById("git").style.opacity = 1;
        document.getElementById("eye1").style.opacity = 0;
        document.getElementById("eye2").style.opacity = 0;
        document.getElementById("brow1").style.opacity = 0;
        document.getElementById("brow2").style.opacity = 0;
        document.getElementById("nose").style.opacity = 0;
        document.getElementById("hid").style.opacity = 1;
    }
}

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

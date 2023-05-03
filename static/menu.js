function openNav() {
    document.getElementById("myNav").setAttribute("class", "closing");
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.borderRadius = "0 0 0 0";
}

function closeNav() {
    document.getElementById("myNav").setAttribute("class", "overlay");
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.borderRadius = "50% 50% 0 0/100% 100% 0 0";
}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function reset() {
    delay(500).then(() => document.getElementById("myNav").style.borderRadius = "0 0 100% 100%");
}

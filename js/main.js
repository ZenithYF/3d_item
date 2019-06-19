var room = document.getElementsByClassName('room')[0];
var box = document.getElementsByClassName('chosen')[0];
var rolling = true;

HTMLElement.prototype.__defineGetter__("currentStyle", function() {
    return this.ownerDocument.defaultView.getComputedStyle(this, null);
});

var color;

function test(e) {
    let number = e.innerHTML;
    color = e.currentStyle.backgroundColor;
    console.log(e.currentStyle.backgroundColor)
    if (rolling) {
        room.style.webkitAnimationPlayState = "paused";
        rolling = false;
        show(number)
    } else {
        room.style.webkitAnimationPlayState = "running";
        box.style.display = 'none'
        rolling = true;
    }
}

var show = function(a) {
    box.innerHTML = a;
    box.style.display = 'block'
    box.style.background = color;
}
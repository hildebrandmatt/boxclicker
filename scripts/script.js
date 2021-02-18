document.getElementById("button1").style.backgroundColor = "#" + randomColor()

function splitButton(elmnt) {
    var btn = document.createElement("button")
    var wrapper = document.createElement("div")
    var h = elmnt.offsetHeight
    var w = elmnt.offsetWidth
    if (h > w){
        wrapper.classList.add("divCol")
    } else {
        wrapper.classList.add("divRow")
    }
    btn.onclick = function() {
        splitButton(this)
    }

    btn.style.backgroundColor = "#" + randomColor()
    elmnt.parentElement.insertBefore(wrapper, elmnt)
    wrapper.appendChild(elmnt)
    elmnt.parentElement.appendChild(btn)
}

function randomColor() {
    const rangeSize = 100
    const parts = [
        Math.floor(Math.random()*256),
        Math.floor(Math.random()*rangeSize),
        Math.floor(Math.random()*rangeSize) + 256-rangeSize
    ].sort( (a,b) => Math.random() < 0.5)

    return parts.map( p => ('0' + p.toString(16)).substr(-2) ).join('')
}
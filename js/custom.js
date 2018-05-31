function toggleHamburger() {
    var element = document.querySelector(".hamburger-box");
    element.classList.toggle("is-active");
}

function checkregex() {
    var r = document.getElementById("regex").value;
    var flags = document.getElementById("flags").value;
    var text = document.getElementById("text").value;

    var regex = new RegExp(r, flags);

    var isAMatch = regex.test(text);

    if(isAMatch) {
        var matches = regex.exec(text);
        document.getElementById("output").innerHTML = "<b>Result</b>: <i>" + isAMatch.toString() + "</i>; <b>Matches</b>: <i>" + matches.join(", ") + "</i>";
    } else {
        document.getElementById("output").innerHTML = "<b>Result</b>: " + isAMatch.toString();
    }
}
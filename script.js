document.getElementById("showMessageBtn").onclick = function(event) {
    event.preventDefault(); 
    document.getElementById("mensaje").style.display = "block";
};

document.getElementById("closeBtn").onclick = function() {
    document.getElementById("mensaje").style.display = "none";
};

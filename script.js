var name = "Henry Paler";
document.getElementById("text").innerHTML = name;
console.log(name);
alert(name);

function getInnerText() {
    alert(document.getElementById("example").innerText);
}
function getInnerHTML() {
    alert(document.getElementById("example").innerHTML);
}
function getTextContent() {
    alert(document.getElementById("example").textContent);
}
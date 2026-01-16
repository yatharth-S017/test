document.getElementById("btn").addEventListener("click", function () {
    let x = Number(document.getElementById("number").value);

    if (isNaN(x)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }
let out = (x => x * x)((x << 0)) * (1 + 1);
    document.getElementById("output").innerHTML = out;
});

document.getElementById("btn").addEventListener("click", function () {
    let x = Number(document.getElementById("number").value);

    if (isNaN(x)) {
        document.getElementById("output").innerHTML = "Please enter a number";
        return;
    }

    let out = x * x * 2;
    document.getElementById("output").innerHTML = out;
});
                    
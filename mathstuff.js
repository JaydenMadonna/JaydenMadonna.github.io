

    function reset() {
        document.getElementById("output").innerHTML = "";
    }
    function doMath() {
        var num1 = document.getElementById("num1").value;
        num1 = Number(num1);
        var num2 = document.getElementById("num2").value;
        num2 = Number(num2)

        var add = num1 + num2;
        var sub = num1 - num2;
        var mul = num1 * num2;
        var div = num1 / num2;
        var mod = num1 % num2;
        var pow = num1 ** num2;
        var sqn1 = math.sqrt(num1);
        var sqn2 = math.sqrt(num2);


    }

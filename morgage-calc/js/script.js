function Calc() {
    var principal = document.getElementById("principal").value;
    var loan = document.getElementById("loan").value;
    var interest = document.getElementById("interest").value;
    var percentagerate = interest / 1200;
    var length = 12* loan;
    var monthly = (principal * percentagerate) / (1- (Math.pow((1 + percentagerate) , length * -1)));
    monthly = monthly.toFixed(2)
    


}document.getElementById("out").value = monthly.value;
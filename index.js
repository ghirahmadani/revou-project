var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var beratBadan = document.getElementById("berat-badan");
var tinggiBadan = document.getElementById("tinggi-badan");
var usia = document.getElementById("usia");

var form = document.getElementById("form");

function validateForm(){
    if((pria.checked==false && wanita.checked==false) || usia.value == '' || beratBadan.value=='' || tinggiBadan.value ==''){
        alert("Fields empty!");
        document.getElementById("submit").removeEventListener("click", count);
    }
    else{
        count;
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

function count(){
    var temp=[usia.value, beratBadan.value, tinggiBadan.value];
    if(pria.checked){
        temp.push("Pria");
    }
    else if(wanita.checked){
        temp.push("Wanita");
    }
    form.reset();

    //Count BMI
    var final = Number(temp[1])/(((Number(temp[2])/100)*(Number(temp[2])/100)));

    //Category BMI
    var result = "";
    if (final < 18.5) {
        result = "Underweight";
    } else if (18.5 <= final && final <= 24.9) {
        result = "Healthy";
    } else if (25 <= final && final <= 29.9) {
        result = "Overweight";
    } else if (30 <= final) {
        result = "Obese";
    }

    //console.log(final);

    var finalFloat = parseFloat(final).toFixed(2);

    document.getElementById("submit").removeEventListener("click", count);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);

    //Inner HTML
    document.getElementById("result").innerHTML = result + " BMI: " + finalFloat;
}

document.getElementById("submit").addEventListener("click", count);
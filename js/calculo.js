var div = document.getElementById("resp");

function codigo(){
    let x = parseInt (document.getElementById("i_c").value);
    let op = document.getElementById("escala").value;
    text = "";

    if (op == "f"){
        text = `<p>Conversão de Celsius para Fahrenheit é : ${x * 1.8 + 32 } </p>`;

    }

    else{text = `<p>Conversão de Celsius para Kelvin é : ${x + 273.15 }</p>`;}
    
    div.innerHTML = text; 

}

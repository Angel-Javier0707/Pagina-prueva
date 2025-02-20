const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn2txt = document.querySelector("#btn2 #move");
let numero = 1;


btn2.addEventListener("click" , () => {

 if (btn2txt.innerHTML == "1") {
    const content1 = document.querySelector(".content1");
    content1.classList.add("movimientoS");
    content1.classList.remove("movimientoA");
    btn2.classList.add("activa");
    numero++;

    if (numero > 2) {
        numero = 2;
    }

    btn2txt.innerHTML = numero;
 } else if (btn2txt.innerHTML == "2") {
    const content1 = document.querySelector(".content1");
    content1.classList.remove("movimientoS");
    content1.classList.remove("movimientoAA");
    content1.classList.remove("movimientoA");
    content1.classList.add("movimientoSS");
    btn2.classList.add("activa");
   //3 
    numero++;
    btn2txt.innerHTML = numero;
 }

});

btn2.addEventListener("blur" , () => {
    btn2.classList.toggle("activa");
}) ;

btn1.addEventListener("click" , () => {

    if (btn2txt.innerHTML == "2") {
        const content1 = document.querySelector(".content1");
        content1.classList.remove("movimientoS");
        content1.classList.remove("movimientoAA");
        content1.classList.add("movimientoA");
        btn1.classList.add("activa");
        numero--;

        if (numero < 0) {
            numero=1;
        }
        btn2txt.innerHTML = numero;

     } else if (btn2txt.innerHTML == "3") {
        numero -= 1;
        if (numero < 2) {
            numero = 2;
        }
      
        const content1 = document.querySelector(".content1");
        content1.classList.remove("movimientoS");
        content1.classList.remove("movimientoSS");
        content1.classList.remove("movimientoA");
        content1.classList.add("movimientoAA");
        btn1.classList.add("activa");
        btn2txt.innerHTML = numero;
     }
  
});

btn1.addEventListener("blur" , () => {
    btn1.classList.toggle("activa");
}) ;

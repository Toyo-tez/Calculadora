const pantallita = document.getElementById(pantallita);

function apantallita(input){
    display.value += input;

}

function limpiarpantalla(){
    display.value = "";
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error de syntaxis"
    
}
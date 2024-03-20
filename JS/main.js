const pantallita = document.getElementById("pantallita");

function apantallita(input){
    pantallita.value += input;

}

function limpiarpantalla(){
    pantallita.value = "";
}

function calcular(){
    try{
        pantallita.value = eval(pantallita.value);
    }
    catch(error){
        pantallita.value = "Error de syntaxis"
    
}
}
import * as rls from  "readline-sync";

let Practica: number, Problema: number, Teoria: number, Resultado: number;
let nombre: string = "Hola";

while(nombre != ""){
    nombre= rls.question("Ingrese su nombre: ");
    if (nombre != ""){
        Practica = rls.questionInt("Ingrese la nota practica: ");
        if(Practica > 0 && Practica <= 10){
            Problema = rls.questionInt("Ingrese la nota problemas: ");
            if (Problema > 0 && Problema <= 10){
                Teoria = rls.questionInt("Ingrese la nota teoria: ");
                if (Teoria > 0 && Problema <= 10){
                   
                    Resultado = (Practica * 10) / 100 + (Problema * 40) / 100 + (Teoria * 50) / 100;
                
                    console.log("La nota final de", nombre, "es" , Resultado);
                }
            }
        }
    }
}

//Calculo de média


function obterMedia( nota1, nota2, nota3){
    
    if  ((nota1 >= 0 && nota1 <= 10) && 
         (nota2 >= 0 && nota2 <= 10) && 
         (nota3 >= 0 && nota3 <= 10)){
            
        let media = (nota1 + nota2 + nota3) / 3

        if (media >= 7){
            console.log ('Aprovado');
        } else if (media > 5 && media < 7) {
            console.log ("Em recuperação");
        } else {
            console.log ('Reprovado');
        } 
    
    } else {
            console.log ('Notas Inválidas');
        }
    }

obterMedia (5, 5, 6);
obterMedia (-1,15,-1);
obterMedia (10, 10, 10);
obterMedia (1, 2, 4);
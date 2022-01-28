let dataAtual = new Date ()

console.log ("Informar data do evento:")

let dataEvento = new Date ("01/29/2022")

if (dataEvento > dataAtual) {
    console.log ("Data do evento válida")
} else {
 console.log ("Data inválida")   
}

let idadeUsuario = 19

console.log ("Informe sua idade para prosseguir o cadastro")

if (idadeUsuario >= 18) {
    console.log ("Cadastro de usuário permitido")
} else {
    console.log ("Cadastro de usuário não permitido")
}

//Listar  participantes e palestrantes por evento ( descobrir forma de mostrar)
let numeroParicipantes = ["JOTA","KAKA","MARCOS"]
for(contador = 0; contador < numeroParicipantes.length; contador++){
    console.log (numeroParicipantes[contador])
}



let quantidadeParticipantes = 99

if (quantidadeParticipantes < 100) {
    console.log ("Cadastro permitido")
} else {
    console.log ("ERRO: Cadastro excedeu o limite")
}
function calculadora(){
    const operacao  = Number(prompt('escolha uma operacao:\n 1-soma(+)\n 2-subtração(-)\n 3-multipliçaçao(*)\n 4-divisao real(/)\n 5-divisao inteira(%)\n 6-potenciacao(**)\n'));

    

    let n1= Number(prompt('insira o primeiro valor:'));
    let n2= Number(prompt('insira o segundo valor'));
    let resultado;

    function soma(){
        resultado=n1+n2;
        alert(`${n1}+${n2}=${resultado}`)
        novaOperacao()
    }

    function subtracao(){
        resultado=n1-n2;
        alert(`${n1}-${n2}=${resultado}`)
        novaOperacao()
    }
    function multiplicacao(){
        resultado=n1*n2;
        alert(`${n1}*${n2}=${resultado}`)
        novaOperacao()
    }
    function divisaoReal(){
        resultado=n1/n2;
        alert(`${n1}/${n2}=${resultado}`)
        novaOperacao()
    }
    function divisaoInteira(){
        resultado=n1%n2;
        alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao()
    }
    function potenciação(){
        resultado=n1**n2;
        alert(`${n1}elevado a ${n2}ª é igual a ${resultado}`)
        novaOperacao()
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1-sim\n 2-não ');
        if(opcao==1){
            calculadora();
        }else if (opcao == 2){
            alert('Até mais!')
            
        } else{
            alert('Digite uma opção válida')
            novaOperacao()
        }

    }
    if(operacao==1) {
        soma();
    }else if(operacao==2){
        subtracao();
    }else if(operação==3){
        multiplicacao();
    }else if(operacao==4){
        divisaoReal();
    }else if(operacao==5){
        divisaoInteira()
    }else if(operacao==6){
        potenciação();
    }
}
calculadora();
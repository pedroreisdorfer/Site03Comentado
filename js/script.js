// Apresentação Modal
setTimeout(ApresentarModal, 5000); //assim nosso modal aparece após 5 segundos
function ApresentarModal(){
    var modal = document.querySelector(".modal"); // criada a variável para se ter acesso mais rápido ao modal. No caso a div que engloba toda a caixinha de Ofertas de 10% está na div e ela é chamada por sua class, que no caso é .modal

    if(modal != null) // seria: "se o modal for diferente de nulo, ou seja, tem um valor, então a operação é feita.
    {
        modal.style.display = "block"; // display block faz com que o elemento HTML seja renderizado como bloco

        document
        .querySelector(".modal a") //selecionei o link do modal, que no caso é o X
        .addEventListener("click", function() { // adicionei evento do click nesse link X
            modal.style.display = "none"; //então aqui eu acesso O limodal e, ao dar o click, minha functtion anônima faz com que o display desapareça, ou seja, display none
        }); // ao clicar, a função que ocorre é o fechamento do modal, por isso display: none, ou seja, display fecha
    }    
} 

// Validação Modal (Página Inicial)
if (document.forms["modal_form"] != undefined ) { //primeiro acessamos o nosso formulário. Caso ele for diferente de undefined
    //validação
    var form = document.forms["modal_form"]; // só cria essa variável quando existir o formulário

    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keyup", function() { /* ou seja, quando ele começar a digitar a função anônima vai fazer com que:*/
        form.email.className = ""; /* vou remover sua classe , que é a nao_valido */
        document.querySelector("span.nao_valido").style.display = "none"; /* vou desaparecer com a mensagem em vermelho não válido*/
    })
}

function validarFormModal(evt) { // essa operação vai ter um parâmetro de entrada, que será enviado pelo addEventListener submit
    var form = document.forms["modal_form"];

    var inputEmail = form.email; // declaração de variável elemento input email
    var valorEmail = form.email.value; // aqui estamos declarando uma variável que recebe o valor do email que está dentro do form. Nesse caso, se trata de um valor no tipo texto
    // obs.: existem diversas funções para um valor de type text

    var posicaoArroba = valorEmail.indexOf("@");

    if ( !ValidarEmail(valorEmail)) {
        /* se for inválido*/
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display = "block"; /* seleciona o span e depois o css, renderizando o elemento após ser colocado uma opção de email inválido. Assim vai aparecer abaixo da caixinha de preencher o email "E-mail inválido*/
        evt.preventDefault(); // ou seja, quando o email for inválido, não é para enviar o formulário
    }
}

    // validação Fale Conosco
    if (document.forms["form_contato"] != undefined ) {
        var form = document.forms["form_contato"];
        
        form.addEventListener("submit", function(evt){
            var formValido = true;

            if(!NaoVazio(form.Nome_Completo.value)){ // quando o campo não for vazio
                form.Nome_Completo.className = "nao_valido";
                formValido = false;
            }
            if(!NaoVazio(form.Telefone.value)){ // quando o campo não for vazio
                form.Telefone.className = "nao_valido";
                formValido = false;
            }
            if(!NaoVazio(form.Mensagem.value)){ // quando o campo não for vazio
                form.Mensagem.className = "nao_valido";
                formValido = false;
            }

            if(!ValidarEmail(form.Email.value)){ 
                form.Email.className = "nao_valido";
                formValido = false;
            }

            if (!formValido){
                evt.preventDefault(); // ou seja, quando o email for inválido, não é para enviar o formulário
            }  

        });
                               //aqui estou pegando todos os input do form de nome form_contato de tipo text
        var inputs = document.querySelectorAll("form[name=form_contato] input[type=text"); 
        
        for (var i=0; i < inputs.length; i++){ //passando em cada um dos inputs
            inputs[i].addEventListener("keypress", function(){ // ao pressionar o campo do input para digitar, a function faz com que ele seja retirada a linha vermelha
                this.className = ""; // this aqui é o elemento que estamos passando, no caso o input. Deixando className "", eu deixo o mesmo sem classe, vazio //
            });
        }
                                             //aqui estou selecionando a parte da mensagem que será enviada
        var textarea = document.querySelector("form[name=form_contato] textarea");

        textarea.addEventListener("keyup", function(){ //  que ocorre após ser pressionado a tecla
            this.className = ""; // ao cemeçar a digitar nesse campo de textarea, ela fica vazia, ou seja, sai a linha vermelha
            document.querySelector(".texto").innerHTML = "Caractere(s)" + this.value.length; //pega o valor do this(textarea) e conta seus caracteres
                                            //inenrHTML retorna os caracteres de um span, ou div ou noembed
        })

    }

    // funções
    function ValidarEmail(valorEmail) { 
        
        if ( /* se estiver tudo ok o email vai ser válido*/
            
            valorEmail != "" &&
            valorEmail.indexOf('@') > 3 &&
            valorEmail.lastIndexOf(".") > posicaoArroba 
                 

            ){
            return true;
        } else {
            return false;
        }                
    }   

    function NaoVazio(texto) {
        if(texto.trim().length > 0) { // trim é uma função que retorna um texto(strinf no caso). trim().length => aqui estou pegando o tamanho de um campo sem espaço
            return true; //se for maior que zero, significa que nosso campo não está vazio
        } else {
            return false;
        }
    }


/*function ValidarEmail(valorEmail) { 
        var usuario = valorEmail.substring(0,valorEmail.value.indexOf("@"));
        var dominio = valorEmail.substring(valorEmail.value.indexOf("@") + 1, valorEmail.value.lenght);

        if ( /* se estiver tudo ok o email vai ser válido*/
            
           /* (usuario.lenght >=1) &&
            (dominio.lenght >=3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") !=- 1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.lenght -1)

            ){
            return true;
        } else {
            return false;
        }                
    } */
        
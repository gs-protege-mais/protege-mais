// navbar

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/fechar.png";
    }
}


// faq

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        const arrow = accordion.querySelector('.arrow');

        body.classList.toggle('active');
        arrow.classList.toggle('rotate');
    })
})

// contato

function validarContato() {
    let valido = true;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroTelefone = document.getElementById('erroTelefone');
    const erroMensagem = document.getElementById('erroMensagem');

    document.querySelectorAll(".erro").forEach(span => span.textContent = "");

    if (nome.value.trim() === '') {
        erroNome.textContent = 'Por favor, preencha o nome.';
        valido = false;
    }

    if (email.value.trim() === '') {
        erroEmail.textContent = 'Por favor, preencha o email.';
        valido = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        erroEmail.textContent = 'Digite um email válido.';
        valido = false;
    }

    if (telefone.value.trim() === '') {
        erroTelefone.textContent = 'Por favor, preencha o telefone.';
        valido = false;
    }

    if (mensagem.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, escreva sua mensagem.';
        valido = false;
    }

    if (valido) {
        alert('Pergunta enviada com sucesso!');
        document.getElementById('form-duvida').submit();
    }
}



// Form

function validarEtapa1() {
    let valido = true;

    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const endereco = document.getElementById('endereco');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const qtdPessoas = document.getElementById('qtdPessoas');

    const erroNome = document.getElementById('erroNome');
    const erroCPF = document.getElementById('erroCPF');
    const erroEndereco = document.getElementById('erroEndereco');
    const erroTelefone = document.getElementById('erroTelefone');
    const erroEmail = document.getElementById('erroEmail');
    const erroQtdPessoas = document.getElementById('erroQtdPessoas');

    document.querySelectorAll(".erro").forEach(span => span.textContent = "");


    if (nome.value.trim() === '') {
        erroNome.textContent = 'Por favor, preencha seu nome.';
        valido = false;
    }

    if (cpf.value.trim() === '') {
        erroCPF.textContent = 'Por favor, preencha seu CPF.';
        valido = false;
    }

    if (endereco.value.trim() === '') {
        erroEndereco.textContent = 'Por favor, preencha seu endereço.';
        valido = false;
    }

    if (telefone.value.trim() === '') {
        erroTelefone.textContent = 'Por favor, preencha o telefone.';
        valido = false;
    }

    if (email.value.trim() === '') {
        erroEmail.textContent = 'Por favor, preencha o email.';
        valido = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        erroEmail.textContent = 'Digite um email válido.';
        valido = false;
    }

    if (qtdPessoas.value.trim() === '') {
        erroQtdPessoas.textContent = 'Por favor, informe a quantidade de pessoas.';
        valido = false;
    }

    if (valido) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    }
}


function validarEtapa2() {
    let valido = true;

    const nomePessoa = document.getElementById('nomePessoa');
    const cpfPessoa = document.getElementById('cpfPessoa');

    const erronomePessoa = document.getElementById('erroNomePessoa');
    const erroCPFPessoa = document.getElementById('erroCPFPessoa');

    document.querySelectorAll('.erro').forEach(span => span.textContent = '');

    const checkboxesCondicao = document.querySelectorAll('input[name="condicaoPessoa"]');
    let algumaCondicaoSelecionada = false;

    checkboxesCondicao.forEach(cb => {
        if (cb.checked) {
            algumaCondicaoSelecionada = true;
        }
    });

    if (!algumaCondicaoSelecionada) {
        document.getElementById('erroCondicaoPessoa').textContent = 'Selecione pelo menos uma condição';
        valido = false;
    }


    if (nomePessoa.value.trim() === '') {
        erronomePessoa.textContent = 'Por favor, preencha o nome.';
        valido = false;
    }

    if (cpfPessoa.value.trim() === '') {
        erroCPFPessoa.textContent = 'Por favor, preencha o CPF.';
        valido = false;
    }

    const radiosAreaRisco = document.getElementsByName('areaRisco');
    let areaRiscoSelecionado = false;

    for (let radio of radiosAreaRisco) {
        if (radio.checked) {
            areaRiscoSelecionado = true;
            break;
        }
    }

    if (!areaRiscoSelecionado) {
        document.getElementById('erroAreaRisco').textContent = 'Por favor, selecione uma opção.';
        valido = false;
    }

    const checkboxesNecessidade = document.querySelectorAll('input[name="necessidadePessoa"]');
    let algumaNecessidadeMarcada = false;

    checkboxesNecessidade.forEach(cb => {
        if (cb.checked) {
            algumaNecessidadeMarcada = true;
        }
    });

    if (!algumaNecessidadeMarcada) {
        document.getElementById('erroNecessidade').textContent = 'Selecione pelo menos uma necessidade.';
        valido = false;
    }

    if (valido) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('validarCadastro').submit();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const btnContato = document.getElementById('validarContato');
    if (btnContato) {
        btnContato.addEventListener('click', validarContato);
    }

    const btnEtapa1 = document.getElementById('btnProximo');
    if (btnEtapa1) {
        btnEtapa1.addEventListener('click', validarEtapa1);
    }

    const btnEtapa2 = document.getElementById('btnEnviarEtapa2');
    if (btnEtapa2) {
        btnEtapa2.addEventListener('click', validarEtapa2);
    }
});



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


// etapas formulário

function mostrarEtapa(etapa) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none');

    document.getElementById('step' + etapa).style.display = 'block';
}



// contato

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('enviarContato').addEventListener('click', validarContato);
});

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

    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroTelefone.textContent = '';
    erroMensagem.textContent = '';

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



// function validarCadastro(){
//     const formulario = document.getElementById('meuFormulario');
//     const checkboxes = document.querySelectorAll('input[name="condicaoPessoa"]');
//     const mensagemErro = document.getElementById('mensagemErro');

//     formulario.addEventListener('submit', function(evento) {
//         let peloMenosUmSelecionado = false;

//         checkboxes.forEach((checkbox) => {
//             if (checkbox.checked) {
//                 peloMenosUmSelecionado = true;
//             }
//         });

//         if (!peloMenosUmSelecionado) {
//             evento.preventDefault(); // Impede envio
//             mensagemErro.style.display = 'block';
//         } else {
//             mensagemErro.style.display = 'none'; // Esconde erro se estiver tudo certo
//         }
//     });


// }
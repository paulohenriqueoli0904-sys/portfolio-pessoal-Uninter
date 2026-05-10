document.addEventListener('DOMContentLoaded', () => {
    // Faz com que o script só rode depois de carregar o Html
    const formulario = document.getElementById('form-contato');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Impede o recarregamento da página
            event.preventDefault();

            // Pega o nome (ou usa "Visitante" se o campo estiver vazio)
            const nomeInput = document.getElementById('nome');
            const nomeUsuario = nomeInput ? nomeInput.value : "Visitante";

            // Exibe o alerta de que a mensagem do usuário foi enviada.
            alert("Obrigado, " + nomeUsuario + "! Sua mensagem foi enviada com sucesso.");

            // Limpa o formulário
            formulario.reset();
        });
    } else {
        console.error("Erro: Não encontrei um formulário com id='form-contato'");
    }
});
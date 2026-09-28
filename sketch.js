document.addEventListener("DOMContentLoaded", () => {

    // Elementos do modal
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close-btn");

    // Conteúdo dos modais
    const informacoes = [
        {
            titulo: "Segurança do voto digital",
            texto: "A urna eletrônica brasileira funciona de forma isolada, sem conexão com a internet ou redes externas. Isso impede invasões remotas e reduz significativamente riscos de ataques cibernéticos. Além disso, o sistema passa por testes públicos de segurança promovidos pelo Tribunal Superior Eleitoral (TSE), permitindo que especialistas avaliem e proponham melhorias."
        },
        {
            titulo: "Boletim de Urna e transparência",
            texto: "Ao final da votação, cada urna imprime o Boletim de Urna (BU), contendo os resultados daquela seção eleitoral. Esse documento é público e pode ser conferido por fiscais, partidos políticos, jornalistas e cidadãos. Posteriormente, os dados transmitidos devem corresponder exatamente ao conteúdo registrado no BU, garantindo a possibilidade de auditoria."
        }
    ];

    // Botões "Saiba mais"
    const botoesModal = document.querySelectorAll(".btn-modal");

    botoesModal.forEach((botao, indice) => {
        botao.addEventListener("click", () => {

            modalTitle.textContent = informacoes[indice].titulo;
            modalText.textContent = informacoes[indice].texto;

            modal.classList.remove("hidden");
        });
    });

    // Fechar modal pelo X
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Fechar modal clicando fora da caixa
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Botões de curtida
    const botoesLike = document.querySelectorAll(".btn-like");

    botoesLike.forEach((botao) => {
        botao.addEventListener("click", () => {

            let likes = parseInt(botao.dataset.likes);
            likes++;

            botao.dataset.likes = likes;

            const contador = botao.querySelector(".like-count");
            contador.textContent = likes;
        });
    });

});


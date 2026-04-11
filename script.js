const projetos = [
    {
        nome: "Projeto 1 Alerta Comunidade",
        descricao: "Site simples em HTML",
        link: "#"
    },
    {
        nome: "Projeto 2 calculadora",
        descricao: "Calculadora em JavaScript",
        link: "#"
    },
    {
        nome: "Projeto 3 meu portifolio",
        descricao: "Portfólio pessoal",
        link: "#"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    lista.appendChild(div);
});
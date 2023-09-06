/*Animação de revelação CSS*/

window.sr = ScrollReveal({ reset: true });

sr.reveal('.slider', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 1000
});

sr.reveal('.texto-1', { duration: 1500 });

sr.reveal('.white-container', {
    duration: 1000
});

sr.reveal('.white-container1', {
    duration: 1000
});

// Sobre nossa equipe
const reviews = [
    {
        id: 1,
        name: 'Alfredo Pinto',
        img: src = "./images/Foto-alfredo.jpeg",
        text: 'Profissional com graduação em Economia pela USP e mestrado em internacionalização de empresas pela Univali, ampla experiência em multinacionais e consultoria de comércio exterior. Fluente em inglês e espanhol, promoveu produtos brasileiros em feiras e viagens de negócios a 35 países. Passagens por empresas como British American Tobacco, BankBoston, Tommy Hilfiger, além de monitoria no programa Peiex da ApexBrasil.',
    },
    {
        id: 2,
        name: 'Araceli Buzzi',
        img: src = "./images/foto-araceli.jpeg",
        text: 'Graduada em Comércio Exterior pela Univali, com MBA em Gestão de Negócios Internacionais pela FGV/Sociesc, e Gestão de Empresas pela USP/Esalq, com inglês fluente, possui 20 anos de experiência na gestão de operações de exportação de carnes congeladas para diversos países. Atuou por 6 anos na empresa Seara Alimentos S/A e por 14 anos na LP Export DMCC.',
    },
    {
        id: 3,
        name: 'Luciane Boettger',
        img: src = "./images/foto-luciane.jpeg",
        text: 'Graduada em Administração de Empresas com habilitação em Comercio Exterior pela FURB – Universidade de Blumenau. Especialização em Carta de Crédito pelo ICC Academy. Vinte anos de experiencia no Comex. Coordenação de embarques marítimos, rodoviários e aéreos. Análise e emissão documental parao perações com carta de créditos de alta complexidade.',
    },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// carregar item inicial
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// mostrar pessoa baseado no item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// próxima pessoa
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});



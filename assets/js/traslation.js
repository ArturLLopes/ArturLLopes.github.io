const translations = {
    "pt-BR": {
        menu__projetos: "Projetos",
        menu__sobre: "Sobre",
        menu__contato: "Contato",

        main__titleH1: "Curiosidade de um iniciante com a experiência de um veterano ",
        main__titleB: "Artur L. Lopes",
        main__titleP: "Artur Lages Lopes, Rio de Janeiro-RJ, Desenvolvedor",
        skills__titleH2: "Conhecimento nas principais tecnologias do mercado",

        btn__projects: "Ver Projetos",

        menu__projetos: "Projetos",
        card__titleH3: "Site de Buscas tema Olimpíada",
        card__descriptionP: "Busca de Atletas do Brasil",
        card__item1_1: "Digite o nome do atleta;",
        card__item1_2: "Clique em \"Buscar\";",
        card__item1_3: "Explore os resultados!",

        btn__preview: "Prévia",
        btn__repository: "Repositório",

        card__titleH2: "Jogo de memória de cores e sons",
        card__description: "O Jogo Genius (também conhecido como \"Simon\")",
        card__item: "O jogo começa exibindo uma cor por vez;",
        card__item2: "O jogador deve clicar nos botões na mesma ordem exibidas;",
        card__item3: "A cada rodada, uma nova cor é adicionada;",
        card__item4: "O jogo termina se o jogador errar a sequência.",

        card__description3_1: "Landingpage interativa",
        card__item5: "Fundo com efeitos sonoro;",
        card__item6: "Botão com efeito de inversão;",
        card__item7: "Galeria de imagens animada;",
        card__item8: "Formulário",

        btn__repositoryS: "Ver todos os Projetos",

        about__title: "Sobre mim",
        about__text: "Artur Lages Lopes. Estou redescobrindo a paixão pela programação e construindo um novo futuro                    digital, em constante evolução, expandindo meus horizontes e se adaptando às novas tecnologias da                    web, escrevendo um novo capítulo na minha jornada profissional.",

        btn__linkedin: "Conecte-se Comigo",
        btn__curriculum: "Currículo",

        about__title2: "Formação",
        about__subtitle: "Web Designer",
        about__destaque: "Atualmente",
        about__subtitle2: "Cursando Desenvolvimento Web Front-End.",       

        about__title3: "Experiências",
        about__subtitle3: "Web Designer",
        about__item1: "Desenvolvedor Front-End;",
        about__item2: "Editor de imagens;",
        about__item3: "Freelancer.",


        about__title4: "Habilidades",
        about__title5: "Soft Skills",
        about__title6: "Habilidades comportamentais",
        about__title7: "Enxergar possíveis soluções.",
        about__title8: "Trabalhar em equipe.",
        about__title9: "Boa comunicação.",
        about__title10: "Trabalhar com prazos.",

        about__title11:"Hard Skills",
        about__title12:"Habilidades técnicas",
        about__title13:"Habilidades com os sitemas operacionais.",
        about__title14:"Familiaridade com as IAs.",
        about__title15:"Cursos em diversas areas de desenvolvimento.",        
        about__title16:"Base como Web Designer.",



        contact__title: "Contato",
        contact__text: "Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo.",

        

        
        
    },
    "en": {
        menu__projetos: "Projects",
        menu__sobre: "About",
        menu__contato: "Contact",

        main__titleH1: "A beginner's curiosity with a veteran's experience",
        main__titleB: "Artur L. Lopes",
        main__titleP: "Artur Lages Lopes, Rio de Janeiro-RJ, Developer",
        skills__titleH2: "Knowledge in the main technologies of the market",

        btn__projects: "See Projects",
        
        menu__projetos: "Projects",
        card__titleH3: "Olympic Search Site",
        card__descriptionP: "Search for athletes from Brazil",
        card__item1_1: "Enter the name of the athlete;",
        card__item1_2: "Click on \"Search\";",
        card__item1_3: "Explore the results!",

        btn__preview: "Preview",
        btn__repository: "Repository",

        card__titleH2: "Memory game of colors and sounds",
        card__description: "The Genius Game (also known as \"Simon\")",
        card__item: "The game starts by displaying a color at a time;",
        card__item2: "The player must click on the buttons in the same order displayed;",
        card__item3: "Each round, a new color is added;",
        card__item4: "The game ends if the player makes a mistake.",

        card__description3_1: "Interactive landing page",
        card__item5: "Background with sound effects;",
        card__item6: "Button with inversion effect;",
        card__item7: "Animated image gallery;",
        card__item8: "Form",

        btn__repositoryS: "See all Projects",

        about__title: "About me",
        about__text: "Artur Lages Lopes. I am rediscovering my passion for programming and building a new digital future, constantly evolving, expanding my horizons, and adapting to new web technologies, writing a new chapter in my professional journey.",

        btn__linkedin: "Connect with me",
        btn__curriculum: "Curriculum",

        about__title2: "Education",
        about__subtitle: "Web Designer",
        about__destaque: "Currently",
        about__subtitle2: "Currently enrolled in Web Development Front-End.",

        about__title3: "Experiences",
        about__subtitle3: "Web Designer",
        about__item1: "Front-End Developer;",
        about__item2: "Image Editor;",
        about__item3: "Freelancer.",


        about__title4: "Skills",
        about__title5: "Soft Skills",
        about__title6: "Behavioral Skills",
        about__title7: "Seeing possible solutions.",
        about__title8: "Working in a team.",
        about__title9: "Good communication.",
        about__title10: "Working with deadlines.",


        about__title11:"Hard Skills",
        about__title12:"Technical Skills",
        about__title13:"Familiarity with operating systems.",
        about__title14:"Familiarity with IAs.",
        about__title15:"Courses in various areas of development.",        
        about__title16:"Base as a Web Designer.",


        contact__title: "Contact",
        contact__text: "I'm available for services and new connections. Contact me via email and connect with me.",

    },
};








let currentLanguage = "pt-BR";

document.getElementById("language-btn").addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR";
    updateLanguage();
});

function updateLanguage() {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[currentLanguage][key];
    });

    document.getElementById("language-btn").textContent = currentLanguage === "pt-BR" ? "EN" : "PT";
}

// Inicializar o idioma padrão
updateLanguage();
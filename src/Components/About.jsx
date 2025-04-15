// Importa o React, que é necessário para usar JSX e criar componentes
import React from "react";

// Importa o conteúdo de texto da seção "sobre mim" de um arquivo externo
import { about } from "../data/about";

// Importa o título "Sobre mim" de outro arquivo externo
import { aboutMe } from "../data/title";

// Define o componente funcional chamado "About"
function About() {
  return (
    // Container principal da seção "Sobre", com padding vertical
    // e largura de 50% da tela em telas maiores que 850px
    <div className="min-[850px]:w-1/2 py-4">
      
      {/* Título da seção - fica centralizado, azul e com espaçamento abaixo */}
      <div className="font-bold text-xl text-[#37BCF8] pb-6 text-center">
        {aboutMe} {/* Mostra o texto importado de 'title', como "Sobre mim" */}
      </div>
      
      {/* Parágrafo com o conteúdo sobre você - texto centralizado e responsivo */}
      <div className="sm:leading-loose sm:text-base leading-relaxed text-sm text-center">
        {about} {/* Mostra o conteúdo importado de 'about', como sua descrição pessoal */}
      </div>
    </div>
  );
}

// Exporta o componente para que ele possa ser usado em outros lugares do projeto
export default About;

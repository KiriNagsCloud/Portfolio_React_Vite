// Importa o React para poder usar JSX e criar componentes
import React from "react";

// Importa o componente About, que exibe informações sobre mim
import About from "./About";

// Importa o componente Skills, que exibe minhas habilidades
import Skills from "./Skills";

// Define o componente funcional AboutMe, que representa a seção "Sobre mim"
function AboutMe() {
  return (
    // Container principal da seção "Sobre mim", com texto branco e padding superior e inferior
    <div className="text-white pt-8 pb-14" id="about">
      
      {/* Container flexível com largura limitada e centralizado
          Em telas maiores que 850px, o layout é flexível em linha e os itens se distribuem corretamente,
          mas em telas menores, a disposição dos itens é em coluna */}
      <div className="md:w-10/12 w-11/12 mx-auto flex min-[850px]:flex-row min-[850px]:flex-wrap flex-col min-[850px]:justify-between min-[850px]:justify-center">
        
        {/* Componente About (sobre mim) */}
        <About />
        
        {/* Componente Skills (habilidades) */}
        <Skills />
      </div>
    </div>
  );
}

// Exporta o componente AboutMe para ser utilizado em outras partes do projeto
export default AboutMe;

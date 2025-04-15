// Importa o React para poder usar JSX e criar componentes
import React from "react";

// Importa o componente Timeline, que provavelmente exibe a linha do tempo das experiências
import Timeline from "./Custom/Timeline";

// Importa o título da seção "Experiência" de um arquivo externo
import { experience } from "../data/title";

// Importa os dados das experiências de trabalho e educação de um arquivo externo
import { workAndEducation } from "../data/experience";

// Define o componente funcional Experience, que exibe a seção de experiências
function Experience() {
  return (
    // Container principal da seção "Experiência", com padding superior e inferior
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-10" id="experience">
      
      {/* Título da seção - centralizado, azul e com espaçamento inferior */}
      <div className="font-bold text-xl text-[#37BCF8] pb-6">{experience}</div>
      
      {/* Container para exibir as experiências de trabalho e educação */}
      <div className="w-full py-6">
        
        {/* Mapeia os itens de experiência e renderiza o componente Timeline para cada um */}
        {workAndEducation.map((element, index) => {
          // Define se o item vai aparecer no lado esquerdo ou direito
          const leftSide = index % 2 === 0;
          
          // Verifica se é o primeiro item da lista
          const first = index === 0;
          
          // Verifica se é o último item da lista
          const last = index === workAndEducation.length - 1;

          return (
            <Timeline
              key={element.year}     // Usa o "year" como chave única para cada item
              year={element.year}     // Passa o ano da experiência
              organization={element.organization}   // Passa a organização da experiência
              position={element.position}           // Passa a posição ocupada
              responsibility={element.responsibility} // Passa as responsabilidades
              first={first}           // Passa a informação se é o primeiro item
              last={last}             // Passa a informação se é o último item
              leftSide={leftSide}     // Passa se o item deve aparecer no lado esquerdo ou direito
            />
          );
        })}
      </div>
    </div>
  );
}

// Exporta o componente Experience para ser usado em outras partes do projeto
export default Experience;

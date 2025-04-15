// Importa o React para poder usar JSX e criar componentes
import React from "react";

// Importa o título de "Contato" de um arquivo externo
import { contact } from "../data/title";

// Importa os dados de contato (como ícones e links) de um arquivo externo
import { contacts } from "../data/contact";

// Importa o componente personalizado IconWithText, que provavelmente exibe ícones com texto
import IconWithText from "./Custom/IconWithText";

// Define o componente funcional "Contact" que exibe a seção de contatos
function Contact() {
  return (
    // Container principal da seção "Contato", com padding vertical
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-14 pb-24" id="contact">
      
      {/* Título da seção - centralizado, azul e com espaçamento inferior */}
      <div className="font-bold text-xl text-[#37bbf8] pb-6">{contact}</div>
      
      {/* Container para os ícones de contato com sombra e bordas arredondadas */}
      <div className="sm:w-3/4 w-10/12 mx-auto shadow-lg rounded-lg">
        
        {/* Container com fundo escuro e espaço interno (padding) para os ícones de contato */}
        <div className="bg-[#1f2945] rounded-lg py-6 px-4 flex flex-wrap items-center sm:justify-center gap-6">
          
          {/* Mapeia os itens de contato e renderiza o componente IconWithText para cada um */}
          {contacts.map((element) => {
            return (
              <IconWithText
                key={element.label}   // Usa o "label" como chave única para cada ícone
                icon={element.icon}    // Passa o ícone para o componente
                label={element.label}  // Passa o texto que será exibido ao lado do ícone
                link={element.link}    // Passa o link para o qual o ícone vai direcionar
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Exporta o componente Contact para ser usado em outras partes do projeto
export default Contact;

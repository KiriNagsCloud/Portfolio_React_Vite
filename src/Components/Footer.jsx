// Importa o React para poder usar JSX e criar componentes
import React from "react";

// Importa os títulos da seção de footer e o link de "View Code" de um arquivo externo
import { footer, viewCode } from "../data/title";

// Define o componente funcional Footer, que exibe o rodapé da página
function Footer() {
  return (
    // Container principal do footer, com padding, fundo escuro, texto claro, texto pequeno e sombra
    <div className="py-10 flex flex-col w-full bg-[#09132e] text-[#c9e1ec] text-sm shadow-lg">
      
      {/* Texto do rodapé centralizado, com largura adaptável conforme o tamanho da tela */}
      <div className="lg:w-1/2 md:w-3/4 sm:w-11/12 w-10/12 mx-auto font-semibold text-center p-2">
        {footer}  {/* Exibe o texto do rodapé vindo do arquivo de dados */}
      </div>
      
      {/* Link para o repositório no GitHub com estilização para destacar e abrir em nova aba */}
      <a
        href="https://github.com"  // Link para o GitHub
        target="_blank"           // Abre o link em uma nova aba
        rel="noreferrer"          // Protege contra problemas de segurança com navegação entre sites
        className="lg:w-1/2 md:w-3/4 sm:w-11/12 w-10/12 mx-auto italic text-center p-2 text-[#37BCF8]"
      >
        {viewCode}  {/* Exibe o texto "View Code" vindo do arquivo de dados */}
      </a>
    </div>
  );
}

// Exporta o componente Footer para ser usado em outras partes do projeto
export default Footer;

// Importa o React e os elementos necessários
import React from "react";
import icon from "../assets/icon.svg"; // Ícone principal da página (imagem)
import Typewriter from "typewriter-effect"; // Efeito de máquina de escrever
import resume from "../assets/resume.pdf"; // Currículo em PDF
import resize from "../assets/resize.png"; // Ícone normal do botão "Resume"
import resizeActive from "../assets/resize_active.png"; // Ícone ativo do botão "Resume"
import contact from "../assets/contact.png"; // Ícone normal do botão "Contact Me"
import contactActive from "../assets/contact_active.png"; // Ícone ativo do botão "Contact Me"
import locationIcon from "../assets/location.png"; // Ícone de localização

// Importa dados textuais vindos de outros arquivos
import { description, greetings, pronoun, location } from "../data/title";
import { headline, name } from "../data/about";

// Importa componente personalizado para botões com ícones
import ButtonWithImage from "./Custom/ButtonWithImage";

// Componente principal da seção inicial do portfólio
function Home() {
  return (
    <div className="text-white h-screen flex flex-col w-full" id="home">
      {/* Container geral da seção, centraliza verticalmente o conteúdo */}
      <div className="h-screen flex items-center md:w-10/12 w-11/12 mx-auto">
        <div className="flex justify-between items-center m-auto">
          
          {/* Coluna com texto e botões (lado esquerdo) */}
          <div className="sm:w-7/12 w-10/12 max-[495px]:w-11/12 sm:mx-0 mx-auto">
            {/* Saudação */}
            <div className="pb-4 text-3xl font-semibold">{greetings}</div>

            {/* Linha com "It's me" + nome */}
            <div className="flex items-center gap-3 pb-4">
              <div className="text-xl">{pronoun}</div>
              <div className="font-semibold text-xl text-[#37BCF8]">{name}</div>
            </div>

            {/* Texto com efeito de máquina de escrever */}
            <div className="pb-4 text-xl flex gap-2">
              <span className="text-lg">A</span>
              <span className="text-[#37BCF8] font-bold">
                <Typewriter
                  options={{
                    strings: description, // Array com descrições como "Web Developer"
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            {/* Texto complementar, como um subtítulo ou bio resumida */}
            <div className="leading-loose">{headline}</div>

            {/* Linha com ícone de localização e texto */}
            <div className="w-fit pt-3 flex items-center gap-2">
              <img src={locationIcon} className="object-contain w-5 h-5" />
              <div className="text-sm">{location}</div>
            </div>

            {/* Botões "Resume" e "Contact Me" */}
            <div className="flex items-center xl:w-1/2 lg:w-4/6 sm:w-11/12 w-3/4 max-[555px]:w-10/12 max-[495px]:w-11/12 max-[445px]:w-full justify-between pt-6">
              {/* Botão para abrir o currículo em nova aba */}
              <a href={resume} target="_blank" rel="noreferrer">
                <ButtonWithImage
                  icon={resize}
                  activeIcon={resizeActive}
                  label="Resume"
                />
              </a>
              {/* Botão que rola até a seção de contato */}
              <a href="#contact">
                <ButtonWithImage
                  icon={contact}
                  activeIcon={contactActive}
                  label="Conatct Me" // <-- *Obs: está escrito errado, o correto seria "Contact Me"*
                />
              </a>
            </div>
          </div>

          {/* Imagem decorativa à direita (ícone principal) - visível apenas em telas maiores */}
          <div className="sm:w-1/3 sm:block hidden">
            <img className="object-contain" src={icon}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente para uso no app
export default Home;

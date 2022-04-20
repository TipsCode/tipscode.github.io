import Nullstack from 'nullstack';

function BoxJourney({ children, nameTitle }) {
    return (
        <div>
            <figure class="jouney-img">
                <img src="/sales-page-img/sales-react/icon-cubo.svg" alt="icones das tecnologias" />
            </figure>
            <div class="border-solid border-white border-l-4 p-10">

                <div class="ml-5">
                    <div class="jouney-heading">
                        <h3 class="text-white text-start text-2xl">{nameTitle}</h3>
                        <p class="text-gray-400">{children}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Journey() {

return (
    <div class="m-10 xm:flex-col lg:flex md:flex md:justify-around justify-around">
    
        <div>
            <h2 class="text-white text-start text-5xl"><span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
                    from-indigo-400 via-purple-500 to-indigo-600'">STEP-BY-STEP</span> no <br/>caminho do sucesso</h2>
        </div>
        <div>
            <BoxJourney nameTitle="Revisão JavaScript">Nesse módulo vamos revisar todos os conceitos importantes de Javascript
            <br /> que você precisa saber antes de comçar no React</BoxJourney>
            <BoxJourney nameTitle="React JS">Agora sim, depois de dominar o  conceito em JS puro vamos partir pro
            <br /> React. Básico >> Intermediário >> Avanado</BoxJourney>
            <BoxJourney nameTitle="Next JS">Já que o Hype se tornou realidade e grandes empresas adotaram,
            <br /> nesse módulo você vai aprender Next.js para não ficar para trás. <br />Domine Fron-end e Back-end com esse Framework</BoxJourney>
        </div>

    </div>
    );
}
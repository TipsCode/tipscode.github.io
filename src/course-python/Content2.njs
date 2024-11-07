import Nullstack from 'nullstack';
import SectionContentMobile from './SectionContentMobile'

class Content2 extends Nullstack {

    imagens = [
        {
           id: 0,
           img: '/sales-page-python-img/python-logica.png',
           titleOfImage: 'Lógica de Programação com Python',
        },
        {
            id: 1,
            img: '/sales-page-python-img/python-orientado-objetos.png',
            titleOfImage: 'Python Orientado à Objetos',
        },
        {
            id: 2,
            img: '/sales-page-python-img/python-inteligencia-artificial.png',
            titleOfImage: 'Dominando a Web com Flask e Django',
            
        },
        {
            id: 3,
            img: '/sales-page-python-img/python-automacao-robotica.png',
            titleOfImage: 'Inteligência Artificial',
        },
        {
            id: 4,
            img: '/sales-page-python-img/python-automator.png',
            titleOfImage: 'Automação e Robótica',
        }
    ]

    count = 0;

    increment() {
        this.count++;
        console.log(this.count)
        if(this.count > 4 ) {
            this.count = 0
        }
    }
    
    render() {
        return(
            <>
            <h3 class="text-center mt-10 text-white text-[34px] leading-[28.8px] md:text-[38px] lg:text-5xl md:leading-[45.6px] font-semibold mb-10">O que você irá aprender</h3>
            <sections class="hidden w-full md:flex md:mb-16">
                <div class="mx-5 md:px-32 md:w-2/4">                
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] text-white  md:font-semibold mb-2">Lógica de Programação com Python</h4>
                        <p class="font-normal  text-white">Domine fundamentos de programação e lógica, essenciais para desenvolver suas habilidades em Python de forma sólida e estruturada.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] text-white md:font-semibold mb-2">Python Orientado à Objetos</h4>
                        <p class="font-normal text-white">Aprenda a aplicar os princípios de programação orientada a objetos para escrever códigos Python mais limpos, reutilizáveis e eficientes.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] text-white md:font-semibold mb-2">Dominando a Web com Flask e Django</h4>
                        <p class="font-normal text-white">Crie aplicações web robustas e escaláveis usando frameworks poderosos que facilitam pequenos e grandes projetos.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] text-white md:font-semibold mb-2">Inteligência Artificial</h4>
                        <p class="font-normal text-white">Abra portas para inovações com IA, aprendendo a construir algoritmos de machine learning e deep learning com Python.</p>
                    </div>    
                </div>
                <figure class="mx-5">
                    <img src={this.imagens[this.count].img} alt={this.imagens[this.count].imgAlt} />
                </figure>

            </sections>

                {/* Versão mobile */}
                <SectionContentMobile src={this.imagens[0].img} title={this.imagens[0].titleOfImage} alt={this.imagens[0].titleOfImage} />
                <SectionContentMobile src={this.imagens[1].img} title={this.imagens[1].titleOfImage} alt={this.imagens[1].titleOfImage} />
                <SectionContentMobile src={this.imagens[2].img} title={this.imagens[2].titleOfImage} alt={this.imagens[2].titleOfImage} />
                <SectionContentMobile src={this.imagens[3].img} title={this.imagens[3].titleOfImage} alt={this.imagens[3].titleOfImage} />
                <SectionContentMobile src={this.imagens[4].img} title={this.imagens[4].titleOfImage} alt={this.imagens[4].titleOfImage} />
              
               
        </>
        )
    }
}

export default Content2;
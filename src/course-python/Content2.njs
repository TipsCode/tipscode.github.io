import Nullstack from 'nullstack';

class Content2 extends Nullstack {

    imagens = [
        {
            id: 0,
           img: '/sales-page-python-img/python-logica.png',
           imgAlt: 'Lógica de Programação com Python',
        },
        {
            id: 1,
            img: '/sales-page-python-img/python-orientado-objetos.png',
            imgAlt: 'Python Orientado à Objetos',
        },
        {
            id: 2,
            img: '/sales-page-python-img/python-inteligencia-artificial.png',
            imgAlt: 'Dominando a Web com Flask e Django',
            
        },
        {
            id: 3,
            img: '/sales-page-python-img/python-automacao-robotica.png',
            imgAlt: 'Inteligência Artificial',
        },
        {
            id: 4,
            img: '/sales-page-python-img/python-automator.png',
            imgAlt: 'Automação e Robótica',
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
            <sections class="w-full md:flex md:mb-16">
                <div class="mx-5 md:px-32 md:w-2/4">                
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] text-white  md:font-semibold mb-2">Lógica de Programação com Python</h4>
                        <p class="font-normal  text-white">Aprenda a aplicar os princípios de programação orientada a objetos para escrever códigos Python mais limpos, reutilizáveis e eficientes.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] md:font-semibold mb-2">Python Orientado à Objetos</h4>
                        <p class="font-normal">Aprenda a aplicar os princípios de programação orientada a objetos para escrever códigos Python mais limpos, reutilizáveis e eficientes.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] md:font-semibold mb-2">Dominando a Web com Flask e Django</h4>
                        <p class="font-normal">Crie aplicações web robustas e escaláveis usando frameworks poderosos que facilitam pequenos e grandes projetos.</p>
                    </div>
                    <div onclick={this.increment} class= "text-[#879098] mb-8">
                        <h4 class="text-[30px] md:font-semibold mb-2">Inteligência Artificial</h4>
                        <p class="font-normal">Abra portas para inovações com IA, aprendendo a construir algoritmos de machine learning e deep learning com Python.</p>
                    </div>    
                </div>
                <figure class="mx-5">
                    <img src={this.imagens[this.count].img} alt={this.imagens[this.count].imgAlt} />
                </figure>
            </sections>
        </>
        )
    }
}

export default Content2;
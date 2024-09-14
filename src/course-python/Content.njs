import './content.css';

let contentInfo = [
    {
        id: 0,
        title: 'Lógica de Programação com Python',
        text: 'Domine fundamentos de programação e lógica, essenciais para desenvolver suas habilidades em Python de forma sólida e estruturada.',
        img: '/sales-page-python-img/python-logica.png',
        imgAlt: 'Lógica de Programação com Python',
    },
    {
        id: 1,
        title: 'Python Orientado à Objetos',
        text: 'Aprenda a aplicar os princípios de programação orientada a objetos para escrever códigos Python mais limpos, reutilizáveis e eficientes.',
        img: '/sales-page-python-img/python-orientado-objetos.png',
        imgAlt: 'Python Orientado à Objetos',
    },
    {
        id: 2,
        title: 'Dominando a Web com Flask e Django',
        text: 'Crie aplicações web robustas e escaláveis usando frameworks poderosos que facilitam pequenos e grandes projetos.',
        img: '/sales-page-python-img/python-inteligencia-artificial.png',
        imgAlt: 'Dominando a Web com Flask e Django',
    },
    {
        id: 3,
        title: 'Inteligência Artificial',
        text: 'Abra portas para inovações com IA, aprendendo a construir algoritmos de machine learning e deep learning com Python.',
        img: '/sales-page-python-img/python-automacao-robotica.png',
        imgAlt: 'Inteligência Artificial',
    },
    {
        id: 4,
        title: 'Automações',
        text: 'Construa robôs para automatizar tarefas rotineiras e complexas com scripts Python, tornando seus processos mais eficientes.',
        img: '/sales-page-python-img/python-automator.png',
        imgAlt: 'Automação e Robótica',
    }
]

function ContentMobileTablet(props){
    return (
        <div class="my-2 flex md:gap-20 md:my-4 flex-col md:flex-row min-[1300px]:hidden m-auto">
            <img class="w-[347px] h-[347px] md:w-[211px] md:h-[211px] rounded-[20px] max-md:m-auto" src={props.src} alt={props.alt} />
            <div class="lg:w-[584px]">
                <h4 class="leading-[28.6px] text-[22px] md:leading-[36px] md:text-[30px] font-bold md:font-semibold my-4">{props.title}</h4>
                <p class="hidden md:block text-base font-normal md:text-[#9da2a5] ">{props.text}</p>
            </div>
        </div>
    )
}

function ContentDesktop(){
    return (
        <div class="my-2 m-auto hidden min-[1300px]:flex gap-[2rem] min-[1350px]:gap-[5rem]">
            <div class="w-[584px]">
                {contentInfo.map((contentDescription) =>
                    <>
                        <div class={contentDescription.id === 0 ? "desktop-card-container highlight text-[#879098] mb-8" : "desktop-card-container text-[#879098] mb-8"}>
                            <h4 class="title-content leading-[36px] text-[30px] font-bold md:font-semibold mb-2">{contentDescription.title}</h4>
                            <p class="p-content hidden md:block text-base font-normal">{contentDescription.text}</p>
                        </div>
                    </>
                )}
            </div>
            {contentInfo.map(content => (
                <img class={content.id === 0 ? 'img-content w-[616px] h-[640px] rounded-[20px] max-md:m-auto img-highlight hidden' : 'img-content w-[616px] h-[640px] rounded-[20px] max-md:m-auto hidden'} src={content.img} />
            ) )}
        </div>
    )
}

export default function Content(){

    const desktopCard = document.querySelectorAll('.desktop-card-container')
    desktopCard.forEach((card, cardIndex) => {

        const imgDesktop = document.querySelectorAll('.img-content')

        card.addEventListener('mouseover', ()=> {
            document.querySelector('.highlight').classList.remove('highlight')
            card.classList.add('highlight')

            imgDesktop.forEach((img, imgIndex) => {
                if(cardIndex === imgIndex){
                    document.querySelector('.img-highlight').classList.remove('img-highlight')
                    img.classList.add('img-highlight')
                }
            })
            
        })
    })


    return (
        <>
            <section class="my-8 px-10 py-8 bg-[#1e1e1e] text-[#f6fbff]">
                <h3 class="text-center text-[34px] leading-[28.8px] md:text-[38px] lg:text-5xl md:leading-[45.6px] font-semibold mb-10">O que você irá aprender</h3>
                <div class="flex flex-col max-md:items-center 2xl:w-max m-auto">
                    {contentInfo.map(content => {
                        return (
                            <ContentMobileTablet id={content.id} title={content.title} text={content.text} src={content.img} alt={content.alt} />
                        )
                    })}
                    <ContentDesktop />
                </div>
            </section>
        </>
    )    

}
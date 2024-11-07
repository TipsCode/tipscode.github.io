import "./hero.css";

export default function Hero() {
  return (
    <>
      <section class="bg-hero-python text-center text-white">
        <div class="relative min-[700px]:mb-24 min-[700px] flex flex-col items-center gap-y-10">
          <div class="relative">
            <h1 class="text-4xl mt-10 min-[700px]:text-5xl min-[1000px]:text-7xl w-80 min-[700px]:w-[41rem] 
            min-[1000px]:w-[43rem] font-semibold leading-10 min-[700px]:leading-[70px] min-[1000px]:leading-[103.2px]"
            >Aprenda <span class="text-highlight inline-block min-[700px]:uppercase 
            min-[700px]:bg-[#FFDA17] min-[700px]:text-[#0085FF] min-[700px]:rounded-[10px] 
            min-[700px]:p-3 min-[1000px]:text-6xl">Python</span> online do Básico ao Profissional</h1>
            
            <figure class="hello-world-container absolute hidden min-[1330px]:block">
            <img src="./sales-page-python-img/hero-carbon-Code-Hello-World.png" alt="hello world" />
          </figure>
          </div>
          <div class="relative">
            <p class="w-64 min-[700px]:text-lg min-[1000px]:text-xl min-[700px]:w-[28rem] min-[1000px]:w-[37rem]">No Curso Python Turbo, você aprenderá do básico ao avançado com foco em prática, projetos reais, teoria, desafios e suporte contínuo, além de mais de 40 projetos práticos.</p>
            <figure>
              <img class="blue-snake snake" src="./sales-page-python-img/hero-blueSnake.png" alt="blue snake python" />
              <img class="yellow-snake snake" src="./sales-page-python-img/hero-yellowSnake.png" alt="yellow snake python" />
            </figure>
          </div>
          <a class="mb-8 bg-[#5FE2FF] min-[700px]:mb-60 py-2 min-[700px]:py-3 px-4 min-[700px]:px-6 min-[700px]:text-2xl min-[700px]:font-medium rounded-[30px] text-black" href="https://pay.kiwify.com.br/UMt0YIC">Garantir minha vaga!</a>
          <figure class="hello-ia-container absolute hidden min-[700px]:block">
            <img class="hello-ia-img relative" src="./sales-page-python-img/hero-carbon-Code-Hello-IA.png" alt="hello ia" />
            <img class="ai-bubble w-1/4 relative" src="./sales-page-python-img/ai-buble.png" alt="ai bubble" />
          </figure>
          <span class="arrow-down"></span>
        </div>
      </section>
    </>
  );
}

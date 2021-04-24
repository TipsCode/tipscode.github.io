import './Testimonials.scss';
import Nullstack from 'nullstack';


class Testimonials extends Nullstack {


  renderOl({ children }) {
    return (
      <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">{ children }</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">{ children }</label>
        </li>
        <li class="inline-block mr-3">
          <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">{ children }</label>
        </li>
      </ol>
    );
  }

  renderCite({ children }) {
    return (
      <div class="mt-5">
        <cite> { children } </cite>
      </div>
    );
  }

  renderLabel({ backwards, control, nameFor }) {
    const text = backwards ? '<' : '>';

    return (
      <label
        for={nameFor}
        class={`prev ${control} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer
            hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 
            leading-tight text-center z-10 inset-y-0 ${backwards ? 'left-0' : 'right-0'} my-auto`}
      >{text}
      </label>
    );
  }

  renderCarousel({ children }) {
    return (
      <div class="carousel-item absolute opacity-0" style="height:50vh;">
        <div class="block h-full w-full">
          <blockquote class="pt-24 text-blue-700 text-2xl text-center">

            <p>
              {children}
            </p>

            <Cite>Daniel Christia - Ouro Vende Goiás</Cite>
          </blockquote>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section class="max-w-screen-xl mx-auto pt-32">
        <h2 class="font-bold text-5xl mb-3 text-center text-blue-700">O que falam sobre o TipsCode</h2>
        <div class="carousel relative">

          <div class="carousel-inner relative overflow-hidden w-full">
            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />

            <Carousel>

              "Não sou bom em fazer depoimentos, mas posso falar que tudo o que eu aprendi hoje foi graça a seus <br />
              conteúdos entre outros, sou de uma cidade pequena chamada Ouro Verde de Goiás próximo a Brasília, <br />
              lugar onde é bem difícil ter acesso a educação e oportunidade em área tecnológica, mas graças a Deus <br />
              conteúdos aprendi a me virar na internet sem precisar sair de casa."

            </Carousel>

            <Label backwards control="control-1" nameFor="carousel-3" />
            <Label control="control-1" nameFor="carousel-2" />

            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />

            <Carousel>

              <p>
                "Bom , seu conteúdo é fantástico e de fácil entendimento onde as pessoas <br />
                que  assistem  (pelo menos eu) podem absorver com facilidade, <br />
                pois você tem paciência na explicação,fala tudp detalhado e <br />
                claro com competência. Os curso no qual você disponibilizou <br />
                ajudou e acredito que ajudou muitas pessoas,pois é uma área que está <br />
                se expandindo bastante e necessita de pessoas capacitadas e com <br />
                entendimento para ela, então você estar abrindo portas. Você <br />
                é um exemplo de superação. Muito Obrigado mesmo!!!! :)"
              </p>
            </Carousel>


            <Label backwards control="control-2" nameFor="carousel-1" />
            <Label control="control-2" nameFor="carousel-3" />

            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />


            <Carousel>
              <p>
                "Simplesmente demais e direto, apresentando de forma prática como<br />
                um game usando Javascript do Zero." assistem (pelo menos eu) podem absorver com facilidade,"
              </p>

            </Carousel>


            <Label backwards control="control-3" nameFor="carousel-2" />
            <Label control="control-3" nameFor="carousel-1" />

            <Ol>•</Ol>

          </div>
        </div>

      </section>
    );
  }

}

export default Testimonials;
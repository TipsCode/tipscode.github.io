import Nullstack from 'nullstack';


class ThanksUpsell extends Nullstack {
  

  render() {
    return (
      
      <section class="bg-zing w-full h-full text-white text-center">
      
          <div class="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-2">

              <div class="flex items-center ">
                <a class="lg:pt-16 toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                  <img src="/TipsCodelogo.png" alt="TipsCode" loading="lazy" width="186" height="66" />
                </a>

              </div>
          </div>

          <div class="text-center px-3 lg:px-0" style="height:90vh">
              <h1 class="py-10 text-3xl md:text-5xl text-white font-bold">Obrigado por comprar<br /> 
              <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">conosco!</span>
              </h1>
          
          </div>

          
      </section>
    );
  }

}

export default ThanksUpsell;
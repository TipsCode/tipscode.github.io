import Nullstack from 'nullstack';
import Modal from '../layout/Modal';
import MenuSales from './MenuSales';

class Hero extends Nullstack {

  modalVisible = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  render() {
    return (
      <>
        <span>
          {this.modalVisible && <Modal video="https://www.youtube.com/embed/yovzEEYOl-E" onclose={this.toggleModal} />}
        </span>

        <div class="leading-normal tracking-normal text-white bg-gradient-radial">

         <MenuSales />

          <div id="hero" class="pt-10 mt-20 sm:mt-12 max-w-screen-xl justify-center mx-auto">
            <div class="container px-3 mx-auto items-center">

              <div class="text-center px-3 lg:px-0">
                <h1 class="my-3 text-3xl lg:text-6xl font-bold leading-tight">Full Stack Turbo</h1>
                <p class="leading-normal sm:text-lg md:text-2xl mb-8">
                  Assista o vídeo abaixo e descubra como desenvolver qualquer sistema, precifiacar e vender para o seu cliente!
                </p>

              </div>

              <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto" onclick={this.toggleModal}>
                <img class="w-full z-30 cursor-pointer" src="./sales-page-img/hero/Image-hero.webp" alt="Plano de fundo TipsCode" loading="lazy" width="1256" height="634" />
              </div>

              <div class="flex items-center w-full mx-auto justify-center md:mt-15 lg:mt-32 xl:mt-32">
                <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10" class="mx-auto z-40 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  QUERO SER FULL STACK
                </a>
              </div>
            </div>
          </div>

          <div class="relative m-0 p-0 w-full">
            <img class="w-full block absolute bottom-0" src="./sales-page-img/hero/Waves.webp" alt="waves" loading="lazy" />
          </div>
        </div>
      </>
    );
  }

}

export default Hero;
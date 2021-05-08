import Nullstack from 'nullstack';
import Modal from '../layout/Modal';

class Hero extends Nullstack {

  modalVisible = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  render() {
    return (
      <>
        <span>
          {this.modalVisible && <Modal onclose={this.toggleModal} />}

        </span>

        <div class="leading-normal tracking-normal text-white bg-gradient-radial">

          <nav id="header" class="w-full z-30 top-0 text-white">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

              <div class="pl-4 flex items-center">
                <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                  <img src="./TipsCodelogo.png" />
                </a>
              </div>
              <div class="block lg:hidden pr-4">
                <button id="nav-toggle"class="flex items-center p-1 text-white-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <svg
                    class="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                  <li class="mr-3">
                    <p class="inline-block py-2 px-4 text-white font-bold no-underline" href="#">Já é aluno?</p>
                  </li>
                </ul>
                <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10" id="navAction" class="mx-auto lg:mx-0 bg-tips-green text-white font-bold rounded-md mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Entrar
                </a>
              </div>
            </div>

          </nav>

            <div id="hero" class="pt-10 max-w-screen-xl justify-center mx-auto">
                <div class="container px-3 mx-auto items-center">

                    <div class="text-center px-3 lg:px-0">
                        <h1 class="my-3 text-3xl lg:text-6xl font-bold leading-tight">Full Stack Turbo</h1>
                        <p class="leading-normal sm:text-lg md:text-2xl mb-8">
                            Assista o vídeo abaixo e descubra como desenvolver qualquer sistema, precifiacar e vender para o seu cliente!
                        </p>

                    </div>

                    <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto" onclick={this.toggleModal}>
                        <img class="w-full z-40 cursor-pointer" src="./Image-hero.svg" />
                    </div>

                    <div class="flex items-center w-full mx-auto justify-center md:mt-15 lg:mt-32 xl:mt-32">
                        <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10" class="mx-auto z-40 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        SIM! QUERO SER UM DESENVOLVEDOR FULL STACK TURBO
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative m-0 p-0 w-full">
                <img class="w-full block absolute bottom-0" src="./Waves.svg" alt="waves" />
            </div>
        </div>
      </>
    );
  }

}

export default Hero;
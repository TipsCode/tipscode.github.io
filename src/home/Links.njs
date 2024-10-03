import Nullstack from 'nullstack';
import Menu from '../layout/Menu';


class Links extends Nullstack {

  render() {
    return (
     
        <section class="h-screen	">
          <Menu />
          <div class="flex justify-center items-center mt-10">
            <img src="./perfil-intagram.jpg" alt="Profile Picture" class="rounded-full h-32 w-32" />
          </div>

          <h1 class="font-mono font-bold text-2xl text-center mt-5 text-black	">TipsCode</h1>
          <p class="font-mono font-medium text-lg text-center mt-2 text-black	">Já somos mais de 3 mil alunos</p>

          <div class="flex justify-center items-center mt-5">
            <a href="https://bit.ly/4gK4I0e"  target="_blank" class="cursor-pointer font-medium w-56 text-center bg-tips-blue rounded-full  hover:bg-white hover:text-tips-blue  px-4 py-2 mb-2 sm:mb-0 text-white ">     
              <span>Curso Full Stack Turbo</span>
            </a>
          </div>
          <div class="flex justify-center items-center mt-5">
            <a href="https://bit.ly/3XHglMP"  target="_blank" class="cursor-pointer font-medium w-56 text-center bg-tips-blue rounded-full  hover:bg-white hover:text-tips-blue  px-4 py-2 mb-2 sm:mb-0 text-white ">     
              <span>Curso Python</span>
            </a>
          </div>

          <div class="flex justify-center items-center mt-5">
            <a href="https://www.youtube.com/@tipscode"  target="_blank" class="cursor-pointer font-medium w-56 text-center bg-tips-blue rounded-full  hover:bg-white hover:text-tips-blue  px-4 py-2 mb-2 sm:mb-0 text-white ">     
              <span>Youtube</span>
            </a>
          </div>
          <div class="flex justify-center items-center mt-5">
            <a href="https://www.instagram.com/tipscodeoficial/"  target="_blank" class="cursor-pointer font-medium w-56 text-center bg-tips-blue rounded-full  hover:bg-white hover:text-tips-blue  px-4 py-2 mb-2 sm:mb-0 text-white ">     
              <span>Instagram</span>
            </a>
          </div>
          <div class="flex justify-center items-center mt-5">
            <a href="https://www.tiktok.com/@tipscodeoficial"  target="_blank" class="cursor-pointer font-medium w-56 text-center bg-tips-blue rounded-full  hover:bg-white hover:text-tips-blue  px-4 py-2 mb-2 sm:mb-0 text-white ">     
              <span>TikTok</span>
            </a>
          </div>

         
    
        </section>
   
    
  
    );
  }

}

export default Links;
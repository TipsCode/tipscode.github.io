import Nullstack from 'nullstack';
import './Navigation.scss'

class Navigation extends Nullstack {
  
  render() {
    return (
        <div class="md:flex md:items-center md:justify-around p-4 pb-0 shadow-lg md:pb-4">
          
        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <a class="no-underline text-grey-darkest hover:text-black" href="#">
              <figure>
                <img src="/tipscode-logo-1.svg" />
              </figure>
            </a>
          </h1>

          <a class="text-black hover:text-orange md:hidden" href="#">
            <i class="fa fa-2x fa-bars"></i>
          </a>
        </div>

        <nav>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Home
              </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Blog
              </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Cursos
              </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Sobre
              </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                Contato
              </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                E-book
              </a>
            </li>
            <li class="md:ml-4">
              <button class="button-color p-4 rounded-lg">FullStack Turbo</button>
            </li>
          </ul>
        </nav>
  
    </div>
    )
  }

}

export default Navigation;
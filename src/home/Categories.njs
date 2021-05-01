import Nullstack from 'nullstack';
import Footer from '../layout/Footer';
import Promotion from '../layout/Promotion';

class Categories extends Nullstack {


  renderLink({ children }) {
    return (
      <li class="mt-9 py-3 px-16 shadow rounded-lg bg-gray-50 font-bold border focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <a href="#" class="button-color text-black">
          {children}
        </a>
      </li>
    );
  }

  render() {
    return (
      <>
        <section class="flex-col my-16 sm:my-28">
          <div class="bg-categories bg-center bg-no-repeat bg-contain">

            <h3 class="text-center text-5xl text-blue-700 text-opacity-80 font-bold">Conteúdos gratuitos no <br /> nosso canal</h3>

            <div class="container mx-auto px-4 sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 flex flex-wrap sm:flex-nowrap sm:items-center justify-center sm:justify-around">
              <div class="mt-10 sm:mt-none order-2 sm:order-1">
                <ul>
                  <Link href="/"> Vanila js </Link>
                  <Link href="/"> Lógica </Link>
                  <Link href="/"> React js </Link>
                  <Link href="/"> Vue js </Link>
                </ul>
              </div>

              <div class="mt-10 sm:mt-none order-1 sm:order-2">
                <img src="/video.svg" />
              </div>

              <div class="sm:mt-10 sm:mt-none order-3">
                <ul>
                  <Link href="/"> HTML 5</Link>
                  <Link href="/"> CSS 3 </Link>
                  <Link href="/"> Node js </Link>
                  <Link href="/"> Nullstack </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Promotion />
        <Footer />
      </>
    );
  }

}

export default Categories;
import Nullstack from 'nullstack';

class Categories extends Nullstack {


    renderLink({children}) {
        return (
            <li class="mt-9 py-3 px-16 shadow rounded-lg bg-gray-50">
                <a href="#" class="button-color text-black"> 
                    {children}
                </a>
            </li>
        );
    }
  
  render() {
    return (
        <section class="my-28">
            <div class="bg-categories bg-center bg-no-repeat bg-center bg-contain">
                
                <h3 class="text-center text-5xl text-blue-700">Conteúdos gratuitos no <br /> nosso canal</h3>

                <div class="max-w-screen-xl mx-auto px-4 py-10 flex items-center justify-around">
                    <div>
                        <ul>
                            <Link href="/"> Vanila js </Link>
                            <Link href="/"> Lógica </Link>
                            <Link href="/"> React js </Link>
                            <Link href="/"> Vue js </Link>
                        </ul>
                    </div>

                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cobt55DMZX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div>
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
    )
  }

}

export default Categories;
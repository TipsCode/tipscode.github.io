import Nullstack from 'nullstack';
import Navigation from '../menu/Navigation'

import './Header.scss'

class Header extends Nullstack {
  
  render() {
    return (
        <header>
            <Navigation />
            <div class="bgColor-Customer grid grid-cols-2">
                <div class="flex-col justify-self-end">
                    <h1 class="text-6xl">Bem vindo á TipsCode</h1>
                    <h2 class="text-4xl">A sua escola de programação</h2>

                    <p class="mt-3">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Ipsum mauris orci luctus.
                    </p>

                    <div>
                        <button class="p-3 bg-blue-400">Já sou aluno</button>
                        <button class="p-3 bg-green-400">Quero ser FullStack</button>
                    </div>
                </div>
                
                <figure class="flex justify-end">
                    <img src="/espiral-completa.svg" />
                </figure>
                
            </div>
        </header>
    )
  }

}

export default Header;
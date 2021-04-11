import Nullstack from 'nullstack';

class Inspiration extends Nullstack {
  
  render() {
    return (
        <section class="container mx-auto px-4 py-10 flex items-center justify-between">

            <figure class="flex justify-start">
                <img class="flex justify-start" src="/man-tipscode.png" />
            </figure>

            <div class="flex-col justify-end">
    
                <h3 class="text-6xl text-blue-700">Programação <br /> muda vidas, <br /> veja nossos alunos</h3>

                <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                    mauris orci luctus.
                </p>

                <div>
                    <button class="mt-2 button-color p-3 rounded-lg bg-green-300"> Conhece</button>
                </div>
            
            </div>

    
      </section>
    )
  }

}

export default Inspiration;
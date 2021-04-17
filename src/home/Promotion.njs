import Nullstack from 'nullstack';

class Promotion extends Nullstack {
  
  render() {
    return (
      <sectino class="max-w-screen-xl mx-auto px-4 py-10 flex items-center ">
          <div class="text-center shadow rounded-lg w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500">
              <h2 class="mt-20 mb-7 text-white text-3xl">Venha fazer parte do melhor curso de programação <br /> Full Stack do Brasil</h2>

              <a href="#" class="bg-green-500 px-14 py-3 text-white shadow-sm rounded-sm">Adquirir Agora</a>
          </div>
      </sectino>
    )
  }

}

export default Promotion;
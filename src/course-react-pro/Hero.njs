import Nullstack from 'nullstack';
import './hero.css';

class Hero extends Nullstack {

  render() {
  
    return (
      <>
        <div class="text-white">

        <div class="max-w-screen-xl justify-center mx-auto">
          <div class="container px-3 mx-auto items-center">

            <div class="text-center px-3 lg:px-0">
              <h1 class="py-10 text-3xl md:text-5xl text-white font-bold">A tecnologia mais <br/>utilizada do mercado, <br />no 
              <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600"> curso react.js PRO</span>
              </h1>
          
            </div>

          

            <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                <div class="embed">
                  <iframe src="https://www.youtube.com/embed/XnJMPnfNdus" />
                </div>
            </div>

            
          </div>
        </div>

        </div>
      </>
    );
  }

}

export default Hero;
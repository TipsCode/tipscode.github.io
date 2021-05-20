import Nullstack from 'nullstack';
import LeadForm from '../layout/LeadForm';

const leadlover = {
  id: '414881',
  mid: '414881',
  pid: '15204812',
  list: '414881',
};


class CallToAction extends Nullstack {

  
  render() {
    return (
      <section class="bg-white md:py-28">
        <div class="px-5 text-center sm:max-w-screen-xl sm:mx-auto flex flex-col">

          <h2 class="text-2xl md:text-4xl mx-auto text-tips-dark font-bold tracking-wide">Vai ser incrível! Você aprenderá a <br /> criar o seu primeiro jogo</h2>

          <div class="py-14 relative">
            <img src="./playing.png" />

            <div class="w-full sm:w-5/6 py-14 mx-auto rounded-lg md:shadow-md bg-white absolute inset-x-0 -bottom-44 sm:-bottom-24 lg:bottom-16">
              <h3 class="text-center text-xl md:text-2xl text-tips-dark text-opacity-80 font-bold tracking-wide">Para ter acesso digite o seu e-mail abaixo</h3>

              <div class="mt-4">
                 <LeadForm
                    config={leadlover}
                    class={{
                      input: 'p-2 rounded-md md:rounded-none md:rounded-l-md focus:outline-none bg-white shadow-md border w-full lg:w-3/6',
                      button: 'py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-green text-white rounded-md md:rounded-none md:rounded-r-md shadow-md border w-full lg:w-2/6',
                    }}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default CallToAction;
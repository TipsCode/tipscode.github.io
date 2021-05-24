import Footer from '../layout/Footer';

export default function Thanks() {
  return (
    <div class="bg-white text-tips-dark text-center tracking-wide">
      <div class="px-4 py-10 sm:py-20 sm:max-w-screen-xl m-auto items-center flex flex-col gap-12">
        <div>
          <img src="/check-circle-green.svg" class="mx-auto py-8 md:w-12" />
          <h1 class="text-xl md:text-3xl text-isca-green font-medium">Parabéns</h1>
        </div>

        <p class="text-xl md:text-4xl font-medium leading-relaxed">
          Agradeço pela confiança, em até 5 minutos você receberá um e-mail com os seus dados de acesso ao curso. Enquanto isso, que tal conhecer mais sobre o novo treinamento <strong>FULLSTACK TURBO</strong> da TipsCode?
        </p>

        <a href="/curso-fullstack-turbo" class="py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-green text-white rounded-md shadow-md w-full md:w-2/6">Conhecer Treinamento</a>

       <Footer class={ {
           footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around',
             p: 'text-center sm:text-center w-full text-tips-dark text-opacity-80'
        } } src="./tipscode-logo-1.svg" />
        
      </div>
    </div>
  );
}
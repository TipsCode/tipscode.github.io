import Footer from '../layout/Footer';

export default function Thanks() {
  return (
    <>
      <div class="bg-tips-dark text-white text-center h-screen">
        <div class="mx-auto sm:py-20 sm:max-w-screen-xl m-auto items-center flex flex-col gap-12">
          <div>
            <img src="/check-circle.svg" class="mx-auto py-8 md:w-12" />
            <h1 class="text-xl md:text-3xl text-isca-red font-medium">Parabéns</h1>
          </div>

          <div class="mx-auto px-3">
            <p class="text-xl md:text-4xl font-medium leading-relaxed">
              Agradeço pela confiança, seu e-book será enviado para o seu e-mail em 5 minutos. Enquanto isso, que tal conhecer mais sobre o novo treinamento <strong>FULLSTACK TURBO</strong> da TipsCode?
            </p>
          </div>

          <div class="mx-auto px-3">
            <a href="/curso-fullstack-turbo" class="py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-red text-white rounded-md shadow-md w-full md:w-2/6">Conhecer Treinamento</a>
          </div>

          <Footer
            class={{
              footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-dark',
              p: 'text-center sm:text-center w-full',
            }}
            src="./TipsCodelogo.png"
          />
        </div>
      </div>
    </>
  );
}
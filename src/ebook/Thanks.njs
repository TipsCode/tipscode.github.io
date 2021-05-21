
export default function Thanks() {

  return (
    <div class="bg-tips-dark text-white text-center tracking-wide">
      <div class="px-4 py-10 sm:py-20 sm:max-w-screen-xl m-auto items-center flex flex-col gap-12">
        <div>
          <img src="/check-circle.svg" class="mx-auto py-8 md:w-12" />
          <h1 class="text-xl md:text-3xl text-isca-red font-medium">Parabéns</h1>
        </div>

        <p class="text-xl md:text-4xl font-medium leading-relaxed">
          Agradeço pela confiança, seu e-book será enviado para o seu e-mail em 5 minutos. Enquanto isso, que tal conhecer mais sobre o novo treinamento <strong>FULLSTACK TURBO</strong> da TipsCode?
        </p>

        <button type="submit" class="py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-red text-white rounded-md shadow-md w-full md:w-2/6">Conhecer Treinamento</button>

        <div class="mt-2 md:mt-24">
          <img src="/TipsCodelogo.png" class="w-28" />
        </div>
      </div>
    </div>
  );
}
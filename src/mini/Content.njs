export default function Content() {
  return (
    <section class="bg-white">
      <div class="px-5 sm:max-w-screen-xl sm:mx-auto flex flex-col lg:flex-row">
        <div class="self-center lg:w-1/6">
          <img src="./message.png" />
        </div>
        <div class="lg:w-5/6 flex flex-col lg:flex-row pt-24">
          <div
            class="flex flex-col lg:w-1/3 mx-auto lg:mx-0 pb-20 rounded-md lg:rounded-none lg:rounded-l-lg  mt-4 z-50"
          >
            <div class="flex-1 text-tips-dark text-opacity-80 rounded-t rounded-b-none overflow-hidden px-5">

              <div class="w-full">
                <img class="mx-auto" src="./redbird-midflap.png" />
              </div>
              <div class="p-4 text-xl lg:text-xl font-bold text-center">
                Manipulação do DOM
              </div>
            </div>

          </div>

          <div class="hidden lg:block">
            <img src="./pipe-green.png" class="w-4" />
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 mt-4 pb-20 z-50 rounded-md lg:rounded-none"
          >
            <div class="flex-1 text-tips-dark text-opacity-80 rounded-t rounded-b-none overflow-hidden px-5">

              <div class="w-full">
                <img class="mx-auto" src="./yellowbird-downflap.png" />
              </div>
              <div class="p-4 text-xl lg:text-xl font-bold text-center">
                Animações com JavaScript
              </div>

            </div>

          </div>

          <div class="hidden lg:block">
            <img src="./pipe-green.png" class="w-4" />
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 pb-20 rounded-md lg:rounded-none lg:rounded-r-lg mt-4 z-50"
          >
            <div class="flex-1 text-tips-dark text-opacity-80 rounded-t rounded-b-none overflow-hidden px-5">

              <div class="w-full">
                <img class="mx-auto" src="./bluebird-upflap.png" />
              </div>
              <div class="p-4 text-xl lg:text-xl font-bold text-center">
                Layout com CSS3
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
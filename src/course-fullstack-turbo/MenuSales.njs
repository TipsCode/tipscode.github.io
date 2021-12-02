export default function MenuSales() {

  return (
    <nav id="header" class="z-50 w-full top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-center sm:justify-between mt-0 py-2">

        <div class="flex items-center">
          <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <img src="/TipsCodelogo.png" alt="TipsCode" loading="lazy" width="186" height="66" />
          </a>
        </div>
        <div class="lg:hidden">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <p class="inline-block py-2 px-4 text-white font-bold no-underline">WhatsApp: (88)9.9762-3061</p>
            </li>

          </ul>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <p class="inline-block py-2 px-4 text-white font-bold no-underline" href="#">WhatsApp: (88)9.9762-3061</p>
            </li>
          </ul>
          <a href="https://pay.hotmart.com/A43229044U?checkoutMode=10&offDiscount=30-off" id="navAction" class="mx-auto lg:mx-0 bg-tips-green text-white font-bold rounded-md mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Inscreva-se
          </a>
        </div>
      </div>

    </nav>
  );
}
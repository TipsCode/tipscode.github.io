
function VideoImage() {
  return (
    <svg width="485" height="329" viewBox="0 0 485 329" fill="none">
      <g filter="url(#filter0_d)">
        <rect x="10" y="2" width="465" height="309" rx="6" fill="#B8C4FF" />
      </g>
      <circle cx="242" cy="157" r="25" fill="#798FFE" />
      <path d="M255.5 156.134C256.167 156.519 256.167 157.481 255.5 157.866L236 169.124C235.333 169.509 234.5 169.028 234.5 168.258V145.742C234.5 144.972 235.333 144.491 236 144.876L255.5 156.134Z" fill="white" />
      <defs>
        <filter id="filter0_d" x="0" y="0" width="485" height="329" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.165278 0 0 0 0 0.186184 0 0 0 0 0.291667 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function Link({ children }) {
  return (
    <li class="mt-9 py-3 px-16 shadow-lg rounded-md bg-gray-50 font-semibold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-center">
      <a href="#" class="button-color text-tips-gray-dark text-opacity-80">
        {children}
      </a>
    </li>
  );
}

export default function Categories() {
  return (
    <section class="flex-col my-16 sm:my-28">
      <div class="bg-categories bg-center bg-no-repeat bg-contain mx-3 overflow-hidden">

        <h3 class="text-center text-5xl text-tips-blue font-bold">Conteúdos gratuitos no <br /> nosso canal</h3>

        <div class="container mx-auto px-4 sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 flex flex-wrap sm:flex-nowrap sm:items-center justify-center sm:justify-around">
          <div class="mt-10 sm:mt-none order-2 sm:order-1">
            <ul>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz8hPNCSljrkhwSZnKUtqQxm"> Vanila js </Link>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz8fIwgYbwbIlwIMhoDic-GK"> Lógica </Link>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz_n7WJc0Q8YPzvA-hYPeXRU"> React js </Link>
              <Link href="https://youtu.be/dtJPYIXf4Sc"> Vue js </Link>
            </ul>
          </div>

          <div class="mt-10 sm:mt-none order-1 sm:order-2">
            <VideoImage />
          </div>

          <div class="sm:mt-10 sm:mt-none order-3">
            <ul>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz-a2X-dRL_Lqbcv5ZZrFfeP"> HTML 5</Link>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz-Fn6iaV3x4pcqVEwPb5v7q"> CSS 3 </Link>
              <Link href="https://youtube.com/playlist?list=PLw608KLEKJz_oE8wMWnMLZAEwGvWmVl-8"> Node js </Link>
              <Link href="https://youtu.be/jwEUGTy2RKs"> Nullstack </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
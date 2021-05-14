export default function CardMoreDetails({ src, alt, contentDiv, contentP }) {

  return (
    <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 pb-20 rounded-md lg:rounded-none lg:rounded-l-lg  mt-4 z-40 bg-tips-gray-dark bg-opacity-90">
      <div class="flex-1 text-white rounded-t rounded-b-none overflow-hidden px-5">

        <div class="w-full">
          <img class="mx-auto" src={src} alt={alt} loading="lazy" width="100" height="100" />
        </div>

        <div class="p-4 text-xl lg:text-3xl font-bold text-center">
          { contentDiv }
        </div>

        <p class="w-full text-center text-sm">
          { contentP }
        </p>

      </div>

    </div>
  );
}
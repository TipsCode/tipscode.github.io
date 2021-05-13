export default function CardDetail({ srcName, content, nameAlt }) {

  return (
    <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
      <div class="flex-1 overflow-hidden text-center">
        <div class="w-full font-bold text-xl items-center px-6 mb-6">
          <img class="mx-auto " src={srcName} alt={nameAlt} />
        </div>
        <p class="text-white text-lg px-6 mb-5">
          { content }
        </p>
      </div>
    </div>
  );
}
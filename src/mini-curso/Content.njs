function Item({ title, src }) {
  return (
    <li class="flex flex-row justify-between bg-tips-gray-dark bg-opacity-80 w-full px-8 py-2 cursor-pointer rounded-md mb-2">
      <p class="text-white text-lg font-medium"> {title} </p>
      <span>
        <img src={src} class="w-8" />
      </span>
    </li>
  );
}

export default function Content() {
  return (
    <div class="py-10 px-4 sm:max-w-screen-xl sm:mx-auto  sm:flex flex-col">
      <div class="py-20">
        {/* <video src="" /> */}
        <div class="px-2">
          <h1 class="text-2xl text-white font-medium">Aula 01 - Lorem ipsom sit dolor amet</h1>
        </div>
      </div>

      <div>
        <ul>
          <Item title="Aula 01 - Lorem ipsom sit dolor amet" src="/check-circle-green.svg" />
          <Item title="Aula 02 - Lorem ipsom sit dolor amet" src="/unchecked-circle.svg" />
          <Item title="Aula 03 - Lorem ipsom sit dolor amet" src="/unchecked-circle.svg" />
          <Item title="Aula 04 - Lorem ipsom sit dolor amet" src="/unchecked-circle.svg" />
        </ul>
      </div>
    </div>
  );
}
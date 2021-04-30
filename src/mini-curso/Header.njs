
function Check() {
  return (
    <li>
      <span>
        <img src="check-circle-green.svg" class="w-6" />
      </span>
    </li>
  );
}

export default function Header() {
  return (
    <div class="px-4 sm:max-w-screen-xl sm:mx-auto  sm:flex justify-between">
      <div id="logo">
        <img src="./TipsCodelogo.png" />
      </div>
      <ul class="flex justify-between p">
        <Check />
        <Check />
        <Check />
        <Check />
      </ul>
    </div>
  );
}
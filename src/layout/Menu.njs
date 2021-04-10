import Nullstack from "nullstack";

class Navigation extends Nullstack {
  
  renderLink({ children, href, router }) {
    const active = router.url === href;
    return (
      <li class={`${active ? "font-bold" : ""} md:ml-4`}>
        <a
          class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
          href={href}
        >
          {children}
        </a>
      </li>
    );
  }

  renderIdentity() {
    return (
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <a class="no-underline text-grey-darkest hover:text-black" href="#">
          <figure>
            <img src="/tipscode-logo-1.svg" />
          </figure>
        </a>

        <a class="text-black hover:text-orange md:hidden" href="#">
          <i class="fa fa-2x fa-bars"></i>
        </a>
      </div>
    );
  }

  render() {
    return (
      <>
        <div class="fixed w-full top-0 left-0 p-4 pb-0 shadow-lg md:pb-4 h-24 bg-white">
          <div class="container mx-auto px-4 flex justify-between items-center">
            <Identity />
            <nav>
              <ul class="list-reset md:flex md:items-center">
                <Link href="/"> Home </Link>
                <Link href="/artigos"> Blog </Link>
                <Link href="/sobre"> Sobre </Link>
                <Link href="/contato"> Contato </Link>
                <Link href="/ebook"> E-book </Link>
              </ul>
            </nav>
            <a href="/curso" class="button-color p-4 rounded-lg bg-green-300">
              FullStack Turbo
            </a>
          </div>
        </div>
        <div class="h-24"></div>
      </>
    );
  }

}

export default Navigation;

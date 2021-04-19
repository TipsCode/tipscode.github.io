import Nullstack from "nullstack";
import Bars from "poisonicon/bars/stroke";
import Ex from "poisonicon/ex/stroke";

class Navigation extends Nullstack {

  expanded = false;

  renderLink({ children, href }) {
    return (
      <a
        href={href}
        class="w-full sm:w-auto text-tips-gray-dark border-b sm:border-0 border-gray-100 p-2 font-lg hover:text-tips-blue items-center flex"
      >
        {children}
      </a>
    );
  }
  
  render() {
    return (
      <>
        <header class="fixed w-full bg-tips-light top-0 left-0">
          <div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center flex-wrap py-4">
            <div class="w-full sm:w-auto justify-between sm:justify-self-start sm:px-0 items-center flex">
              <a href="/">
                <img src="/tipscode-logo-1.svg" alt="TipsCode" />
              </a>
              <span
                onclick={{ expanded: !this.expanded }}
                class="flex items-center sm:hidden"
              >
                <element
                  tag={this.expanded ? Ex : Bars}
                  height={20}
                  class="text-tips-gray-dark text-opacity-60"
                />
              </span>
            </div>
            <nav
              class={`flex items-center flex-wrap sm:px-0 mt-2 sm:mt-0 ${
                !this.expanded && "hidden sm:flex"
              }`}
            >
              <Link href="/"> Home </Link>
              <Link href="/artigos"> Blog </Link>
              <Link href="/sobre"> Sobre </Link>
              <Link href="/contato"> Contato </Link>
              <Link href="/ebook"> E-book </Link>
            </nav>
            <div
              class={`flex w-full sm:w-auto mt-4 sm:mt-0 ${
                !this.expanded && "hidden sm:flex"
              }`}
            >
              <a
                href="/curso"
                onclick={{ expanded: false }}
                class="bg-tips-blue text-white px-3 py-2 border border-tips-blue rounded hover:bg-white hover:text-tips-blue w-full sm:w-auto"
              >
                Full-Stack Turbo
              </a>
            </div>
          </div>
        </header>
        <div class="h-24"></div>
      </>
    );
  }
}

export default Navigation;

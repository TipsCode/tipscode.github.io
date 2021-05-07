import Nullstack from 'nullstack';

import NullstackLogo from 'nullstack/logo';

class Footer extends Nullstack {

  renderLink({ nameClass, url }) {

    return (
      <li class="inline-block ml-4">
        <a href={url} target="_blank" class="text-isca-red hover:text-white" rel="noreferrer">
          <span class={nameClass} />
        </a>
      </li>
    );
  }

  render() {
    return (
      <footer class="flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10">

        <figure>
          <a href="/">
            <img src="./TipsCodelogo.png" alt="TipsCode" />
          </a>
          <p class="sm:text-center w-full">
            Todos os direitos reservados - TipsCode
            <strong class="text-left w-full block">CNPJ:41.562.138/0001-61</strong>
          </p>
        </figure>

        <div class="flex flex-wrap justify-center my-8 sm:my-0">
          <div>
            <a href="https://nullstack.app" target="_blank" rel="noopener noreferrer" class="flex justify-center flex-wrap mx-0" title="Desenvolvido com Nullstack">
              <span class="w-full block md:text-center"> Desenvolvido com </span>
              <NullstackLogo height={20} light />
            </a>
          </div>
        </div>

        <ul>
          <Link nameClass="fab fa-facebook fa-2x" url="https://web.facebook.com/tipscodeoficial" />
          <Link nameClass="fab fa-youtube fa-2x" url="https://www.youtube.com/tipscode" />
          <Link nameClass="fab fa-instagram fa-2x" url="https://www.instagram.com/tipscodeoficial/" />
          <Link nameClass="fab fa-github fa-2x" url="https://github.com/alissonsuassuna/" />
          <Link nameClass="fab fa-linkedin fa-2x" url="https://www.linkedin.com/in/alisson-suassuna-5967a8b2/" />
          <Link nameClass="fab fa-twitter fa-2x" url="https://twitter.com/home" />
        </ul>

      </footer>

    );

  }

}

export default Footer;
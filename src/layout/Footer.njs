import Nullstack from "nullstack";

import NullstackLogo from "nullstack/logo";

class Footer extends Nullstack {

  renderLink( { nameClass, url } ) {

    return (
      <li class="inline-block ml-4">
        <a href={url} target="_blank"> 
          <i class={nameClass}></i>
        </a>
      </li>
    )
  }

  render() {
    return (
      <footer class="flex flex-col items-center py-16 sm:flex-row sm:justify-around">
      
          <figure>
              <a href="/">
                  <img src="/tipscode-logo-1.svg" alt="TipsCode" />
              </a>
          </figure>

          <div>
            <p class="text-center">Todos os direitos reservados - TipsCode
               <br /> <strong>CNPJ:41.562.138/0001-61</strong>  <br />
               Desenvolvido com</p>
              <div class="text-center">
                <NullstackLogo height={20} />
              </div>

          </div>

          <ul>
            <Link nameClass="fab fa-facebook fa-2x" url="https://web.facebook.com/tipscodeoficial" />
            <Link nameClass="fab fa-youtube fa-2x" url="https://www.youtube.com/tipscode" /> 
            <Link nameClass="fab fa-instagram fa-2x" url="https://www.instagram.com/tipscodeoficial/" />
            <Link nameClass="fab fa-github fa-2x" url="https://github.com/alissonsuassuna/" />
            <Link nameClass="fab fa-linkedin fa-2x" url="https://www.linkedin.com/in/alisson-suassuna-5967a8b2/" />
            <Link nameClass="fab fa-twitter fa-2x" url="https://twitter.com/home"/>
          </ul>
      
      </footer>

    )
    
  }
}

export default Footer;
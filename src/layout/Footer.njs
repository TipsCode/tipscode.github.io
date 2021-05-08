import NullstackLogo from 'nullstack/logo';

function Link({ class: className, url }) {
  const paths = url.split('/');
  const title = paths[paths.length - 1];
  return (
    <li class="inline-block ml-4">
      <a href={url} target="_blank" class="text-tips-blue hover:text-tips-green" rel="noreferrer" title={title}>
        <span class={className} />
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer class="flex flex-col items-center py-16 sm:flex-row sm:justify-around">

      <figure>
        <a href="/">
          <img src="/tipscode-logo-1.svg" alt="TipsCode" width="155" height="44" />
        </a>
        <p class="sm:text-center w-full">
          Todos os direitos reservados - TipsCode
          <strong class="text-center sm:text-left w-full block">CNPJ:41.562.138/0001-61</strong>
        </p>
      </figure>

      <div class="flex flex-wrap justify-center my-8 sm:my-0">
        <div>
          <a href="https://nullstack.app" target="_blank" rel="noopener noreferrer" class="flex justify-center flex-wrap" title="Desenvolvido com Nullstack">
            <span class="w-full block text-center"> Desenvolvido com </span>
            <NullstackLogo height={20} />
          </a>
        </div>
      </div>

      <ul>
        <Link class="fab fa-facebook fa-2x" url="https://web.facebook.com/tipscodeoficial" />
        <Link class="fab fa-youtube fa-2x" url="https://www.youtube.com/tipscode" />
        <Link class="fab fa-instagram fa-2x" url="https://www.instagram.com/tipscodeoficial" />
        <Link class="fab fa-github fa-2x" url="https://github.com/alissonsuassuna" />
        <Link class="fab fa-linkedin fa-2x" url="https://www.linkedin.com/in/alisson-suassuna-5967a8b2" />
        <Link class="fab fa-twitter fa-2x" url="https://twitter.com/tipscodeoficial" />
      </ul>

    </footer>
  );

}
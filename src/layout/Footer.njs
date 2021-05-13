import NullstackLogo from 'nullstack/logo';
import Facebook from '../icons/Facebook';
import Github from '../icons/Github';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Youtube from '../icons/Youtube';

function Link({ class: className, url, icon: Icon }) {
  const paths = url.split('/');
  const title = paths[paths.length - 1];
  return (
    <li class="inline-block ml-4">
      <a href={url} title={title} target="_blank" rel="noreferrer"  class="text-tips-blue hover:text-tips-green">
        <Icon size={24} />
      </a>
    </li>
  );
}

export default function Footer({ class: classes, src}) {
  return (
    <footer class={classes.footer}>

      <figure>
        <a href="/">
          <img src={src} alt="TipsCode" width="155" height="44" />
        </a>
        <p class={classes.p}>
          Todos os direitos reservados - TipsCode
          <strong class="text-center sm:text-left w-full block">CNPJ:41.562.138/0001-61</strong>
        </p>
      </figure>

      <div class="flex flex-wrap justify-center my-8 sm:my-0">
        <div>
          <a href="https://nullstack.app" target="_blank" rel="noopener noreferrer" class="flex justify-center flex-wrap" title="Desenvolvido com Nullstack">
            <span class="w-full block text-center text-tips-dark text-opacity-80"> Desenvolvido com </span>
            <NullstackLogo height={20} />
          </a>
        </div>
      </div>

      <ul>
        <Link url="https://web.facebook.com/tipscodeoficial" title="Facebook" icon={Facebook} />
        <Link url="https://github.com/alissonsuassuna" title="Github" icon={Github} />
        <Link url="https://www.youtube.com/tipscode" title="Youtube" icon={Youtube} />
        <Link url="https://www.instagram.com/tipscodeoficial" title="Instagram" icon={Instagram} />
        <Link url="https://twitter.com/alissonsuassuna" title="Twitter" icon={Twitter} />
      </ul>

    </footer>
  );

}
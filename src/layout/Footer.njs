import Nullstack from "nullstack";

import YouTube from '../../icons/Youtube'
import Twitter from '../../icons/Twitter'

class Footer extends Nullstack {

  renderLink({ href, icon: Icon, title }) {
    return (
        <a 
          href={href} 
          title={title}
          target="_blank"
          rel="noopener"
          class="text-green-600 hover:text-white inline-block"
        >
          <Icon size={45} />
        </a>
      )
    }
  render() {
    return (
      <footer class="flex-col sm:flex py-16 sm:justify-between max-w-screen-xl mx-auto items-center flex-wrap">
        <figure>
            <a href="/">
                <img src="/tipscode-logo-1.svg" alt="TipsCode" />
             </a>
        </figure>

        <ul class="flex">
          <Link href="https://www.youtube.com/nullstack" title="Youtube" icon={YouTube}  />
          <Link href="https://www.youtube.com/nullstack" title="Twitter" icon={Twitter}  />
        </ul>
      </footer>

    )
    
  }
}

export default Footer;
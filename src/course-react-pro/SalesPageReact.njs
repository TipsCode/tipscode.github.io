import Nullstack from 'nullstack';
import Footer from '../layout/Footer';
import Faq from '../course-fullstack-turbo/Faq';
import HeroReact from '../course-react-pro/HeroReact';
import CourseDetails from '../course-fullstack-turbo/CourseDetails';


class SalesPageReact extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png'
  }


  render({ router }) {
    return (
      <div class="bg-tips-dark">
        <div>
           <FabePixelSales id="294337825339805" />
        </div>
        <HeroReact />
        <Faq />
        <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
             p: 'text-center sm:text-center w-full',
           }
         }
          src="/TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default SalesPageReact;
import Nullstack from 'nullstack';
import Hero from './Hero';
import Categories from './Categories';
import Journey from './Journey';
import Practicing from './Practicing';
import Bonus from './Bonus';
import CallToActtion from './CallToActtion';
import Faq from '../course-fullstack-turbo/Faq';
import Footer from '../layout/Footer';
import Testimonials from './Testimonials';
import CourseDetails from './CourseDetails';
import DetailsCard from './DetailsCard';
import './hero.css';

class SalesPageReactPro extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso React.JS PRO`;
    page.description = `${project.name} Torne-se um profissional em ReactJS`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png';
  }

  render() {
    return (
      <div class="bg-zing">
        <Hero />
        <Categories />
        <DetailsCard />
        <Journey />
        <Practicing />
        <Bonus />
        <Testimonials />
        <CallToActtion />
        <Faq classe="big-zing" />
        <CourseDetails />
        <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white',
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

export default SalesPageReactPro;
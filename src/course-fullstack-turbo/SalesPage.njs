import Nullstack from 'nullstack';

import Hero from './Hero';
import WhatLearn from './WhatLearn';
import MoreDetails from './MoreDetails';
import Testimonials from './Testimonials';
import Projects from './Projects';
import CallToAction from './CallToAction';
import Teacher from './Teacher';
import Faq from './Faq';
import Footer from '../layout/Footer';
import Workshop from './Workshop';
import Print from './Print';
import Warranty from './Warranty';
import Argumentation from './Argumentation';
import StepByStep from './StepByStep';
import CoursePlatform from './CoursePlatform';

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png';
  }

  render() {
    return (
      <div class="bg-black" style="background-colo: '#040404'; color: #fff; height: 100vh; text-align: center;">
        {/* <Hero />
        <Warranty />
        <Print />
        <Projects />
        <WhatLearn />
        <Argumentation />
        <StepByStep />
        <CoursePlatform />
        <MoreDetails />
        <Workshop />
        <CallToAction />
        <Testimonials />
        <Teacher />
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
        /> */}
        <h1 style="
    font-size: 50pt;">O full full stack turbo está com um novo endereço</h1>
        <h2>
          <h3 style="
    font-size: 35pt;">Clique aqui</h3>
          <a style="
    font-size: 30pt; border: solid 1px green;" href="https://www.tipscode.tech" target='_blank'>tipscode.tech</a>
        </h2>
      </div>
    );
  }

}

export default SalesPage;
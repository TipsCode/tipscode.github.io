import Content from './Content';
import Hero from './Hero';
import CallToAction from './CallToAction';
import Footer from '../layout/Footer';

export default function MiniCourse() {
  return (
    <div>
      <Hero />
      <Content />
      <CallToAction />
      <Footer class={ {
           footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around',
             p: 'text-center sm:text-center w-full text-tips-dark text-opacity-80'
        } } src="./tipscode-logo-1.svg" />

    </div>
  );
}
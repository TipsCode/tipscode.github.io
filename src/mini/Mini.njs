import Content from './Content';
import Hero from './Hero';
import CallToAction from './CallToAction';
import Footer from '../layout/Footer';

export default function Mini() {
  return (
    <div>
      <Hero />
      <Content />
      <CallToAction />
      <Footer />
    </div>
  );
}
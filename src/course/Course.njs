import Nullstack from 'nullstack';

import Hero from './Hero';
import Initial from './Initial';
import WhatLearn from './WhatLearn';
import Mais from './Mais';
import Bonus from './Bonus';
import Testimonials from './Testimonials'
import Calltoaction from './Calltoaction'
import Faq from './Faq';

class Course extends Nullstack {
  
  render() {
    return (
      <div> 
        <Hero />
        <Initial />
        <WhatLearn />
        <Mais />
        <Bonus />
        <Testimonials /> 
        <Calltoaction />   
        <Faq />   
      </div>
    )
  }

}

export default Course;
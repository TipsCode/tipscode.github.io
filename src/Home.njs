import Nullstack from 'nullstack';
//import './Home.scss';

import Navigation from './components/menu/Navigation'
//import "tailwindcss/tailwind.css"
//import Logo from 'nullstack/logo';




class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
    page.locale = 'pt-BR';
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }


  render({ project }) {
    return (   
      <Navigation />
    )
  }

}

export default Home;
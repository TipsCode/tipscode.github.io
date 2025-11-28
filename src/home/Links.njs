import Nullstack from 'nullstack';
import "./Links.css"

class Links extends Nullstack {

  render() {
    return (
    

      <section className='content-main'>
        <div class="card">
            <h1 class="title">Links da TipsCode</h1>
            <p class="subtitle">Acesse nossas redes oficiais e nossos cursos completos</p>

            <h2 class="section-title">Cursos</h2>
            <div class="links">
              <a href="https://www.tipscode.tech" class="btn">Curso Full Stack Turbo</a>
              <a href="https://www.n8n.tipscode.tech" class="btn">Curso de N8N</a>
              <a href="https://www.python.tipscode.tech" class="btn">Curso de Python</a>
              <a href="https://www.start.tipscode.tech" class="btn">Curso Start Turbo</a>
            </div>

            <h2 class="section-title">Redes Sociais</h2>
            <div class="links">
              <a href="https://www.youtube.com/@TipsCode/videos" class="btn">YouTube</a>
              <a href="https://www.tiktok.com/@tipscodeoficial" class="btn">TikTok</a>
              <a href="https://www.instagram.com/tipscodeoficial/" class="btn">Instagram</a>
              <a href="https://www.linkedin.com/company/tipscode/" class="btn">LinkedIn</a>
            </div>


            
        </div>
   
      </section>
    
     
      
    
  
    );
  }

}

export default Links;
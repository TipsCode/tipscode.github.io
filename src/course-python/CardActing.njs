import "./card-acting.css"

export default function CardActing() {


    return (
      <>
      <section id="card-acting">

          <h1>Você se tornará especialista em</h1>
            
         <div class=" container-card-acting">

            <div class ="card-body-acting">
              <img src="/sales-page-python-img/image-web.png" alt="web" />
              <p>Desenvolvimento Web</p>
            </div>

            <div class ="card-body-acting">
              <img src="/sales-page-python-img/image-ai.png" alt="ai" />
              <p>Inteligência Artificial IA</p>
            </div>

            <div class ="card-body-acting">
                <img src="/sales-page-python-img/image-auto.png" alt="auto" />
                <p>Automação e Robótica</p>
            </div>

         </div>
      </section>
      </>
    );
  }
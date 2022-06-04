import Nullstack from 'nullstack';
import StudentTestimonial from './StudentTestimonial';


class Testimonials extends Nullstack {

  render() {
    return (
        <div class="container mx-auto">
            <div class="mb-8 text-center">
                <h2 class="text-4xl font-bold text-white">Veja o que <br />estão falando 💛</h2>
            </div>

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
                
                <StudentTestimonial
                testimonal="Excelente a aula, bem clara e com uma didática que qualquer pessoa entenderia. Parabéns"
                author="Andre Doctors"
                office="Aluno"
                
                />

                <StudentTestimonial
                testimonal="Conteúdo, devagar sem pressa, do básico ao avançado. Assim que é bom para quem está começando. 
                                Já comprei alguns cursos, que tinha um conteúdo bagunçado e isso deixa você meio perdido e acaba desistindo."
                author="Cosmo Andrade Felix"
                office="Aluno"
                
                />

                <StudentTestimonial
                testimonal="Curso muito bem elaborado pelo professor Alisson e onde tem uma dinámica
                                    extremamente facil de aprender, estou graduando o curso superior de ADS e
                                    em outras fortes que busquei não conseguir como estou aprendendo no curso."
                author="Jefferson Ferreira"
                office="Aluno"
                
                />

                <StudentTestimonial
                testimonal="Estou gostando muito dos conteúdos e da sua didática."
                author="Vitor Paulon"
                office="Seguidor do canal"
                
                />

                <StudentTestimonial
                testimonal="Parabéns pelo conteúdo e didática"
                author="Rafael Alves Florind"
                office="Seguidor do canal"
                
                />
                
                
                <StudentTestimonial
                testimonal="show de bola alisson!! estou na quarta aula e to gostando bastante! didatica otima, e explica sempre os minimos detalhes!"
                author="Munir Arabi"
                office="Seguidor do canal"
                
                />
            </div>
        </div>
    );
  }

}

export default Testimonials;
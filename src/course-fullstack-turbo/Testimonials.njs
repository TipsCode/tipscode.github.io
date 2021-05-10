import Nullstack from 'nullstack';
import Modal from '../layout/Modal';
import StudentTestimonial from './StudentTestimonial';

class Testmonials extends Nullstack {

    modalVisible = false;

    toggleModal() {
      this.modalVisible = !this.modalVisible;
    }


    render() {
      return (
        <>
          <span>
            {this.modalVisible && <Modal onclose={this.toggleModal} />}
          </span>
          <div class="container mx-auto">
            <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 text-center text-white md:w-5/6 mx-auto">O que estão falando sobre o curso Fullstack Turbo da TipsCode</h2>

            <div class="flex items-center justify-center">

              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

                <StudentTestimonial
                  nameSrc="./img-depoimento-guilherme.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Guilherme Nogueira"
                  studentsName="Guilherme Nogueira"
                />

                <StudentTestimonial
                  nameSrc="/img-depoimento-mihai.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Mihai"
                  studentsName="Mihai"
                />

                <StudentTestimonial
                  nameSrc="/img-depoimento-felipe.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Felipe Loures"
                  studentsName="Felipe Loures"
                />

                <StudentTestimonial
                  nameSrc="/img-depoimento-ricardo.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Ricardo"
                  studentsName="Ricardo"
                />

                <StudentTestimonial
                  nameSrc="/img-depoimento-claudio.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Claudio"
                  studentsName="Claudio"
                />

                <StudentTestimonial
                  nameSrc="./img-depoimento-joneivison.png"
                  nameAlt="Depoimento sobre o curso desenvolvedor full stack, aluno Joneivison"
                  studentsName="Joneivison"
                />
              </div>
            </div>
          </div>
        </>
      );
    }

}

export default Testmonials;
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

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="./img-depoimento-ari-silva.png"
                    nameAlt="Ari Silva"
                    studentsName="Ari Silva" 
                  />
                </div>

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="./img-depoimento-guilherme.png"
                    nameAlt="Guilherme Nogueira"
                    studentsName="Guilherme Nogueira"
                  />
                </div>

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="/img-depoimento-mihai.png"
                    nameAlt="Mihai"
                    studentsName="Mihai"
                  />
                </div>

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="/img-depoimento-felipe.png"
                    nameAlt="Felipe Loures"
                    studentsName="Felipe Loures"
                  />
                </div>

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="/img-depoimento-ricardo.png"
                    nameAlt="Ricardo"
                    studentsName="Ricardo"
                  />
                </div>

                <div onclick={this.toggleModal}>
                  <StudentTestimonial
                    nameSrc="/img-depoimento-claudio.png"
                    nameAlt="Claudio"
                    studentsName="Claudio"
                  />
                </div>

                <div onclick={this.toggleModal}>

                  <StudentTestimonial
                    nameSrc="./img-depoimento-joneivison.png"
                    nameAlt="Joneivison"
                    studentsName="Joneivison"
                  />
                </div>

              </div>
            </div>
          </div>
        </>
      );
    }

}

export default Testmonials;
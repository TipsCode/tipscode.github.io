import Nullstack from 'nullstack';
import Modal from '../layout/Modal';

class StudentTestimonial extends Nullstack {

  modalVisible = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  render({ nameSrc, nameAlt, studentsName, video }) {
    return (
      <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2" onclick={this.toggleModal}>
        <img
          class="w-full cursor-pointer"
          src={nameSrc}
          alt={nameAlt}
          loading="lazy" width="320" height="222" 
        />

        <div class="px-6 py-6  bg-tips-blue">
          <div class="font-bold text-2xl mb-3 text-white">
            { studentsName }
          </div>
          <p class="text-grey-darker text-base text-indigo-100">
            Aluno TipsCode Turbo.
          </p>
        </div>

        <span>

          {this.modalVisible && <Modal video={video} onclose={this.toggleModal} />}
        </span>
      </div>
    );
  }

}

export default StudentTestimonial;
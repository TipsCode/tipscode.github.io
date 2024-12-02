import Nullstack from 'nullstack';
import './Checkout.css'

class Checkout extends Nullstack {

    telefone = ''

     // runs in the client
    telefoneInput({event}) {
 
        let value = event.target.value;
        value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona os parênteses ao DDD
        value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen ao número
        this.telefone = value

    }
   


  render() {
    return (
        // bg-[#1e1e1e]
      <section class="main-checkout-python">
        <div class="modal-content">
            <figure class="btn-close-modal">
                <img class="m-auto" src="/TipsCodelogo.png" alt="" />
            </figure>
        
            <h1 class="m-auto text-3xl mt-10 min-[700px]:text-3xl min-[1000px]:text-7xl w-80 min-[700px]:w-[41rem] 
            min-[1000px]:w-[43rem] font-semibold leading-10 min-[700px]:leading-[70px] min-[1000px]:leading-[103.2px]"
            >Você está quase lá para aprender <span class="text-highlight inline-block min-[700px]:uppercase 
            min-[700px]:bg-[#FFDA17] min-[700px]:text-[#0085FF] min-[700px]:rounded-[10px] 
            min-[700px]:p-3 min-[1000px]:text-6xl">Python</span></h1>
            <form action="https://api.sheetmonkey.io/form/5oYvyCpAoQ12m9mMG8dFDh" method="post" class="form">
                <input type="text" name="name" placeholder="Nome" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <input type="tel" name="phone" id="telefone" value={this.telefone} oninput={this.telefoneInput} placeholder="(99) 99999-9999" maxlength="15" placeholder="DDD + telefone" required>
                    {this.telefone}
                </input>

                <div class="bg-[#5FE2FF] w-full h-[43px] flex flex-col justify-center items-center px-[22px] py-[12px] rounded-[100px]">
                    <button type='submit' class="text-[16px] text-[#1A1C1E] font-[400] font-poppins">Quero me matricular</button>
                </div>
               
            </form>
           
        </div>
      </section>
    );
  }

}

export default Checkout;
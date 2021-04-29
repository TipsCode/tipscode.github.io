import Nullstack from 'nullstack';

class DeliveryEbook extends Nullstack {
    render() {
        return (
            <div class="bg-tips-dark text-white text-center tracking-wide">
                <div class="px-4 py-10 sm:py-20 sm:max-w-screen-xl m-auto items-center flex flex-col gap-12">
                    <div class="mt-0    ">
                        <img src="/TipsCodelogo.png" class="w-28"/>
                    </div>

                    <div>
                        <h1 class="text-xl md:text-4xl text-white font-semibold">Aqui está o seu e-book</h1>
                        <img src="/e-book-dark.png" class="mx-auto py-8 md:w-56" />
                    </div>

                    <p class="text-xl md:text-2xl font-medium leading-relaxed">
                        Para fazer o Download clique no botão <br /> abaixo
                    </p>

                    <button type="submit" class="py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-red text-white rounded-md shadow-md w-full md:w-2/6 xl:w-1/6">Pegar e-book</button>
                </div>
            </div>
        )
    }
}

export default DeliveryEbook;
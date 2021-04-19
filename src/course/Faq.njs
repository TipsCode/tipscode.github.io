import Nullstack from 'nullstack';
import "./Faq.scss"

class Faq extends Nullstack {
    render() {
        return (
            <div class="bg-tips-dark">
                <div class="container mx-auto">
                    <div class="w-full md:w-3/5 mx-auto p-8">
                        <h1 class="text-center text-5xl font-bold text-white my-16">Perguntas frequentes</h1>
                        <div class="shadow-md">
                            <div class="tab w-full overflow-hidden border-t">
                                <input
                                    class="absolute opacity-0 "
                                    id="tab-multi-one"
                                    type="checkbox"
                                    name="tabs"></input>
                                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-one">Label One</label>
                                <div
                                    class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="p-5 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit
                                        sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum?
                                        Saepe, itaque.</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input
                                    class="absolute opacity-0"
                                    id="tab-multi-two"
                                    type="checkbox"
                                    name="tabs"></input>
                                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-two">Label Two</label>
                                <div
                                    class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="p-5 text-wihte">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit
                                        sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum?
                                        Saepe, itaque.</p>
                                </div>
                            </div>
                            <div class="tab w-full overflow-hidden border-t">
                                <input
                                    class="absolute opacity-0"
                                    id="tab-multi-three"
                                    type="checkbox"
                                    name="tabs"></input>
                                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-three">Label Three</label>
                                <div
                                    class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                                    <p class="p-5 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit
                                        sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum?
                                        Saepe, itaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Faq;
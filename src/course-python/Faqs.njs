import './Faqs.css'
import Button from './Button.njs'

// Criado um array com as perguntas e respostas do FAQ
const source = [
    {
        question: "Vou conseguir acompanhar mesmo sendo iniciante?", response: "Com certeza! O curso foi feito para aqueles que nunca tiveram contato com programação.",
    },
    {
        question: "Posso começar sem nenhum conhecimento?",
        response: "Claro que pode! Você vai aprender do zero, tudo que precisa saber para dominar Python.",
    },
    {
        question: "Qual a garantia do curso?",
        response: "Você tem garantia de até 7 dias. Dessa forma, se por algum motivo quiser o seu dinheiro de volta, devolvemos tudo. Pedimos apenas o motivo do reembolso para que possamos melhorar nossos serviços.",
    },
    {
        question: "O curso possui certificado?",
        response: "Sim, após a conclusão das aulas você receberá imediatamente um certificado de conclusão do curso",
    }
];


export default function Faqs2() {
    return (
        <>
            <div class='faqs'>
                {/*Faqs card*/}
                <div class='faqs-card'>
                    {/*Faqs div*/}
                    <div class='faqs-duvidas'>
                        <p class='texto-faqs'>FAQs</p>
                        <p class='texto-duvidas'>Vamos tirar suas dúvidas</p>
                        <hr class="line"/>
                    </div>
                    {/* Perguntas */}
                    <div class='perguntas-card'>
                        <div class='perguntas-card-div'>
                        {/* Função para iterar sobre o array */}
                        {source.map(item => (
                            <div key={item.question}>
                                <details class="text-[#F6FBFF] py-4">
                                    <summary>{item.question}</summary>
                                    <p class="p-4">{item.response}</p>
                                </details>
                                <hr class="line"/>                      
                            </div>
                            ))}
                        </div>    
                    </div>
                    {/*Ainda tem duvidas */}
                    <div class='duvidas'>
                        <p class='text-[28px] duvidas-texto-principal'>Ainda tem dúvidas ?</p>
                        <p class='text-[20px] duvidas-texto-secundario'>Nosso time te ajuda a</p>
                        {/* <Button type='whatsapp' href="https://wa.me/558897078144?text=Curso%20de%20Python" text='Chama no Whatsapp' class='button-whats'/> */}
                        <a href='https://wa.me/558899073834?text=Curso%20de%20Python' class="flex w-fit items-center bg-[#2BFF59] text-[19px] font-[500] text-black h-[51px] px-[28px] py-[12px] rounded-full hover:bg-[#2AFF59] hover:shadow-[0px_0px_8px_rgba(43,255,89,0.30)] hover:cursor-pointer">Chama no Whatsapp</a>
                    </div>
                </div>
            </div>
        </>
    )
}
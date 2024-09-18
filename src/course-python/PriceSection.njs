import Badge from "./Badge.njs";

const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    .font-poppins {
        font-family: 'Poppins', sans-serif;
    }

    .font-space-mono {
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        font-style: normal;
    }
`;

function CheckIcon() {
    return (
        <div class="w-[24px]">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#F6FBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

function ProsItem(props) {
    return (
        <div class="flex gap-[16px]">
            <CheckIcon />
            <p class={`text-[#F6FBFF] ${props.textSize}`}>{props.text}</p>
        </div>
    )
}

function Button(props) {
    const buttonSize = props.size;

    if (buttonSize === 'mobile') {
        return (
            <div class="bg-[#5FE2FF] w-[289px] h-[43px] flex flex-col justify-center items-center px-[22px] py-[12px] rounded-[100px]">
                <a href="https://pay.kiwify.com.br/Nibdpb1" class="text-[16px] text-[#1A1C1E] font-[400] font-poppins">{props.text}</a>
            </div>
        )
    }
    else if (buttonSize === 'tablet') {
        return (
            <div class="bg-[#5FE2FF] w-[592px] h-[76px] flex flex-col justify-center items-center px-[22px] py-[12px] rounded-[100px]">
                <a href="https://pay.kiwify.com.br/Nibdpb1" class="text-[24px] text-[#1A1C1E] font-[600] font-poppins">{props.text}</a>
            </div>
        )
    }
    else {
        return (
            <div class="bg-[#5FE2FF] w-[592px] h-[76px] flex flex-col justify-center items-center px-[22px] py-[12px] rounded-[100px]">
                <a href="https://pay.kiwify.com.br/Nibdpb1" class="text-[24px] text-[#1A1C1E] font-[600] font-poppins">{props.text}</a>
            </div>
        )
    }

}

function CardMobile() {
    return (
        <>
            <div class="h-[932px] flex flex-col items-center justify-center">
                <div class="w-[411px] flex flex-col items-center gap-[32px] px-[10px] py-[32px]">
                    <Badge type='primary' text="INVESTIMENTO"/>

                    {/* Price Card */}
                    <div class="bg-[#212426] w-[353px] h-[803px] p-[32px] flex flex-col gap-[32px] justfify-center items-center rounded-[20px]">

                        {/* Price div */}
                        <div class="w-[289px] flex flex-col gap-[8px]">
                            <p class="text-[20px] text-[#F6FBFF] font-[600]">12x de</p>
                            <p class="text-[38px] text-[#FFDA17] font-[600]">R$52/91</p>
                            <p class="text-[20px] text-[#F6FBFF] font-[600]">ou R$527,00 à vista</p>
                        </div>

                        {/* Line */}
                        <hr class="w-[289px]"/>

                        {/* Garantia */}
                        <p class="text-[18px] text-[#5FE2FF] font-[400] text-center">7 dias de GARANTIA ou o seu dinheiro de volta</p>

                        {/* Pros */}
                        <div class="w-[289px] flex flex-col gap-[16px] py-[8px]">
                            <ProsItem text="Autonomia e liberdade para criar qualquer coisa. Que tal o próximo Spotify." textSize="text-[16px]"/>
                            <ProsItem text="Alta Empregabilidade, muitas vagas e poucos profissionais de alto nível." textSize="text-[16px]"/>
                            <ProsItem text="Altos Salários, muito acima da média do Brasil e até do mundo." textSize="text-[16px]"/>
                            <ProsItem text="Trabalho Remoto. Sim você pode trabalhar para qualquer empresa, e de qualquer lugar do mundo, até da sua casa." textSize="text-[16px]"/>
                        </div>
                        <Button text="Quero ser Programador" size="mobile"/>
                    </div>
                </div>

            </div>
        </>
    )
}

function CardTablet() {
    return (
        <>
            <div class="h-[1038px] flex flex-col justify-center relative">
                <div class="absolute inset-0 bg-[url('/sales-page-python-img/background.png')] opacity-20" style={{ zIndex: -1 }}></div>
                <div class="relative flex flex-col justify-center items-center gap-[40px]">
                    <Badge type='primary' text="INVESTIMENTO"/>
                    <div class="bg-[#212426] w-[656px] rounded-[20px] relative">
                        {/* Imagens */}
                        <div class="absolute top-[-40px] right-[-110px]">
                            <img src="./sales-page-python-img/ai-losango.png" alt="Image 1" class="h-[184px] w-[130px] object-cover rounded-full"/>
                        </div>
                        <div class="absolute top-[100px] left-[-140px]">
                            <img src="./sales-page-python-img/ai-buble.png" alt="Image 2" class="w-[150px] h-[150xp] object-cover rounded-full"/>
                        </div>
                        <div class="absolute bottom-[20px] right-[-210px] transform -translate-x-1/2">
                            <img src="./sales-page-python-img/square-stack-3d.png" alt="Image 3" class="w-[161px] h-[161px] object-cover rounded-full"/>
                        </div>

                        {/* Conteúdo */}
                        <div class="p-[32px] flex flex-col gap-[32px]">
                            {/* Price div */}
                            <div class="w-[289px] flex flex-col gap-[8px]">
                                <p class="text-[20px] text-[#F6FBFF] font-[600]">12x de</p>
                                <p class="text-[64px] text-[#FFDA17] font-[600]">R$52/91</p>
                                <p class="text-[24px] text-[#F6FBFF] font-[600]">ou R$527,60 à vista</p>
                                {/* Garantia */}
                                <p class="text-[16px] text-[#5FE2FF] font-[400]" style="white-space: nowrap;">7 dias de GARANTIA ou o seu dinheiro de volta</p>
                            </div>
                            {/* Line */}
                            <hr class="w-[592px]"/>

                            <div class="flex flex-col gap-[16px]">
                                <ProsItem text="Autonomia e liberdade para criar qualquer coisa. Que tal o próximo Spotify." textSize="text-[18px]"/>
                                <ProsItem text="Alta Empregabilidade, muitas vagas e poucos profissionais de alto nível." textSize="text-[18px]"/>
                                <ProsItem text="Altos Salários, muito acima da média do Brasil e até do mundo." textSize="text-[18px]"/>
                                <ProsItem text="Trabalho Remoto. Sim você pode trabalhar para qualquer empresa, e de qualquer lugar do mundo, até da sua casa." textSize="text-[18px]"/>
                            </div>
                            <div class="flex justify-center">
                                <Button text="Quero ser Programador" size="tablet"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

function CardDesktop() {
    return (
        <>
            <div class="h-[1038px] flex flex-col justify-center relative">
            <div class="absolute inset-0 bg-[url('/sales-page-python-img/background.png')] opacity-20" style={{ zIndex: -1 }}></div>
                <div class="relative flex flex-col justify-center items-center gap-[40px]">
                    <Badge type='primary' text="INVESTIMENTO"/>
                    <div class="bg-[#212426] w-[656px] rounded-[20px] relative">
                        {/* Imagens */}
                        <div class="absolute top-[-10px] right-[-280px]">
                            <img src="./sales-page-python-img/ai-losango.png" alt="Image 1" class="h-[184px] w-[130px] object-cover rounded-full"/>
                        </div>
                        <div class="absolute top-[200px] left-[-270px]">
                            <img src="./sales-page-python-img/ai-buble.png" alt="Image 2" class="w-[150px] h-[150xp] object-cover rounded-full"/>
                        </div>
                        <div class="absolute bottom-[50px] right-[-370px] transform -translate-x-1/2">
                            <img src="./sales-page-python-img/square-stack-3d.png" alt="Image 3" class="w-[161px] h-[161px] object-cover rounded-full"/>
                        </div>

                        {/* Conteúdo */}
                        <div id="checkout-python" class="p-[32px] flex flex-col gap-[32px]">
                            {/* Price div */}
                            <div class="w-[289px] flex flex-col gap-[8px]">
                                <p class="text-[20px] text-[#F6FBFF] font-[700]">12x de</p>
                                <p class="text-[64px] text-[#FFDA17] font-[600]">R$52/91</p>
                                <p class="text-[24px] text-[#F6FBFF] font-[500]">ou R$527,00 à vista</p>
                                {/* Garantia */}
                                <p class="text-[16px] text-[#5FE2FF] font-[400]" style="white-space: nowrap;">7 dias de GARANTIA ou o seu dinheiro de volta</p>
                            </div>
                            {/* Line */}
                            <hr class="w-[592px]"/>

                            <div class="flex flex-col gap-[16px]">
                                <p class="text-[#F6FBFF] text-[16px]">Includes: </p>
                                <ProsItem text="Autonomia e liberdade para criar qualquer coisa. Que tal o próximo Spotify." textSize="text-[16px]"/>
                                <ProsItem text="Alta Empregabilidade, muitas vagas e poucos profissionais de alto nível." textSize="text-[16px]"/>
                                <ProsItem text="Altos Salários, muito acima da média do Brasil e até do mundo." textSize="text-[16px]"/>
                                <ProsItem text="Trabalho Remoto. Sim você pode trabalhar para qualquer empresa, e de qualquer lugar do mundo, até da sua casa." textSize="text-[16px]"/>
                            </div>
                            <div class="flex justify-center">
                                <Button text="Quero ser Programador" size="desktop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default function PriceSection() {
    return (
        <>
            <style>{fontStyles}</style>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <CardMobile />
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <CardTablet />
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <CardDesktop />
            </div>
        </>
    );
}
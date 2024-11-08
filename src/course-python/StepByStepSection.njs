import Badge from "./Badge.njs";

function Mobile() {
    return (
        <>
            <div class="h-[552px] flex flex-col items-center justify-center gap-[40px] mt-16 px-[32px] py-[40px]">
                <div class='flex flex-col items-center gap-[40px]'>
                    <div class="flex flex-col items-center gap-[16px]">
                        <div>
                            <Badge type='primary' text="MÉTODO"/>
                        </div>
                        <div class="flex flex-col items-center gap-[24px]">
                            <h2 class='font-[600] text-[28px] text-[#F6FBFF]'>Step by Step</h2>
                            <p class='font-[400] text-[16px] text-[#F6FBFF] text-center'>Nosso método Step by Step é como uma trilha bem estruturada para se tornar um especialista em Python: são 5 etapas, cada uma com 45 dias, onde você dedica de 30 a 60 minutos por dia em um ritmo eficiente. Utilizando a técnica Pomodoro, você otimiza seu tempo e reduz erros, garantindo um aprendizado consistente e eficaz. Tudo o que você precisa para avançar em sua trajetória e se destacar como um desenvolvedor Python de excelência!
                            </p>
                        </div>
                    </div>
                    <div class="h-[230px] flex flex-col items-center justify-center">
                        <img src="./sales-page-python-img/Step-by-Step.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Tablet() {
    return (
        <>
            <div class="h-[847px] flex flex-col items-center justify-center gap-[80px] px-[64px] py-[64px]">
                <div class='flex flex-col items-center gap-[80px]'>
                    <div class="w-[768px] flex flex-col items-center gap-[16px]">
                        <div>
                            <Badge type='primary' text="MÉTODO"/>
                        </div>
                        <div class="flex flex-col items-center gap-[24px]">
                            <h3 class='font-[600] text-[38px] text-[#F6FBFF]'>Step by Step</h3>
                            <p class='font-[400] text-[18px] text-[#F6FBFF] text-center'>Nosso método Step by Step é como uma trilha bem estruturada para se tornar um especialista em Python: são 5 etapas, cada uma com 45 dias, onde você dedica de 30 a 60 minutos por dia em um ritmo eficiente. Utilizando a técnica Pomodoro, você otimiza seu tempo e reduz erros, garantindo um aprendizado consistente e eficaz. Tudo o que você precisa para avançar em sua trajetória e se destacar como um desenvolvedor Python de excelência!</p>
                        </div>
                    </div>
                    <div class="h-[447px] p-[80px] flex flex-col items-center justify-center bg-[#212426] rounded-[40px]">
                        <img src="./sales-page-python-img/Step-by-Step.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Desktop() {
    return (
        <>
            <div class="h-[1173px] flex flex-col items-center justify-center gap-[80px] px-[64px] py-[112px]">
                <div class='flex flex-col items-center gap-[80px] '>
                    <div class="w-[1160px] flex flex-col items-center gap-[16px]">
                        <div>
                            <Badge type='primary' text="MÉTODO"/>
                        </div>
                        <div class="flex flex-col items-center gap-[24px]">
                            <h3 class='font-[600] text-[56px] text-[#F6FBFF]'>Step by Step</h3>
                            <p class='font-[400] text-[24px] text-[#F6FBFF] text-center'>Nosso método Step by Step é como uma trilha bem estruturada para se tornar um especialista em Python: são 5 etapas, cada uma com 45 dias, onde você dedica de 30 a 60 minutos por dia em um ritmo eficiente. Utilizando a técnica Pomodoro, você otimiza seu tempo e reduz erros, garantindo um aprendizado consistente e eficaz. Tudo o que você precisa para avançar em sua trajetória e se destacar como um desenvolvedor Python de excelência!</p>
                        </div>
                    </div>
                    <div class="h-[613px] p-[80px] flex flex-col items-center justify-center bg-[#212426] rounded-[40px]">
                        <img src="./sales-page-python-img/Step-by-Step.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

function StepByStepSection() {
    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <Mobile />
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <Tablet />
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <Desktop />
            </div>
        </>
    )
}

export default StepByStepSection
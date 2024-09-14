import Badge from "./Badge.njs";

function Mobile() {
    return (
        <>
            <div class="h-[552px] flex flex-col items-center justify-center gap-[40px] px-[32px] py-[40px]">
                <div class='w-[411px] flex flex-col items-center gap-[40px]'>
                    <div class="flex flex-col items-center gap-[16px]">
                        <div>
                            <Badge type='primary' text="MÉTODO"/>
                        </div>
                        <div class="flex flex-col items-center gap-[24px]">
                            <h2 class='font-[600] text-[28px] text-[#F6FBFF]'>Step by Step</h2>
                            <p class='font-[400] text-[16px] text-[#F6FBFF] text-center'>São 5 fases chamadas de ”STEP” . Em cada step você terá 45 dias de estudos dedicando de 30 a 60min por dia usando a técnica de pomodoro para melhorar sua eficiencia no estudo.</p>
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
                            <p class='font-[400] text-[18px] text-[#F6FBFF] text-center'>São 5 fases chamadas de ”STEP” . Em cada step você terá 45 dias de estudos dedicando de 30 a 60min por dia usando a técnica de pomodoro para melhorar sua eficiencia no estudo.</p>
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
                <div class='flex flex-col items-center gap-[80px]'>
                    <div class="w-[768px] flex flex-col items-center gap-[16px]">
                        <div>
                            <Badge type='primary' text="MÉTODO"/>
                        </div>
                        <div class="flex flex-col items-center gap-[24px]">
                            <h3 class='font-[600] text-[56px] text-[#F6FBFF]'>Step by Step</h3>
                            <p class='font-[400] text-[24px] text-[#F6FBFF] text-center'>São 5 fases chamadas de ”STEP” . Em cada step você terá 45 dias de estudos dedicando de 30 a 60min por dia usando a técnica de pomodoro para melhorar sua eficiencia no estudo.</p>
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
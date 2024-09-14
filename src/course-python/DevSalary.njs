import './devSalary.css'
import './hero.css'


export default function DevSalary(){
    return(
        <>
        <section class="bg-dev-salary-python-tablet py-12">
            <div class="relative my-5 w-[335px] md:w-[725px] lg:w-[800px] m-auto pt-10 mb-10 lg:mb-32">
                <div class="hidden md:flex font-semibold items-center m-auto w-fit bg-[#FFDA17] h-[33px] px-[14px] py-[6px] lg:px-[20px] lg:py-[20px] lg:font-bold rounded-[4px] hover:cursor-default relative mb-5 lg:mb-8">
                    <span class="super-salary">SUPER SALÁRIOS</span>
                </div>
                    <h2 class="text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#f6fbff]">Quanto ganha um programador Python?
                    </h2>
            </div>
            <div class="bg-dev-salary-python m-0 mt-9 w-screen flex flex-col items-center align-baseline text-[#f6fbff]">
        {/* CARD DEVELOPER SALARY */}
            <div class="relative w-full">
                {/* HEAD SECTION */}
                <div class="relative md:justify-center flex flex-col md:flex-row md:items-end">
                    {/* CARD DEVELOPER SALARY JR*/}
                    <div class="px-8 py-10">
                        <div>
                            <div class="w-[73px] h-[26px] flex justify-center items-center p-5 rounded bg-[#9747ff] mb-2.5">
                                <h3 class="text-center space-mono text-[16px] py-1 px-3.5">JUNIOR</h3>
                            </div>
                            <div class="mb-7">
                                <h4 class="text-[32px] md:text-[22px] lg:text-2xl font-semibold">R$ 3200 a R$ 4000</h4>
                                <p class="text-white">Segundo o <span class="text-[#9747FF]">Glassdoor</span></p>
                            </div>
                        </div>
                        {/* SALARY CHART */}
                        <div class="w-44 md:w-22 min-[1400px]:w-[27rem] h-16 lg:h-12 block rounded-t-3xl bg-gradient-to-t from-[#41a4fe] to-[#68b6ff] font-normal">
                        </div>
                    </div>

                    {/* CARD DEVELOPER SALARY PLENO */}
                    <div class="px-8 py-10">
                        <div>
                            <div class="w-[73px] h-[26px] flex justify-center items-center p-5 rounded bg-[#9747ff] mb-2.5">
                                <h3 class="text-center space-mono-bold text-[16px] py-1 px-3.5">PLENO</h3>
                            </div>
                            <div class="mb-7">
                                <h4 class="text-[32px] md:text-[22px] lg:text-2xl font-semibold">R$ 4000 a R$ 8400</h4>
                                <p class="text-white">Segundo o <span class="text-[#9747FF]">Glassdoor</span></p>
                            </div>
                        </div>
                        {/* SALARY CHART */}
                        <div class="w-64 md:w-44 min-[1400px]:w-[25rem] h-20 block rounded-t-3xl bg-gradient-to-t from-[#41a4fe] to-[#68b6ff] font-normal">
                        </div>
                    </div>

                    {/* CARD DEVELOPER SALARY SENIOR*/}
                    <div class="px-8 py-10">
                        <div>
                            <div class="w-[73px] h-[26px] flex justify-center items-center p-5 rounded bg-[#9747ff] mb-2.5">
                                <h3 class="text-center space-mono-bold text-[16px] py-1 px-3.5">SENIOR</h3>
                            </div>
                            <div class="mb-7">
                                <h4 class="text-[32px] md:text-[22px] lg:text-2xl font-semibold">R$ 8400 a R$ 12500</h4>
                                <p class="text-white">Segundo o <span class="text-[#9747FF]">Glassdoor</span></p>
                            </div>
                        </div>
                        {/* SALARY CHART */}
                        <div class="w-80 md:w-full min-[1400px]:w-[25rem] h-24 lg:h-32 block rounded-t-3xl bg-gradient-to-t from-[#41a4fe] to-[#68b6ff] font-normal">
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        </section>
    </>
    )
}
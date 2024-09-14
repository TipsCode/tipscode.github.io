function PrimaryButton(text) {
    const colorStyle = 'bg-[#5FE2FF]'
    text = text.text

    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <div class={`flex w-fit items-center ${colorStyle} h-[37px] px-[22px] py-[8px] rounded-full hover:bg-[#96ECFF] hover:shadow-[0px_0px_4px_rgba(95,266,255,0.15)] hover:cursor-pointer`}>
                    <p class='text-[14px] font-[500]'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[54px] px-[26px] py-[12px] rounded-full hover:bg-[#96ECFF] hover:shadow-[0px_0px_4px_rgba(95,266,255,0.15)] hover:cursor-pointer`}>
                    <p class='text-[20px] font-[500]'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[60px] px-[28px] py-[12px] rounded-full hover:bg-[#5FE2FF] hover:shadow-[0px_0px_8px_rgba(95,266,255,0.3)] hover:cursor-pointer`}>
                    <p class='text-[24px] font-[500]'>{text}</p>
                </div>
            </div>
        </>
    )
}

function SecondaryButton(text) {
    const colorStyle = 'bg-[#69B7FF]'
    text = text.text

    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <div class={`flex w-fit items-center ${colorStyle} h-[30px] px-[20px] py-[6px] rounded-full hover:bg-[#8AC7FF] hover:shadow-[0px_0px_4px_rgba(105,183,255,0.15)] hover:cursor-pointer`}>
                    <p class='text-[12px] font-[500]'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[44px] px-[26px] py-[12px] rounded-full hover:bg-[#8AC7FF] hover:shadow-[0px_0px_4px_rgba(105,183,255,0.15)] hover:cursor-pointer`}>
                    <p class='text-[16px] font-[500]'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[51px] px-[28px] py-[12px] rounded-full hover:bg-[#69B7FF] hover:shadow-[0px_0px_8px_rgba(105,183,255,0.30)] hover:cursor-pointer`}>
                    <p class='text-[18px] font-[600]'>{text}</p>
                </div>
            </div>
        </>
    )
}

function WhatsappButton(text) {
    const colorStyle = 'bg-[#2BFF59]'
    text = text.text

    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <div class={`flex w-fit items-center ${colorStyle} h-[30px] px-[35px] py-[6px]  my-4 rounded-full hover:bg-[#66FF88] hover:shadow-[0px_0px_4px_rgba(43,255,89,0.15)] hover:cursor-pointer`}>
                    <p class='text-[12px] font-[500] text-black '>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[44px] px-[26px] py-[12px] rounded-full hover:bg-[#66FF88] hover:shadow-[0px_0px_4px_rgba(43,255,89,0.15)] hover:cursor-pointer`}>
                    <p class='text-[16px] font-[500] text-black'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[51px] px-[28px] py-[12px] rounded-full hover:bg-[#2AFF59] hover:shadow-[0px_0px_8px_rgba(43,255,89,0.30)] hover:cursor-pointer`}>
                    <p class='text-[19px] font-[500] text-black'>{text}</p>
                </div>
            </div>
        </>
    )
}

function Button(props) {
    // O componente botão tem 3 tipos de variação. ['primary', 'secondary', 'whatsapp']
    const type = props.type;
    const text = props.text

    let buttonComponent;

    if (type === 'primary') {
        buttonComponent = <PrimaryButton text={text}/>;
    } else if (type === 'secondary') {
        buttonComponent = <SecondaryButton text={text}/>;
    } else if (type === 'whatsapp') {
        buttonComponent = <WhatsappButton text={text}/>;
    } else {
        buttonComponent = null; // Ou um componente padrão/placeholder
    }

   return (
    <>
        {buttonComponent}
    </>
    )
}

export default Button
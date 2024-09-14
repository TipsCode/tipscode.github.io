const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    .font-space-mono {
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        font-style: normal;
    }
`;

function PrimaryBadge(text) {
    const colorStyle = 'bg-[#FFDA17]'
    text = text.text

    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <div class={`flex w-fit items-center ${colorStyle} h-[33px] px-[14px] py-[6px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[14px] font-space-mono'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[40px] px-[16px] py-[8px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[16px] font-space-mono'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[47px] px-[18px] py-[10px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[18px] font-space-mono'>{text}</p>
                </div>
            </div>
        </>
    );
}

function SecondaryBadge(text) {
    const colorStyle = 'bg-[#9747FF]'
    text = text.text

    return (
        <>
            {/* Renderizar apenas em mobile */}
            <div class="lg:hidden">
                <div class={`flex w-fit items-center ${colorStyle} h-[26px] px-[14px] py-[4px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[12px] text-[#F6FBFF] font-space-mono'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas tablet) */}
            <div class="hidden xl:hidden lg:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[33px] px-[16px] py-[6px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[14px] text-[#F6FBFF] font-space-mono'>{text}</p>
                </div>
            </div>

            {/* Renderizar apenas em telas desktop */}
            <div class="hidden xl:block">
                <div class={`flex w-fit items-center ${colorStyle} h-[40px] px-[18px] py-[8px] rounded-[4px] hover:cursor-default`}>
                    <p class='text-[16px] text-[#F6FBFF] font-space-mono'>{text}</p>
                </div>
            </div>
        </>
    );
}

function Badge(props) {
    const type = props.type;
    const text = props.text;

    let badgeComponent;

    if (type === 'primary') {
        badgeComponent = <PrimaryBadge text={text}/>;
    } else if (type === 'secondary') {
        badgeComponent = <SecondaryBadge text={text}/>;
    } else {
        badgeComponent = null; // Ou um componente padrão/placeholder
    }

    return(
        <>
            <style>{fontStyles}</style>
            {badgeComponent}
        </>
    )
}
export default Badge
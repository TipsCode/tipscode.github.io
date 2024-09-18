export default function SectionContentMobile({src, title, alt}) {
    return (
        <section class="my-2 mx-5 flex md:gap-20 md:my-4 flex-col md:flex-row min-[1300px]:hidden m-auto">
            {/* <h3 class="text-center text-[34px] leading-[28.8px] md:text-[38px] lg:text-5xl md:leading-[45.6px] font-semibold mb-10">O que você irá aprender</h3> */}
            <img class="w-[363px] h-[347px] md:w-[211px] md:h-[211px] rounded-[20px] max-md:m-auto" src={src} alt={alt} />
            <div class="mx-14 text-white lg:w-[584px]">
            <h4 class="leading-[28.6px] text-[22px] md:leading-[36px] md:text-[30px] font-bold md:font-semibold my-4">{title}</h4>
        </div>
    </section>
    );
  }
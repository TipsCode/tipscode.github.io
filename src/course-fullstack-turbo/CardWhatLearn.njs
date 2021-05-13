export default function CardWhatLearn({ nameClass, nameSrc, nameAlt, contentH5, contentH3, contentP, orderImg }) {

  return (
    <div class={nameClass}>
      <div class="w-5/6 sm:w-1/2 p-6">
        <h5 class="text-gray-400 font-bold leading-none mb-3">
          {contentH5}
        </h5>
        <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
          {contentH3}
        </h3>
        <p class="text-gray-200 mb-8">
          {contentP}
        </p>
      </div>

      <div class={orderImg}>
        <img src={nameSrc} alt={nameAlt} loading="lazy" width="464" height="391" />
      </div>
    </div>
  );
}
export default function CardBonus({ class: classes, contentSpan, src, alt, contentH3, contentP }) {
  return (
    <div class={classes.div}>
      <span class={classes.span}>{contentSpan}</span>
      <div class="lg:p-14">
        <div class="w-full p-6">
          <img class="mx-auto w-64" src={src} alt={alt} loading="lazy" width="256" height="194" />
        </div>
        <h3 class="text-xl lg:text-3xl  text-gray-100 font-bold leading mb-8">{contentH3}</h3>
        <p class="text-gray-200 mb-8 text-lg tracking-wide">{ contentP }</p>
      </div>
    </div>
  );
}
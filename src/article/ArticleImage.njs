export default function ArticleImage({ imgWidth, imgSrc, articleDate }) {
  return (
    <figure class="mt-10">
      <img width={imgWidth} src={imgSrc} />
      <ficaption>{articleDate}</ficaption>
    </figure>
  );
}
function ArticleCard({ title, readingTime, imgHome, slug }) {
  return (
    <div class="bg-white shadow rounded relative">
      <figure>
        <img class="w-full" src={imgHome} alt={title} height="330" loading="lazy" />
      </figure>
      <div class="p-4 flex flex-col justify-between">
        <h3 class="text-tips-gray-dark text-opacity-80 font-bold text-2xl traking-wide leading-relaxed mb-8">
          <a href={`/${slug}`} class="block w-full font-medium">
            {title}
          </a>
        </h3>
        <div class="flex justify-between text-gray-600 absolute bottom-0 left-0 pl-4 pb-4">
          {readingTime} minutos
        </div>
      </div>
    </div>
  );
}

export default function ArticleGrid({ articles }) {
  return (
    <div class="grid sm:grid-cols-3 md:grid-cols-3 gap-6">
      {articles?.map((article) => <ArticleCard {...article} />)}
    </div>
  );
}
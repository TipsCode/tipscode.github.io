function ArticleCard({ title, readingTime, slug }) {
  return (
    <div class="bg-white shadow rounded relative">
      <figure>
        <img class="w-full" src="/img-blog.png" />
      </figure>
      <div class="p-4 flex flex-col justify-between">
        <h3 class="text-gray-800 font-semibold text-3xl mb-8">
          <a href={`/${slug}`} class="block w-full font-normal">
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
    <div class="grid sm:grid-cols-3 md:grid-cols-3 gap-4">
      {articles?.map((article) => <ArticleCard {...article} />)}
    </div>
  );
}
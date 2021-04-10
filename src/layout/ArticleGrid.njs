function ArticleCard({ title, readingTime, slug }) {
  return (
    <div class="bg-white shadow rounded">
      <div class="p-4">
        <h3 class="text-gray-800 font-bold text-3xl"> {title} </h3>
        <div class="flex justify-between items-center">
          <span> {readingTime} </span>
          <a href={`/${slug}`} class="bg-green-500 px-4 py-2 text-white shadow-sm rounded-sm"> Ler Mais </a>
        </div>
      </div>
    </div>
  )
}

export default function ArticleGrid({ articles }) {
  return (
    <div class="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
      {articles?.map((article) => <ArticleCard {...article} />)}
    </div>
  )
}
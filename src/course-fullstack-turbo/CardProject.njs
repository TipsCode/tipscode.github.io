export default function CardProject ({src, alt, contentP}) {

    return (
        <div class="max-w-xs rounded-md overflow-hidden shadow-md my-2 bg-tips-gray-dark">
            <figure>
                <img class="w-full cursor-pointer" src={src} alt={alt} loading="lazy" width="320" height="153" />
            </figure>

            <div class="px-6 py-6">
                <p class="text-grey-darker font-medium text-base text-indigo-100">
                    { contentP }
                </p>
            </div>
        </div>
    )
}
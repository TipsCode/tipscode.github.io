export default function StudentTestimonial({ testimonal, author, office }) {
  return (
    <div class="p-4 text-gray-800 rounded-lg shadow-md">
      <div class="mb-2">
        <p class="mb-2 text-center text-white">
          {testimonal}
        </p>
        <div class="flex flex-col items-center justify-center">
          <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
            <img
              src="/sales-page-img/testmonials-img/img-depoimento-avatar.png"
              alt="img"
              class="object-cover object-center w-full h-full"
            />
          </div>
          <h5 class="font-bold text-indigo-600">{author}</h5>
          <p class="text-sm text-white">{office}</p>
        </div>
      </div>
    </div>
  );
}
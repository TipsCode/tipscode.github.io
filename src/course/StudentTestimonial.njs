export default function StudentTestimonial({nameSrc, nameAlt, studentsName }) {

    return (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
            <img
            class="w-full cursor-pointer"
            src={nameSrc}
            alt={nameAlt}
            />

            <div class="px-6 py-6  bg-tips-blue" >
                <div class="font-bold text-2xl mb-3 text-white">
                    { studentsName }
                </div>
                <p class="text-grey-darker text-base text-indigo-100">
                    Aluno TipsCode Turbo.
                </p>
            </div>

        </div>
    )
}
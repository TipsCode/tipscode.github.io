import StudentTestimonial from './StudentTestimonial';

export default function Testmonials() {
  return (
    <>
      <div class="container mx-auto">
        <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 text-center text-white md:w-5/6 mx-auto">O que estão falando sobre o curso Fullstack Turbo da TipsCode</h2>
        <div class="flex items-center justify-center">

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

            <StudentTestimonial
              nameSrc="./img-depoimento-ari-silva.png"
              nameAlt="Ari Silva"
              studentsName="Ari Silva"
              video="https://youtu.be/rg966jwrfoY"
            />

            <StudentTestimonial
              nameSrc="./img-depoimento-guilherme.png"
              nameAlt="Guilherme Nogueira"
              studentsName="Guilherme Nogueira"
              video="https://youtu.be/3Fvkl1ksGqU"
            />

            <StudentTestimonial
              nameSrc="/img-depoimento-mihai.png"
              nameAlt="Mihai"
              studentsName="Mihai"
              video="https://youtu.be/hGo5d5f-Rqc"
            />

            <StudentTestimonial
              nameSrc="/img-depoimento-felipe.png"
              nameAlt="Felipe Loures"
              studentsName="Felipe Loures"
              video="https://youtu.be/dufgU3KqhO8"
            />

            <StudentTestimonial
              nameSrc="/img-depoimento-ricardo.png"
              nameAlt="Ricardo"
              studentsName="Ricardo"
              video="https://youtu.be/-xVtc_m35GU"
            />

            <StudentTestimonial
              nameSrc="/img-depoimento-claudio.png"
              nameAlt="Claudio"
              studentsName="Claudio"
              video="https://youtu.be/PkKn1xrjpvw"
            />


            <StudentTestimonial
              nameSrc="./img-depoimento-joneivison.png"
              nameAlt="Joneivison"
              studentsName="Joneivison"
              video="https://youtu.be/HYIb-Gj4yUs"
            />

          </div>
        </div>
      </div>
    </>
  );
}
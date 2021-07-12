import StudentTestimonial from './StudentTestimonial';

export default function Testmonials() {
  return (
    <>
      <div class="container mx-auto">
        <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 text-center text-white md:w-5/6 mx-auto">O que estão falando sobre o curso Fullstack Turbo da TipsCode</h2>
        <div class="flex items-center justify-center mx-3">

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-jefferson.webp"
              nameAlt="Jefferson Ferreira"
              studentsName="Jefferson Ferreira"
              video="https://www.youtube.com/embed/M_mn5EGwtnc"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-ari-silva.webp"
              nameAlt="Ari Silva"
              studentsName="Ari Silva"
              video="https://www.youtube.com/embed/rg966jwrfoY"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-guilherme.webp"
              nameAlt="Guilherme Nogueira"
              studentsName="Guilherme Nogueira"
              video="https://www.youtube.com/embed/3Fvkl1ksGqU"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-mihai.webp"
              nameAlt="Mihai"
              studentsName="Mihai"
              video="https://www.youtube.com/embed/hGo5d5f-Rqc"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-felipe.webp"
              nameAlt="Felipe Loures"
              studentsName="Felipe Loures"
              video="https://www.youtube.com/embed/dufgU3KqhO8"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-ricardo.webp"
              nameAlt="Ricardo"
              studentsName="Ricardo"
              video="https://www.youtube.com/embed/-xVtc_m35GU"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-claudio.webp"
              nameAlt="Claudio"
              studentsName="Claudio"
              video="https://www.youtube.com/embed/PkKn1xrjpvw"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-joneivison.webp"
              nameAlt="Joneivison"
              studentsName="Joneivison"
              video="https://www.youtube.com/embed/HYIb-Gj4yUs"
            />

          </div>
        </div>
      </div>
    </>
  );
}
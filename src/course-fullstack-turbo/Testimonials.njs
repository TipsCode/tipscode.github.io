import StudentTestimonial from './StudentTestimonial';

export default function Testmonials() {
  return (
    <>
      <div class="container mx-auto">
        <h2 class="w-full text-3xl md:text-4xl font-bold leading-tight text-center text-white mb-5">Veja alguns resultados dos alunos</h2>
        <div class="flex items-center justify-center mx-3">

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

          <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-neto.png"
              nameAlt="COO da Tax Contabilidade Clodomiro Neto"
              studentsName="Clodomiro Neto"
              video="https://www.youtube.com/embed/HHy3c8PyL94"
            />


            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-natany.png"
              nameAlt="Natany dos Santos"
              studentsName="Natany dos Santos"
              video="https://www.youtube.com/embed/PisFUHMM8VM"
            />

            <StudentTestimonial
              nameSrc="/sales-page-img/testmonials-img/img-depoimento-thiago.png"
              nameAlt="Thiago Scheneider"
              studentsName="Thiago Scheneider"
              video="https://www.youtube.com/embed/JuGRSlHFukU"
            />

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
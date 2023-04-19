import CtaButton from './CtaButton';

function PrintTestmonial({ srcPrint }) {
  return (
    <figure class="m-3">
      <img src={srcPrint} alt="" />
    </figure>
  );
}

export default function Print() {
  return (
    <div class="container mx-auto">
      <div class="mb-8 text-center">
        <h2 class="text-2xl md:text-4xl font-bold text-white">O que estão falando sobre o curso</h2>
      </div>

      <div class="lg:grid lg:grid-cols-4 lg:gap-x-2">
        <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/10-testmonial.png" />
        <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/02-testmonial.png" />
        <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/03-testmonial.png" />

        <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/04-testmonial.png" />

      </div>
      <CtaButton />
    </div>
  );
}
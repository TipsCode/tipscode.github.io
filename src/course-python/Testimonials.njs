
function PrintTestmonial({ srcPrint }) {
  return (
    <figure class="m-3">
      <img src={srcPrint} alt="" />
    </figure>
  );
}

export default function Testimonials() {
  return (
    <div class="container mx-auto">
      <div class="mb-8 mt-10 text-center">
        <h2 class="text-4xl font-bold text-white">Veja o que <br />estão falando 💛</h2>
      </div>

      <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/clariana.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/luiz-gustavo.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/lucas-goe.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/paulo.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/rodolfo.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/silvana.png" />
        <PrintTestmonial srcPrint="/sales-page-img/depoimento-python/Jovane.jpeg" />


        
      </div>
  
    </div>
  );
}
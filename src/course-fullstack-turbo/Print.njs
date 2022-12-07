import Nullstack from 'nullstack';

class Print extends Nullstack {

  renderPrintTestmonial({srcPrint}) {
    return (
      <figure class="m-3">
          <img src={srcPrint} alt="" />
      </figure>
    )
  }

  render() {
    return (
        <div class="container mx-auto">
            <div class="mb-8 text-center">
                <h2 class="text-2xl md:text-4xl font-bold text-white">O que estão falando sobre o curso</h2>
            </div>

            <div class="lg:grid lg:grid-cols-4 lg:gap-x-2">
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/01-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/02-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/03-testmonial.png" />

                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/04-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/05-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/06-testmonial.png" />

                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/07-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/08-testmonial.png" />

            </div>
        </div>
    );
  }

}

export default Print;
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

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/27-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/24-testmonial.png" />

                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/23-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/22-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/21-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/12-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/16-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/25-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/26-testmonial.png" />
                
              
            </div>
        </div>
    );
  }

}

export default Print;
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
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/8-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/9-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/10-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/11-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/1-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/2-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/3-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/4-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/5-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/6-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/7-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/13-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/14-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/15-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/19-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/20-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/17-testmonial.png" />
                <PrintTestmonial srcPrint="/sales-page-img/testmonials-print/18-testmonial.png" />
              
            </div>
        </div>
    );
  }

}

export default Print;
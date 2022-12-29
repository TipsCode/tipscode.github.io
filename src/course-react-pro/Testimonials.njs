import Nullstack from 'nullstack';
class Testimonials extends Nullstack {

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
                <h2 class="text-4xl font-bold text-white">Veja o que <br />estão falando 💛</h2>
            </div>

            <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
                <PrintTestmonial srcPrint="/sales-page-img/print-react/06-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/02-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/03-depoimento.png" />

                <PrintTestmonial srcPrint="/sales-page-img/print-react/04-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/05-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/07-depoimento.png" />

                <PrintTestmonial srcPrint="/sales-page-img/print-react/08-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/09-depoimento.png" />
                <PrintTestmonial srcPrint="/sales-page-img/print-react/01-depoimento.png" />
            </div>
            <CtaButton />
        </div>
    );
  }

}

export default Testimonials;
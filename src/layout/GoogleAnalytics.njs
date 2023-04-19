import Nullstack from 'nullstack';

class GoogleAnalytics extends Nullstack {

  hydrate({ router, page, id }) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', id, {
      page_title: page.title,
      page_path: router.url,
    });

    window.addEventListener(page.event, () => {
      gtag('event', 'page_view', {
        page_title: page.title,
        page_path: router.url,
      });
    });
  }

  render({ id }) {
    return (
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    );
  }

}

export default GoogleAnalytics;
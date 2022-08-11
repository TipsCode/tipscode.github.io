import Nullstack from 'nullstack';


class UpsellFullStack extends Nullstack {
  
  
  async hydrate() {

   
      /* eslint-disable */
if (!Upsell) {
  var Upsell = {};
}

if (!Logger) {
  var Logger = {};
}

Logger = {
  debugIsOn : false,
  setDebug : function(isOn) {
    this.debugIsOn = isOn;
  },
  error : function(msg) {
    if (this.debugIsOn) {
      window.alert(msg);
    }
  }
};

Upsell.Util = {
  getProtocol : function() {
    return document.location.protocol;
  },
  render : function(template, params) {
    return template.replace(/\#\{([^{}]*)\}/g, function(a, b) {
      var r = params[b] || '';
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
  },
  toQueryString : function(params) {
    var pairs = [];
    for (var key in params) {
      if (params[key] !== null && params[key] !== '' && typeof params[key] !== 'function') {
        pairs.push( [ key, params[key] ].join('='));
      }
    }
    return pairs.join('&');
  },
  isIE : function(test) {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      if (typeof test === "function") {
        return test(Number(RegExp.$1));
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
};
Upsell.Page = {
  getDimensions : function() {
    var de = document.documentElement;
    var width = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var height = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    return {
      width : width,
      height : height
    };
  }
};
Upsell.Frame = {
  urlFunnel : function(params){
    var queryString = window.location.search;
    console.log(params);
    var currentHost = window.location.hostname.indexOf('buildstaging.com') !== -1
      ? 'https://app-hotmart-checkout.buildstaging.com/funnel'
      : 'https://pay.hotmart.com/funnel';
    if (queryString.indexOf('?fsid') === -1) {
      currentHost += '?'
    }
    var url = currentHost + queryString + "&" + (params.buttonImage !== '' ? 'buttonImage=' + params.buttonImage + '&' : '') + (params.customStyle !== '' ? 'customStyle=' + params.customStyle + '&' : '');
    var funnel = '<iframe id="hotmart_upsell_iframe" class="hotmart_upsell_iframe" src="' + url + '#{query}" width="#{width}" height="#{height}" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>';

    return { funnelFrame: funnel };
  },
  content_template : function(params) {
    return { frame : this.urlFunnel(params).funnelFrame }
  },
  //'<iframe id="hotmart_upsell_iframe" src="' + document.querySelector('script[src$="upsell-window.js"]').getAttribute('src').split('js/widgets/upsell-window.js')[0] + '/widgets/funnel/upsell.html?#{query}" width="#{width}" height="#{height}" frameborder="0" scrolling="auto" allowtransparency="true" ></iframe>',
  //content_template : '<iframe id="hotmart_upsell_iframe" src="//www.hotmart.net.br/widgets/funnel/upsell.html?#{query}" width="#{width}" height="#{height}" frameborder="0" scrolling="auto" allowtransparency="true" ></iframe>',

  getBox : function() {
    return document.getElementById("box_hotmart");
  },
  getQuery : function(params) {
    return Upsell.Util.toQueryString( {
      key : params.key,
      launcherCode: params.launcherCode
    });
  },
  getFrameParams : function(params) {
    return {
      protocol : Upsell.Util.getProtocol(),
      query : this.getQuery(params),
      width : params.width,
      height : params.height,
      buttonImage: params.buttonImage || '',
      customStyle: params.customStyle || ''
    };
  },
  b64EncodeUnicode: function(str){
    // Read this - https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
      }))
  },
  show : function(params) {
    params.buttonImage = this.b64EncodeUnicode(params.buttonImage || '');
    params.customStyle = this.b64EncodeUnicode(params.customStyle || '');

    var iframeParams = this.getFrameParams(params);
    var iframeHtml = Upsell.Util.render(this.content_template(params).frame, iframeParams);
    var box = this.getBox();

    var iframeStyles = document.createElement('style');
    iframeStyles.innerHTML = '@media only screen and (max-width: 720px) { .hotmart_upsell_iframe {width: 100%; height: 380px} }';
    document.head.appendChild(iframeStyles);

    box.innerHTML = iframeHtml;
  }
};
Upsell.Widget = {

  setupOptions : function(params, optDebug) {
    if (optDebug !== null && typeof (optDebug) !== 'undefined') {
      Logger.setDebug(optDebug);
    } if (typeof (params) === 'undefined' || params === null) {
      Logger.error("Nenhum parametro informado ao Widget do Hotmart. Verifique se a variavel 'opts' se ela esta preenchida ou com algum erro de sintaxe.");
      return;
    } if (params.key === null) {
      Logger.error("A chave ('key') do widget deve ser informada. Verifique na variavel 'opts' e adicione a propriedade 'key' com o valor retornado pelo Hotmart");
      return;
    }
    this.params = params;
  },
  show : function(options, optDebug) {
    this.setupOptions(options, optDebug);
    Upsell.Frame.show(this.params);
  }
};

function getQueryParameter( name, url ) {
  if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results === null ? null : results[1];

/* eslint-disable */
    }
    
    let opts = {
      key: 'USL-78166-217722-c272f9011c2f26f5d7617aef60db41be',
      width: '650' ,
      height: '420'
    };
      Upsell.Widget.show(opts);       
  }
    
   


  render() {
    return (
      
      <section class="bg-zing w-full h-full text-white text-center">
      
          <div class="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-2">

              <div class="flex items-center ">
                <a class="lg:pt-16 toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                  <img src="/TipsCodelogo.png" alt="TipsCode" loading="lazy" width="186" height="66" />
                </a>

              </div>
          </div>

          <div class="text-center px-3 lg:px-0">
              <h1 class="py-10 text-3xl md:text-5xl text-white font-bold">Obrigado por comprar<br /> 
              <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">conosco!</span>
              </h1>
          
          </div>

        <div class="container mx-auto">

          <div class="flex-col" style="height:90vh">
            <div>
              <p class="text-1xl prose max-w-none text-white">
                  Por conta de sua atitude em ter dado os primeiros passos como programador web de referência
                  vou fazer algo que eu jamais fiz na minha vida.Vou disponibilizar para você a nossa Formação completa Full 
                  Stack Turbo por um preço ridículo.
              
                O seu <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">preço atual é 297,00</span>  mas porque você adquiriu o curso de react, <br /> você vai 
                levar a formação full stack por apenas

                <div class="mt-5">
                  <div>
                    <span class="text-3xl line-through decoration-pink-500">de R$297,00</span> 
                  </div>
                  <span class="text-5xl font-bold ">Por apenas R$197,00</span> 
                </div>
              
              
                </p>
            </div>

            <div class="mt-5">
                <p class="mt-5 prose max-w-none text-white">  Isso mesmo que você está lendo, apenas R$197,00! Este treinamento vai complementar o curso de react, <br />
                tornando você um profissional capaz de viver de programação web, mobile e empreendedorismo. 
            
                Você nunca mais vai precisar investir em outros cursos! Você vai aprender as tecnologias que estão em 
                tendências no mercado atual, isso quer dizer que você será capaz de desenvolver um sistema do zero,
                com banco de dados, páginas com responsividade e  com toda regra de negócio usando <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">JAVASCRIPT, HTML5, GIT E GITHUB 
                CSS3, MONDODB, NODEJS</span> ...</p>
            </div>

            <div>
              <div id="box_hotmart"></div>
            </div>
            
          </div>
        </div>
     
        
       
       
          
      </section>
    );
  }

}

export default UpsellFullStack;
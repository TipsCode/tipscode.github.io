import Nullstack from 'nullstack';

class LeadForm extends Nullstack {

  loading = false;

  render({ class: classes, config }) {
    return (
      <div>
        <form action="https://paginas.rocks/pages/index/414881" method="post" default onsubmit={{ loading: true }}>
          <input id="id" name="id" type="hidden" value={config.id} />
          <input id="mid" name="mid" type="hidden" value={config.mid} />
          <input id="pid" name="pid" type="hidden" value={config.pid} />
          <input id="list_id" name="list_id" type="hidden" value={config.list} />
          <input id="provider" name="provider" type="hidden" value="leadlovers" />
          <input name="email" type="text" placeholder="Dgite seu melhor e-mail" class={classes.input} />
          <button type="submit" class={classes.button}>{this.loading ? 'Inscrevendo...' : 'Inscrever-se'}</button>
          <input type="hidden" id="source" name="source" value="" />
          <img src="https://llimages.com/redirect/redirect.aspx?A=V&p=15204812&m=414881" style="display: none;" />
        </form>
      </div>
    );
  }

}

export default LeadForm;
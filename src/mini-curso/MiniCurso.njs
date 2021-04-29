import Nullstack from 'nullstack';

import Content from './Content';
import Header from './Header'

class MiniCurso extends Nullstack {
    render() {
        return(
            <div class="bg-tips-dark">
                <Header />
                <Content />
            </div>
        )
    }
}

export default MiniCurso;
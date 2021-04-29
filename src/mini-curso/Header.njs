import Nullstack from 'nullstack';

class Header extends Nullstack {
    render() {
        return(
            <div class="px-4 sm:max-w-screen-xl sm:mx-auto  sm:flex justify-between">
                <div id="logo">
                    <img src="./TipsCodelogo.png" />
                </div>
                <ul class="flex justify-between p">
                    <li>
                        <span><img src="check-circle-green.svg" class="w-6" /></span>
                    </li>
                    <li>
                        <span><img src="check-circle-green.svg" class="w-6" /></span>
                    </li>
                    <li>
                        <span><img src="check-circle-green.svg" class="w-6" /></span>
                    </li>
                    <li>
                        <span><img src="check-circle-green.svg" class="w-6" /></span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
import './style.css'

function Header(){
    return(
        <header>
            <div className='container'>
                <div className='logo-header'>
                    <img src='assets/logo.png'/>
                </div>
    
                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
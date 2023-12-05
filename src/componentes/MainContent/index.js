import './estilo-MainContent.css'
import Banner from './Banner'
import SobreProdutos from './SobreProdutos'
import SobreEmpresa from './SobreEmpresa'
import Contato from './Contato'

export default function MainContent(){
    return(
        <main>
            <Banner/>
            <SobreProdutos/>
            <SobreEmpresa/>
            <Contato/>
        </main>
    )
}
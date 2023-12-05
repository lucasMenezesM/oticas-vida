import './estilo-sobre-empresa.css'

function SobreEmpresa(){
    return(
        <section id='sobre' className='limit-margin'>
            <div className='conteudo'>
                <h2>QUEM SOMOS NÓS</h2>

                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div className='secao-sobre-boxes'>
                {/* <div className='box-sobre'>
                    
                </div> */}

                <img src='assets/loja.png'/>

                <div className='box-sobre'>
                    <h3>NOSSAS FILIAS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className='box-sobre'>
                    <h3>ATENDIMENTO FLEXÍVEL</h3>

                    <p>Possuimos uma equipe que é treinada para te atender</p>
                </div>

                <img src='assets/atendimento.png'/>

                {/* <div className='box-sobre'>
                    
                </div> */}
            </div>
        </section>
    )
}

export default SobreEmpresa;
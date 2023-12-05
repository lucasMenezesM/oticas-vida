import './estilo-sobre-produtos.css'

export default function SobreProdutos(){
    return(
        <section id='produtos' className='limit-margin'>
            <div className='conteudo'>

                <h2>Nossos Produtos</h2>

                <p>Trabalhamos com óvculos de grau, óculos de sol, lentes transition nos modelos masculiuno, feminino e infantil</p>

                <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado</p>
            </div>

            

            <div className='boxes-produtos'>
                <div className='box'>
                    <h3>Óculos de Grau</h3>
                    <img src='assets/oculos01.png'/>
                    <p>R$ 500,00</p>
                </div>

                <div className='box'>
                    <h3>Óculos Transition</h3>
                    <img src='assets/oculos02.png'/>
                    <p>R$ 750,00</p>
                </div>

                <div className='box'>
                    <h3>Óculos de sol</h3>
                    <img src='assets/oculos03.png'/>
                    <p>R$ 700,00</p>
                </div>

                <div className='box'>
                    <h3>Óculos infantil</h3>
                    <img src='assets/oculos04.png'/>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className='lista'>
                <p>Todos os nossos produtos incluem:</p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}
import './estiloContato.css'
function Contato(){
    return (
        <section id="contato">
            <div className="container limit-margin">

                <div className='conteudo'>
                    <h2>FALE CONOSCO</h2>
                    <p>Não perca tempo, venha conehcer uma de nossas lokas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
                </div>

                <div className="boxes-contato">
                    
                    <div className="box-contato">
                        <p>Contato</p>
                        <figure>
                            <img src="assets/local.png"/>
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>

                        <figure>
                            <img src="assets/telefone.png"/>
                            <figcaption>(21) 9999-9999</figcaption>
                        </figure>

                        <figure>
                            <img src="assets/email.png"/>
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>

                    <div className="box-contato">
                        <p>Nossas Redes Sociais</p>
                        <figure>
                            <img src="assets/fb.png"/>
                            <figcaption>/ÓticasVida</figcaption>
                        </figure>

                        <figure>
                            <img src="assets/ig.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>

                        <figure>
                            <img src="assets/tt.png"/>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contato;
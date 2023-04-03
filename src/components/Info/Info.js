import './Info.css'

function Info(){
    return(
        <div className="info-container">
            <div className="info-block-container">
                <div className="info-quemsomos-container">
                    <img className="info-quemsomos-image" src="../../../images/quemsomos.png" alt="quem somos"></img>
                </div>
                <div className="info-text-container">
                    <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus sagittis nunc, 
                        in gravida dui tempus in. Mauris vehicula in arcu at tincidunt. Maecenas maximus, nunc a iaculis fermentum, 
                        massa dolor tincidunt sapien, nec ultricies neque nisl vel felis. In hac habitasse platea dictumst. 
                        Fusce iaculis velit et turpis tristique accumsan. Donec congue urna non libero scelerisque, in pharetra arcu semper. 
                        Ut pretium velit diam, et facilisis sapien sodales non. Cras sed arcu a dui cursus tincidunt sit amet id quam. 
                        Quisque et lacinia felis. Fusce odio metus, faucibus eu nulla et, pulvinar sollicitudin eros. 
                        Etiam sed nibh ullamcorper, ultrices ligula consequat, convallis mauris.</p>
                </div>
            </div>
            <div className="info-image-container">
                <img className="info-image-fachada" src="../../../images/fotofachada.png" alt="fachada"></img>
            </div>
        </div>
    )
}
export default Info